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
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"
import { AisChevronLeft, AisChevronRight, AisClose } from "@akkurateio/icons"
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
  value: dateDefaut
  isMobile: boolean
  btnColor: string
  hoverColor: string
}

export type dateDefaut = {
  startDate: Dayjs | null | string
  endDate: Dayjs | null | string
  currentDate: Dayjs | null | string
}

export const AcsDateRange: React.FC<IProps> = ({
  numberOfMonths,
  handleChange = () => {},
  hoverColor = "neutral.500",
  btnColor = "primary.500",
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
  const [allMonths, setAllMonths] = useState<
    { daysInMonth: Dayjs[]; firstDay: Dayjs; lastDay: Dayjs; month: any }[]
  >([])
  const { onOpen, onClose, isOpen } = useDisclosure()
  const [thisMonth, setThisMonth] = useState<
    { daysInMonth: Dayjs[]; firstDay: Dayjs; lastDay: Dayjs; month: any }[]
  >([])

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

  useEffect(() => {
    currentMonth && setThisMonth(getMonthDays([currentMonth]))
  }, [])

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
      if (day.isBefore(startDate)) {
        setStartDate(day)
      } else {
        setEndDate(day)
      }
      setEndHover(null)
    } else {
      if (day.isBefore(startDate)) {
        setStartDate(day)
        setEndDate(null)
      } else {
        setStartDate(startDate)
        setEndDate(day)
      }
    }
  }

  useEffect(() => {
    if (numberOfMonths) {
      setAllMonths(
        getMonthDays(getNextMonths(numberOfMonths ? numberOfMonths : 1)),
      )
    }
  }, [numberOfMonths, currentDate])

  useEffect(() => {
    if (startDate) {
      if (endDate && dayjs(endDate).isBefore(startDate)) {
        return setEndDate(null)
      }
    }
  }, [startDate, endDate])

  useEffect(() => {
    if (startDate && endDate) {
      handleChange({ startDate, endDate, currentDate: dayjs(currentDate) })
    }
  }, [startDate, endDate, currentDate])

  const deleteDate = () => {
    setStartDate(null)
    setEndDate(null)
    handleChange({ startDate: null, endDate: null, currentDate: null })
  }
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
            h={10}
          >
            <Flex
              textAlign={"center"}
              display={"flex"}
              w={"full"}
              h={"full"}
              justifyContent={"space-between"}
              onClick={onOpen}
            >
              <VStack w={"50%"} spacing={0}>
                <Text fontSize={"sm"} w={"full"}>
                  Départ
                </Text>
                <Text fontSize={"sm"}>
                  {startDate ? dayjs(startDate).format("DD MMMM") : ""}
                </Text>
              </VStack>
              <Box border={"1px"} color={"gray.300"} h={"75%"} mt={1} />
              <VStack w={"50%"} spacing={0}>
                <Text fontSize={"sm"} w={"full"}>
                  Arrivée
                </Text>
                <Text fontSize={"sm"}>
                  {endDate ? dayjs(endDate).format("DD MMMM") : ""}
                </Text>
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
              <SimpleGrid
                spacing={10}
                w={"full"}
                h={"full"}
                columns={{
                  base: 1,
                  md: numberOfMonths ? numberOfMonths - 2 : 2,
                  lg: numberOfMonths ? numberOfMonths - 2 : 3,
                  xl: numberOfMonths ? numberOfMonths + 1 : 4,
                }}
              >
                {thisMonth.map((month: any, index: number) => (
                  <GridDateRange
                    currentDate={dayjs(currentDate).toDate()}
                    shortDaysArray={shortDaysArray}
                    daysArray={daysArray}
                    handleDayClick={handleDayClick}
                    handleEndHover={handleEndHover}
                    startDate={startDate}
                    endDate={endDate}
                    setEndHover={setEndHover}
                    endHover={endHover}
                    btnColor={btnColor}
                    hoverColor={hoverColor}
                    month={month}
                    key={index}
                  />
                ))}
                {allMonths.map((month: any, index: number) => (
                  <GridDateRange
                    currentDate={dayjs(currentDate).add(1, "month").toDate()}
                    shortDaysArray={shortDaysArray}
                    daysArray={daysArray}
                    handleDayClick={handleDayClick}
                    handleEndHover={handleEndHover}
                    startDate={startDate}
                    endDate={endDate}
                    setEndHover={setEndHover}
                    endHover={endHover}
                    btnColor={btnColor}
                    hoverColor={hoverColor}
                    month={month}
                    key={index}
                  />
                ))}
              </SimpleGrid>
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
