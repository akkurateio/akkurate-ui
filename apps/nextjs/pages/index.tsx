import { Heading, VStack } from "@chakra-ui/react"
import { useState } from "react"
// @ts-ignore
import { NovelEditor } from "@akkurateio/novel"
import axios from "axios"
import { AcsWysiwyg } from "@akkurateio/wysiwyg"

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
<table class="table-fixed m-0 overflow-hidden w-[98%] mx-auto my-3 border-collapse"><tbody><tr class="border box-border min-w-[1em] py-2 px-1 relative align-top text-start !py-1"><th class="bg-stone-100 border box-border min-w-[1em] py-2 px-1 relative align-top text-start !py-1" colspan="1" rowspan="1"><ol class="list-decimal list-outside leading-3 -mt-2 tight" data-tight="true"><li class="leading-normal -mb-2"><p>un</p></li><li class="leading-normal -mb-2"><p>deux</p></li><li class="leading-normal -mb-2"><p>pas trois</p></li></ol></th><th class="bg-stone-100 border box-border min-w-[1em] py-2 px-1 relative align-top text-start !py-1" colspan="1" rowspan="1"><p></p></th><th class="bg-stone-100 border box-border min-w-[1em] py-2 px-1 relative align-top text-start !py-1" colspan="1" rowspan="1"><p></p></th></tr><tr class="border box-border min-w-[1em] py-2 px-1 relative align-top text-start !py-1"><td class="border box-border min-w-[1em] py-2 px-1 relative align-top text-start !py-1" colspan="1" rowspan="1"><p></p></td><td class="border box-border min-w-[1em] py-2 px-1 relative align-top text-start !py-1" colspan="1" rowspan="1"><p></p></td><td class="border box-border min-w-[1em] py-2 px-1 relative align-top text-start !py-1" colspan="1" rowspan="1"><p></p></td></tr><tr class="border box-border min-w-[1em] py-2 px-1 relative align-top text-start !py-1"><td class="border box-border min-w-[1em] py-2 px-1 relative align-top text-start !py-1" colspan="1" rowspan="1"><p></p></td><td class="border box-border min-w-[1em] py-2 px-1 relative align-top text-start !py-1" colspan="1" rowspan="1"><p></p></td><td class="border box-border min-w-[1em] py-2 px-1 relative align-top text-start !py-1" colspan="1" rowspan="1"><p></p></td></tr></tbody></table><p></p>
`)

  return (
    <VStack width={"full"} spacing={20} p={10} h={"100vh"} overflow={"hidden"}>
      <Heading>Hello</Heading>

      <NovelEditor
        value={value}
        setValue={setValue}
        mode={"html"}
        handleUpload={handleUpload}
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
        onClick={(e) => console.log("e", e)}
        shadow={"2xl"}
        h={"500px"}
      />

      <pre>{value}</pre>
    </VStack>
  )
}

export default App
