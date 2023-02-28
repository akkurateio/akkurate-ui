import {
  AisChevronLeft,
  AisChevronRight,
  AisClose,
  AisDot,
} from "@akkurateio/icons"
import {
  Box,
  Button,
  Flex,
  HStack,
  PopoverHeader,
  Text,
} from "@chakra-ui/react"
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

  const handleCurrentMonth = () => {
    setDate({
      ...date,
      currentDate: dayjs(),
    })
  }

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <PopoverHeader borderBottom={"none"} pb={0.5} pt={2} px={2}>
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
        </Flex>

        <Flex
          alignItems={"center"}
          color={date.currentMonthBg ?? "primary.500"}
        >
          <HStack flex={1} alignItems={"center"} spacing={1}>
            <Button
              variant={"ghost"}
              size={"none"}
              onClick={handlePreviousMonth}
            >
              <AisChevronLeft boxSize={"24px"} />
            </Button>
            <Button
              variant={"ghost"}
              size={"none"}
              onClick={handleCurrentMonth}
            >
              <AisDot boxSize={6} />
            </Button>
            <Button variant={"ghost"} size={"none"} onClick={handleNextMonth}>
              <AisChevronRight boxSize={"24px"} />
            </Button>
          </HStack>
          <Button ml={4} variant={"ghost"} size={"none"} onClick={handleReset}>
            <AisClose
              boxSize={"24px"}
              cursor={"pointer"}
              rounded={"full"}
              _hover={{ backgroundColor: "neutral.200" }}
              color={"neutral.500"}
            />
          </Button>
        </Flex>
      </Flex>
    </PopoverHeader>
  )
}

export default PopHeader
