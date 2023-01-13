import { AcsInputDateRange } from "@akkurateio/forms"
import { AcsWysiwyg } from "@akkurateio/wysiwyg"
import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import dayjs, { Dayjs } from "dayjs"
import type { NextPage } from "next"
import { useState } from "react"

const Pages: NextPage = () => {
  const [text, setText] = useState("")
  const [modalDrawer, setModalDrawer] = useState<boolean>(false)

  const options = [
    { value: "1", label: "Option 1", isDisabled: true },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ]
  const [selected, setSelected] = useState<string | number>(2)

  const [phoneNumber, setPhoneNumber] = useState("")

  const tree = [
    {
      id: 1,
      name: "root",
      children: [
        {
          id: 2,
          name: "child1",
          children: [
            {
              id: 3,
              name: "child1.1",
              children: [],
            },
          ],
        },
      ],
    },
  ]

  const [treeItem, setTreeItem] = useState<{
    id: string | number | null
    name: string | null
  }>({ id: null, name: null })

  const [date, setDate] = useState("2023-01-10")

  const [dateRange, setDateRange] = useState<{
    afterDate: Dayjs | null
    beforeDate: Dayjs | null
    currentDate: Dayjs
  }>({
    afterDate: null,
    beforeDate: null,
    currentDate: dayjs(),
  })

  return (
    <Flex p={4} flexDirection={"column"} gap={4}>
      <Heading>Pages</Heading>

      <AcsInputDateRange
        value={dateRange}
        handleChange={setDateRange}
        options={{
          disabledDays: [0, 6],
        }}
      />

      <Text>
        Réservé du :
        {dateRange.afterDate
          ? dayjs(dateRange.afterDate).format("dddd DD MMMM YYYY")
          : "à définir"}
      </Text>

      <Text>
        Réservé au :
        {dateRange.beforeDate
          ? dayjs(dateRange.beforeDate).format("dddd DD MMMM YYYY")
          : "à définir"}
      </Text>

      <Box width={"full"} height={"700px"}>
        <AcsWysiwyg value={text} setValue={setText} height={"100%"} />
      </Box>
    </Flex>
  )
}

export default Pages
