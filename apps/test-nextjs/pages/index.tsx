import { AcsInputDate } from "@akkurateio/forms"
import { Heading, VStack } from "@chakra-ui/react"
import { useState } from "react"

function App() {
  const [value, setValue] = useState<string>("1996-04-21")

  const dateStyles = {
    hoverBg: "blue.400",
    hoverColor: "green.100",
    selectedBg: "purple.400",
    selectedColor: "purple.100",
    otherMonthBg: "orange.100",
    otherMonthColor: "orange.900",
    currentMonthBg: "blue.400",
    currentMonthColor: "green.100",
    disabledBg: "yellow.400",
    disabledColor: "blue.100",
    //
    isResetable: false,
    isOtherMonthVisible: false,
  }

  return (
    <VStack width={"full"} spacing={20} p={10}>
      <Heading>Hello</Heading>

      <AcsInputDate
        label={"Date de début"}
        value={value}
        handleChange={setValue}
        disabledDays={[0, 6]}
        {...dateStyles}
      />
    </VStack>
  )
}

export default App
