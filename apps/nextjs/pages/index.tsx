import { Heading, VStack } from "@chakra-ui/react"
import { useState } from "react"
// @ts-ignore
import { NovelEditor } from "@akkurateio/novel"
import axios from "axios"
import { css } from "@emotion/react"

export const handleUpload = async (
  file: File | undefined | null,
  withToast = false,
): Promise<{
  url: string
  originalName: string
  ok: boolean
}> => {
  if (!file) {
    return Promise.resolve({ url: "", originalName: "", ok: false })
  }

  return axios
    .post("/api/upload", {
      fileName: file.name,
      fileType: file.type,
    })
    .then((res) => {
      return { url: res.data.url, originalName: file.name, ok: true }
    })
    .catch((err) => {
      console.error(err)
      return { url: "", originalName: "", ok: false }
    })
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
# test

> | test | c |  |
> | --- | --- | --- |
> |  |  |  |
> |  |  |  |
`)

  const [page, setPage] = useState(1)

  return (
    <VStack width={"full"} spacing={20} p={10} h={"100vh"} overflow={"hidden"}>
      <Heading>Hello</Heading>
      <NovelEditor
        value={value}
        setValue={setValue}
        mode={"markdown"}
        handleUpload={handleUpload}
        toastPosition={"top"}
        maxFileSize={10}
        rounded={"0"}
        px={150}
        color={"red"}
        bg={
          "linear-gradient(to bottom right, black 33%, darkblue 34%, purple 33%)"
        }
        border={"1px solid"}
        _hover={{ borderColor: "lightblue" }}
        _active={{ borderColor: "red" }}
        onClick={(e) => console.log("e", e)}
        shadow={"2xl"}
        h={"500px"}
      />

      <pre>{value}</pre>
    </VStack>
  )
}

export default App
