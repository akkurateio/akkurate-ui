import dayjs, { Dayjs } from "dayjs"
import { useEffect, useState } from "react"
import {
  Box,
  Button,
  Flex,
  HStack,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"
import { AisChevronLeft, AisChevronRight } from "@akkurateio/icons"
import FormControlLayout from "../FormControlLayout"
import React from "react"
import GridDateRange from "./GridDateRange"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import weekday from "dayjs/plugin/weekday"
import isBetween from "dayjs/plugin/isBetween"

interface IProps {
  handleChange: (date: dateDefaut) => void
  numberOfMonths?: number
  isMobile: boolean
}

export type dateDefaut = {
  startDate: Dayjs | null
  endDate: Dayjs | null
  currentDate: Dayjs | null
}

export const AcsDateRange: React.FC<IProps> = ({
  handleChange,
  numberOfMonths,
  isMobile = false,
}: IProps) => {
  dayjs.extend(weekday)
  dayjs.extend(isSameOrBefore)
  dayjs.extend(isSameOrAfter)
  dayjs.extend(isBetween)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [startDate, setStartDate] = useState<null | Dayjs | string>(null)
  const [endDate, setEndDate] = useState<null | Dayjs | string>(null)
  const [endHover, setEndHover] = useState<null | Dayjs>(null)
  const { onOpen, onClose, isOpen } = useDisclosure()

  const firstDay = dayjs(currentDate).startOf("month").startOf("week")
  const lastDay = dayjs(currentDate).endOf("month").endOf("week")
  const daysArray = Array.from(
    { length: lastDay.diff(firstDay, "days") + 1 },
    (_, i) => firstDay.clone().add(i, "day"),
  )
  const currentMonth = dayjs(currentDate).startOf("month")
  const getNextMonths = (numberOfMonths: number) => {
    const months = []
    for (let i = 1; i <= numberOfMonths; i++) {
      months.push(dayjs(currentMonth).add(i, "month"))
    }
    return months
  }
  function getMonthDays(months: any) {
    const monthsData = []
    for (let i = 0; i < months.length; i++) {
      const month = months[i]
      const firstDay = dayjs(month).startOf("month").startOf("week")
      const lastDay = dayjs(month).endOf("month").endOf("week")
      const daysInMonth = Array.from(
        { length: lastDay.diff(firstDay, "days") + 1 },
        (_, i) => firstDay.add(i, "day"),
      )
      monthsData.push({ month, firstDay, lastDay, daysInMonth })
    }
    return monthsData
  }

  const shortDaysArray = [
    "Lun.",
    "Mar.",
    "Mer.",
    "Jeu.",
    "Ven.",
    "Sam.",
    "Dim.",
  ]

  const handleEndHover = (day: Dayjs) => {
    if (!endDate) {
      setEndHover(day)
    }
  }
  const handleDayClick = (day: Dayjs) => {
    if (!startDate) {
      setStartDate(day)
    } else if (!endDate) {
      setEndDate(day)
      setEndHover(null)
    } else {
      setStartDate(day)
      setEndDate(null)
    }
  }
  useEffect(() => {
    if (startDate) {
      if (endDate && dayjs(endDate).isBefore(startDate)) {
        return setEndDate(null)
      }
    }
  }, [startDate, endDate])

  return (
    <FormControlLayout>
      <Popover placement={"bottom"}>
        <PopoverTrigger>
          <Button
            w={300}
            border={"1px"}
            borderColor={"gray.400"}
            rounded={"full"}
            alignSelf={"center"}
            variant={"unstyled"}
            h={"fit-content"}
          >
            <Flex
              textAlign={"center"}
              display={"flex"}
              w={"full"}
              h={"full"}
              justifyContent={"space-between"}
              onClick={onOpen}
            >
              <VStack ml={5}>
                <Text w={"full"}>Départ</Text>
                <Text>
                  {startDate ? dayjs(startDate).format("DD MMMM") : ""}
                </Text>
              </VStack>
              <Box border={"1px"} color={"gray.300"} />
              <VStack mr={5}>
                <Text w={"full"}>Arrivée</Text>
                <Text>{endDate ? dayjs(endDate).format("DD MMMM") : ""}</Text>
              </VStack>
            </Flex>
          </Button>
        </PopoverTrigger>
        <PopoverContent width={"full"} h={"full"}>
          <PopoverCloseButton />
          <PopoverBody>
            <HStack>
              <Button
                variant={"ghost"}
                _hover={{ backgroundColor: "none" }}
                onClick={() =>
                  setCurrentDate(
                    dayjs(currentDate)
                      .subtract(
                        numberOfMonths ? numberOfMonths + 1 : 2,
                        "month",
                      )
                      .toDate(),
                  )
                }
              >
                <AisChevronLeft />
              </Button>
              <HStack
                spacing={10}
                w={"full"}
                h={"full"}
                alignItems={"flex-start"}
              >
                <GridDateRange
                  currentDate={currentDate}
                  shortDaysArray={shortDaysArray}
                  daysArray={daysArray}
                  handleDayClick={handleDayClick}
                  handleEndHover={handleEndHover}
                  startDate={startDate}
                  endDate={endDate}
                  setEndHover={setEndHover}
                  endHover={endHover}
                  isMobile={isMobile}
                />
                <GridDateRange
                  currentDate={dayjs(currentDate).add(1, "month").toDate()}
                  shortDaysArray={shortDaysArray}
                  daysArray={daysArray}
                  handleDayClick={handleDayClick}
                  handleEndHover={handleEndHover}
                  startDate={startDate}
                  endDate={endDate}
                  setEndHover={setEndHover}
                  monthsArray={getMonthDays(
                    getNextMonths(numberOfMonths ? numberOfMonths : 1),
                  )}
                  endHover={endHover}
                  isMobile={isMobile}
                />
              </HStack>
              <Button
                variant={"ghost"}
                _hover={{ backgroundColor: "none" }}
                onClick={() =>
                  setCurrentDate(
                    dayjs(currentDate)
                      .add(numberOfMonths ? numberOfMonths + 1 : 2, "month")
                      .toDate(),
                  )
                }
              >
                <AisChevronRight />
              </Button>
            </HStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </FormControlLayout>
  )
}
