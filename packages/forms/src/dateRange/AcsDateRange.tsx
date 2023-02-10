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
  useBreakpointValue,
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
import Header from "./Header"

interface IProps {
  handleChange: (date: dateDefaut) => void
  numberOfMonths?: number
  value: dateDefaut
  label?: string
  btnColor?: string
  hoverColor?: string
  disabledStartDays?: number[]
  disabledEndDays?: number[]
  disabledStartDates?: string[]
  disabledEndDates?: string[]
  numericFormat?: boolean
  textColor?: string
}

export type dateDefaut = {
  startDate: Dayjs | null | string
  endDate: Dayjs | null | string
  currentDate: Dayjs | null | string
}

export const AcsDateRange: React.FC<IProps> = ({
  handleChange = () => {},
  hoverColor = "neutral.500",
  btnColor = "primary.500",
  disabledStartDays = [],
  disabledEndDays = [],
  disabledStartDates = [],
  numberOfMonths = 1,
  disabledEndDates = [],
  numericFormat = false,
  label,
  ...props
}: IProps) => {
  dayjs.extend(weekday)
  dayjs.extend(isSameOrBefore)
  dayjs.extend(isSameOrAfter)
  dayjs.extend(isBetween)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [startDate, setStartDate] = useState<null | Dayjs | string>(null)
  const [endDate, setEndDate] = useState<null | Dayjs | string>(null)
  const [endHover, setEndHover] = useState<null | Dayjs>(null)
  const [numberOfMonths2, setNumberOfMonths] = useState(numberOfMonths)
  const [nextMonthTrue, setNextMonthTrue] = useState(false)
  const [allMonths, setAllMonths] = useState<
    { daysInMonth: Dayjs[]; firstDay: Dayjs; lastDay: Dayjs; month: any }[]
  >([])
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
    for (let i = 0; i < numberOfMonths; i++) {
      months.push(dayjs(currentMonth).add(i, "month"))
    }
    return months
  }

  const screenSize = useBreakpointValue({ base: "base", md: "md" })

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
  const disabledStart = disabledStartDays ? disabledStartDays : []
  const disabledStartDatesArray = disabledStartDates ? disabledStartDates : []

  const disabledEnd = disabledEndDays ? disabledEndDays : []
  const disabledEndDatesArray = disabledEndDates ? disabledEndDates : []

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
    if (nextMonthTrue) {
      setNumberOfMonths(numberOfMonths2 ? numberOfMonths2 + 1 : 0)
      setAllMonths(
        getMonthDays(getNextMonths(numberOfMonths2 ? numberOfMonths2 : 1)),
      )
      setNextMonthTrue(false)
    }
    if (numberOfMonths) {
      setAllMonths(
        getMonthDays(getNextMonths(numberOfMonths2 ? numberOfMonths2 : 1)),
      )
    }
  }, [numberOfMonths2, currentDate, nextMonthTrue])

  useEffect(() => {
    if (startDate) {
      if (endDate && dayjs(endDate).isBefore(startDate)) {
        return setEndDate(null)
      }
    }
  }, [startDate, endDate])

  useEffect(() => {
    if (startDate && endDate) {
      handleChange({ startDate, endDate, currentDate: dayjs(new Date()) })
    }
  }, [startDate, endDate, currentDate])

  const deleteDate = () => {
    setStartDate(null)
    setEndDate(null)
    handleChange({ startDate: null, endDate: null, currentDate: null })
  }

  return (
    <FormControlLayout label={label}>
      <>
        <Header
          startDate={startDate}
          endDate={endDate}
          numericFormat={numericFormat}
          onOpen={onOpen}
          deleteDate={deleteDate}
          isOpen={isOpen}
          screenSize={screenSize}
        />

        <Popover
          isOpen={isOpen}
          onClose={onClose}
          placement={screenSize === "base" ? "bottom-end" : "bottom"}
        >
          <PopoverTrigger>
            <Box w={"full"}></Box>
          </PopoverTrigger>
          <PopoverContent
            width={"full"}
            h={{ base: 600, md: "full" }}
            overflowY={{ base: "auto", md: "hidden" }}
            _focusVisible={{ outline: "none" }}
          >
            <PopoverCloseButton />
            <PopoverBody>
              <HStack>
                <Button
                  display={{ base: "none", md: "block" }}
                  variant={"ghost"}
                  _hover={{ backgroundColor: "none" }}
                  onClick={() =>
                    setCurrentDate(
                      dayjs(currentMonth)
                        .subtract(numberOfMonths, "month")
                        .toDate(),
                    )
                  }
                >
                  <AisChevronLeft />
                </Button>
                <SimpleGrid
                  spacing={10}
                  w={"full"}
                  columns={{
                    base: 1,
                    md: numberOfMonths2 < 2 ? numberOfMonths2 : 2,
                    lg: numberOfMonths2 < 4 ? numberOfMonths2 : 3,
                    xl: numberOfMonths2 < 5 ? numberOfMonths2 : 4,
                  }}
                >
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
                      disabledStart={disabledStart}
                      disabledStartDatesArray={disabledStartDatesArray}
                      disabledEnd={disabledEnd}
                      disabledEndDatesArray={disabledEndDatesArray}
                      textColor={props.textColor}
                    />
                  ))}
                </SimpleGrid>
                <Button
                  display={{ base: "none", md: "block" }}
                  variant={"ghost"}
                  _hover={{ backgroundColor: "none" }}
                  onClick={() =>
                    setCurrentDate(
                      dayjs(currentMonth).add(numberOfMonths, "month").toDate(),
                    )
                  }
                >
                  <AisChevronRight />
                </Button>
              </HStack>
              <Box w={"full"}>
                <Button
                  w={"full"}
                  display={{ base: "flex", md: "none" }}
                  onClick={() => setNextMonthTrue(!nextMonthTrue)}
                >
                  <Text>Afficher le mois suivant</Text>
                </Button>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </>
    </FormControlLayout>
  )
}
