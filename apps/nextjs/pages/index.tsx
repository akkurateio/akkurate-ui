// import { AcsDatagrid_v2 } from "@akkurateio/datagrid"
import { Heading, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { AcsDatagrid_v2 } from "@akkurateio/datagrid"
import { NovelEditor } from "@akkurateio/novel"

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

  const [column, setColumn] = useState("")
  const [page, setPage] = useState(1)

  return (
    <VStack width={"full"} spacing={20} p={10} h={"100vh"} overflow={"hidden"}>
      <Heading>Hello</Heading>
      <NovelEditor value={column} setValue={setColumn} />
    </VStack>
  )
}

export default App
