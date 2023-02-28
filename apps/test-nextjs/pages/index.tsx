import { AcsInputDate } from "@akkurateio/forms"
import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import dayjs from "dayjs"
import { useState } from "react"

function App() {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  return (
    <VStack width={"full"} spacing={20} p={10}>
      <Heading>Hello</Heading>

      <Text>hello world</Text>

      <Box width={"280px"}>
        <AcsInputDate
          value={startDate}
          minDate={"2023-02-15"}
          disabledDays={[0]}
          handleChange={(newVal: string) => setStartDate(newVal)}
          isEditable={false}
          // style props
          // hoverBg={"red.500"}
          // hoverColor={"blue.100"}
          // selectedBg={"blue.500"}
          // selectedColor={"orange.800"}
          // currentMonthBg={"purple.500"}
          // currentMonthColor={"white"}
          // ---
        />
      </Box>

      <Box width={"280px"}>
        <AcsInputDate
          value={endDate}
          minDate={
            startDate
              ? dayjs(startDate).add(4, "day").format("YYYY-MM-DD").toString()
              : undefined
          }
          disabledDays={[0]}
          handleChange={(newVal: string) => setEndDate(newVal)}
        />
      </Box>
    </VStack>
  )
}

export default App
