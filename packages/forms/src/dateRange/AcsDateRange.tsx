import dayjs, { Dayjs } from "dayjs"
import { useEffect, useState } from "react"
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Stack,
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
  const [numberOfMonths, setNumberOfMonths] = useState(
    props.numberOfMonths || 0,
  )
  const [nextMonthTrue, setNextMonthTrue] = useState(false)
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

  const screenSize = useBreakpointValue({ base: "base", md: "md" })

  useEffect(() => {
    currentMonth && setThisMonth(getMonthDays([currentMonth]))
  }, [currentDate])

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
      setNumberOfMonths(numberOfMonths ? numberOfMonths + 1 : 0)
      setAllMonths(
        getMonthDays(getNextMonths(numberOfMonths ? numberOfMonths : 1)),
      )
      setNextMonthTrue(false)
    }
    if (props.numberOfMonths) {
      setAllMonths(
        getMonthDays(getNextMonths(numberOfMonths ? numberOfMonths : 1)),
      )
    }
  }, [numberOfMonths, currentDate, nextMonthTrue])

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
    <FormControlLayout label={label}>
      <Popover placement={screenSize === "base" ? "bottom-end" : "bottom"}>
        <PopoverTrigger>
          {screenSize !== "base" ? (
            <Button
              minW={{ base: "full", md: 400 }}
              w={"full"}
              border={"1px"}
              borderColor={"gray.400"}
              rounded={"full"}
              alignSelf={"center"}
              variant={"unstyled"}
              h={10}
            >
              <Flex
                textAlign={"center"}
                display={{ base: "none", md: "flex" }}
                w={"full"}
                h={"full"}
                justifyContent={"space-between"}
                onClick={onOpen}
              >
                <VStack w={"50%"} h={"full"} spacing={0}>
                  <Text
                    fontSize={startDate ? "2xs" : "sm"}
                    fontWeight={startDate ? "normal" : "bold"}
                    w={"full"}
                  >
                    Date de départ
                  </Text>
                  <Text fontSize={"md"} w={"full"}>
                    {startDate
                      ? dayjs(startDate).format(
                          numericFormat ? "DD/MM/YYYY" : "dddd DD MMMM YYYY",
                        )
                      : ""}
                  </Text>
                </VStack>
                {isOpen && startDate ? (
                  <Box
                    onClick={(e: any) => {
                      e.stopPropagation()
                      deleteDate()
                    }}
                    backgroundColor={"neutral.300"}
                    w={"20px"}
                    h={"16px"}
                    rounded={"full"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    display={"flex"}
                    mt={2.5}
                  >
                    <AisClose boxSize={"14px"} />
                  </Box>
                ) : null}
                <Box
                  border={"1px"}
                  color={"gray.300"}
                  h={"75%"}
                  mt={1}
                  ml={2}
                />
                <VStack w={"50%"} spacing={0}>
                  <Text
                    fontSize={endDate ? "2xs" : "sm"}
                    fontWeight={endDate ? "normal" : "bold"}
                    w={"full"}
                  >
                    Date d'arrivée
                  </Text>
                  <Text fontSize={"md"}>
                    {endDate
                      ? dayjs(endDate).format(
                          numericFormat ? "DD/MM/YYYY" : "dddd DD MMMM YYYY",
                        )
                      : ""}
                  </Text>
                </VStack>
                {isOpen && startDate ? (
                  <Box
                    onClick={(e: any) => {
                      e.stopPropagation()
                      deleteDate()
                    }}
                    backgroundColor={"neutral.300"}
                    w={"20px"}
                    h={"16px"}
                    rounded={"full"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    display={"flex"}
                    mt={2.5}
                    mr={3}
                  >
                    <AisClose boxSize={"14px"} />
                  </Box>
                ) : null}
              </Flex>
            </Button>
          ) : (
            <VStack
              textAlign={"center"}
              display={{ base: "flex", md: "none" }}
              w={"full"}
              h={"full"}
              spacing={2}
              minH={100}
            >
              <VStack
                border={"1px"}
                w={"full"}
                h={50}
                rounded={"full"}
                onClick={onOpen}
              >
                <HStack>
                  <VStack spacing={0}>
                    <Text
                      fontSize={startDate ? "2xs" : "sm"}
                      fontWeight={startDate ? "normal" : "bold"}
                      w={"full"}
                    >
                      Date de départ
                    </Text>
                    <HStack>
                      <Text fontWeight={"bold"} fontSize={"md"}>
                        {startDate
                          ? dayjs(startDate).format(
                              numericFormat
                                ? "DD/MM/YYYY"
                                : "dddd DD MMMM YYYY",
                            )
                          : ""}
                      </Text>
                      {isOpen && startDate ? (
                        <HStack
                          onClick={(e: any) => {
                            e.stopPropagation()
                            deleteDate()
                          }}
                          backgroundColor={"neutral.300"}
                          w={"20px"}
                          h={"20px"}
                          rounded={"full"}
                          as={"button"}
                          position={"absolute"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          right={6}
                        >
                          <AisClose boxSize={"14px"} />
                        </HStack>
                      ) : null}
                    </HStack>
                  </VStack>
                </HStack>
              </VStack>
              <VStack
                border={"1px"}
                w={"full"}
                h={50}
                rounded={"full"}
                onClick={onOpen}
              >
                <HStack>
                  <VStack spacing={0}>
                    <Text
                      fontSize={endDate ? "2xs" : "sm"}
                      fontWeight={endDate ? "normal" : "bold"}
                      w={"full"}
                    >
                      Date d'arrivée
                    </Text>
                    <HStack>
                      <Text fontWeight={"bold"} fontSize={"md"}>
                        {endDate
                          ? dayjs(endDate).format(
                              numericFormat
                                ? "DD/MM/YYYY"
                                : "dddd DD MMMM YYYY",
                            )
                          : ""}
                      </Text>
                      {isOpen && endDate ? (
                        <HStack
                          onClick={(e: any) => {
                            e.stopPropagation()
                            deleteDate()
                          }}
                          backgroundColor={"neutral.300"}
                          w={"20px"}
                          h={"20px"}
                          rounded={"full"}
                          as={"button"}
                          position={"absolute"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          right={6}
                        >
                          <AisClose boxSize={"14px"} />
                        </HStack>
                      ) : null}
                    </HStack>
                  </VStack>
                </HStack>
              </VStack>
            </VStack>
          )}
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
                columns={{
                  base: 1,
                  md: numberOfMonths ? numberOfMonths - 1 : 2,
                  lg: numberOfMonths ? numberOfMonths : 3,
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
                    disabledStart={disabledStart}
                    disabledStartDatesArray={disabledStartDatesArray}
                    disabledEnd={disabledEnd}
                    disabledEndDatesArray={disabledEndDatesArray}
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
                    disabledStart={disabledStart}
                    disabledStartDatesArray={disabledStartDatesArray}
                    disabledEnd={disabledEnd}
                    disabledEndDatesArray={disabledEndDatesArray}
                  />
                ))}
              </SimpleGrid>
              <Button
                display={{ base: "none", md: "block" }}
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
            <Box w={"full"}>
              <Button
                w={"full"}
                display={{ base: "flex", md: "none" }}
                onClick={() => setNextMonthTrue(!nextMonthTrue)}
              >
                <Text>Valider</Text>
              </Button>
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </FormControlLayout>
  )
}
