import { AcsInputNumber } from "@akkurateio/forms"
import { Heading, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"

function App() {
  const [number, setNumber] = useState<number>(0)

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

      <AcsInputNumber value={number} handleChange={setNumber} />

      <button onClick={() => setNumber((prev) => prev + 1)}>OK</button>

      <Text>{number}</Text>
    </VStack>
  )
}

export default App
