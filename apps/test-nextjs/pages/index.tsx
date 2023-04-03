import { Heading, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { AcsWysiwyg } from "@akkurateio/wysiwyg"

function App() {
  const [value, setValue] = useState<string>("2020-04-21")
  const [files, setFiles] = useState()

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

  return (
    <VStack width={"full"} spacing={20} p={10}>
      <Heading>Hello</Heading>

      <AcsWysiwyg value={value} setValue={setValue} setFiles={setFiles} />
    </VStack>
  )
}

export default App
