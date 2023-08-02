import { Heading, VStack } from "@chakra-ui/react"
import { useState } from "react"
// @ts-ignore
import { NovelEditor } from "@akkurateio/novel"
import axios from "axios"

export const handleUpload = async (
  file: File | undefined | null,
  withToast = false,
): Promise<{
  tmpPath: string
  originalName: string
  ok: boolean
}> => {
  if (!file) {
    return Promise.resolve({ tmpPath: "", originalName: "", ok: false })
  }

  return axios
    .post("/api/upload", {
      fileName: file.name,
      fileType: file.type,
    })
    .then(async (res) => {
      const upload = await fetch(res.data.url, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      })

      if (upload.ok) {
        return { tmpPath: res.data.path, originalName: file.name, ok: true }
      } else {
        return { tmpPath: "", originalName: "", ok: false }
      }
    })
    .catch((err) => {
      console.error(err)
      return { tmpPath: "", originalName: "", ok: false }
    })
}
export const addTipMedia = (data: {
  name: string
  media: {
    tmpPath: string
    originalName: string
    ok?: boolean
  }
}) => {
  return axios
    .post("http://notable.test/api/v1/tip-medias", data, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3NTM3MmNkNi0xNDk0LTQ1M2ItYTcwMC1iNjRjZDhmZWJkOTMiLCJqdGkiOiJlNmRiODIxMmY5NTM3ZWU4N2QxMzdhNTBmMmE0ZGU4OGQxYTJhMGYwNWZmMWI1ZmU4ZTVhZjM1YjM0YjQyYmM1MDJjMzRkZjNkOTJhNGU2ZiIsImlhdCI6MTY5MDg5OTY3Mi4xMzA2ODQsIm5iZiI6MTY5MDg5OTY3Mi4xMzA2ODYsImV4cCI6MTY5MDk4NjA3MS40NzgzMzQsInN1YiI6IjI1Iiwic2NvcGVzIjpbXX0.U78XKyUX0WXPcGv7M_ogPdbHWzNns9lu9E4kjBT8YRWwCFV3IIpbyOZl_R3Q8ltXOK7DY_kebqClmvjO8Ugb0qTKeR7uzLk_rp4Z8kWKMYYC0oghuGFEURcHpdGomO6Pvi_UU0DERMxJNcrUEu-MFggwURCs6HWgvNlGRans5rj2vuLzWKTYQuOq-BoYlavmV7FzH4eCyqCdtBw9HKZye4l5NQvtQtiSevWT6Cd2LtuUc4nAcVpk396EgBbOekf587mbfHuZKJOINrcIK-V7b7DFJt6iSlltafTFJBw5nI7soOJYd7e5DQtUrVm_8OGNtceqmCMaLaA5nDA7QfGySdTm-ApQ8AISHdAk_MyaXAsURfMft5nUcOQx5DNZ382qWi7ERoPCq1vBvK9llJYb8S0__ijB-WlURaWXRVhFaRZI0lRQeomBL913EyCFcigALl-F1zX3OnUM7nixhZ8vAqjrHGIlUvOiTBEJ2Rtn7KstrXjASFuy5_rZweHyDVmNrAKdJ2J3wrclygmpzm1PmQRe0Gt8t-XI-XdkRxEXVPh9HV4GFCMd13uHnacRf-tjGqDAm14ltRE_1rsvLPrtmIQOdFWzp0h5LZCrkzDt5zbf9kvk3ytOj9t_L4-exTwUp0Q0E2Fdi6yq_NLwu0W9xljJ7g8dPdQ_kJsyDPIXxIs`,
      },
    })
    .then((res) => res.data)
}
const handleFileUpload = async (file: File | null = null) => {
  if (!file) {
    return
  }

  // file?.map(async (f) => {
  const myFile = await handleUpload(file)

  if (!myFile.ok) {
    throw new Error("Error uploading file")
  }

  const data = await addTipMedia({
    name: file.name,
    media: myFile,
  }).then((data) => {
    return data
  })

  return {
    ...data.data,
    url: data.data.url.thumbnail_large_url,
  }
}
function App() {
  const [htmlValue, setHtmlValue] = useState<string>("")

  const dateStyles = {
    arrowColor: "teal.400",
    hoverBg: "green.300",
    hoverColor: "green.900",
    selectedBg: "green.800",
    selectedColor: "green.100",
    otherMonthBg: "transparent",
    otherMonthColor: "green.700",
    currentMonthBg: "green.100",
    currentMonthColor: "green.700",
    disabledBg: "gray.200",
    disabledColor: "gray.700",
    //
    isResetable: false,
    isOtherMonthVisible: true,
    isCloseOnSelect: true,
  }

  const [value, setValue] = useState(`
`)

  return (
    <VStack width={"full"} spacing={20} p={10} h={"100vh"} overflow={"hidden"}>
      <Heading>Hello</Heading>

      <NovelEditor
        value={value}
        setValue={setValue}
        mode={"html"}
        // handleUpload={handleFileUpload}
        toastPosition={"top"}
        maxFileSize={10}
        rounded={"0"}
        px={{ base: 0, sm: 50, md: 150 }}
        color={"red"}
        bg={
          "linear-gradient(to bottom right, black 33%, darkblue 34%, purple 34%, purple 66%, darkblue 66%, black 67%, black 100%)"
        }
        border={"1px solid"}
        _hover={{ borderColor: "lightblue" }}
        _active={{ borderColor: "red" }}
        // shadow={"2xl"}
        shadow={"darkred 0px 22px 70px 4px;"}
        h={"500px"}
      />

      <pre>{value}</pre>
    </VStack>
  )
}

export default App
