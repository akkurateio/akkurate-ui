import {
  AisChevronLeft,
  AisChevronRight,
  AisClose,
  AisDot,
} from "@akkurateio/icons"
import { Box, Button, Flex, PopoverHeader, Text } from "@chakra-ui/react"
import dayjs from "dayjs"
import React from "react"
import { DateObject } from "../../types"

interface IProps {
  date: DateObject
  setDate: (e: DateObject) => void
}

const PopHeader = ({ date, setDate }: IProps) => {
  const handleReset = () => {
    setDate({
      ...date,
      selectedDate: null,
    })
  }

  const handlePreviousMonth = () => {
    setDate({
      ...date,
      currentDate: date.currentDate.subtract(1, "month"),
    })
  }

  const handleNextMonth = () => {
    setDate({
      ...date,
      currentDate: date.currentDate.add(1, "month"),
    })
  }

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <PopoverHeader>
      <Flex alignItems={"center"}>
        <Flex flex={2} justifyContent={"space-between"} alignItems={"center"}>
          <Box>
            <Text fontSize={"sm"}>
              {dayjs(date.currentDate).format("YYYY")}
            </Text>
            <Text fontWeight={700}>
              {capitalizeFirstLetter(dayjs(date.currentDate).format("MMMM"))}
            </Text>
          </Box>

          <Button variant={"ghost"} onClick={handleReset}>
            <AisClose boxSize={4} />
          </Button>
        </Flex>

        <Flex
          flex={1}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"primary.500"}
        >
          <Button variant={"ghost"} onClick={handlePreviousMonth}>
            <AisChevronLeft boxSize={6} />
          </Button>
          <AisDot boxSize={6} />
          <Button variant={"ghost"} onClick={handleNextMonth}>
            <AisChevronRight boxSize={6} />
          </Button>
        </Flex>
      </Flex>
    </PopoverHeader>
  )
}

export default PopHeader
