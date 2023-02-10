import React from "react"
import { SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react"
import dayjs, { Dayjs } from "dayjs"
import DayBtn from "./DayBtn"

interface IProps {
  currentDate: Date
  shortDaysArray: string[]
  startDate: Dayjs | null | string
  endDate: Dayjs | null | string
  daysArray: Dayjs[]
  handleDayClick: (day: Dayjs) => void
  handleEndHover: (day: Dayjs) => void
  setEndHover: (day: Dayjs | null) => void
  endHover: Dayjs | null
  btnColor: string
  hoverColor: string
  month: {
    daysInMonth: Dayjs[]
    firstDay: Dayjs
    lastDay: Dayjs
    month: any
  }
  disabledStart: number[]
  disabledStartDatesArray: string[]
  disabledEnd: number[]
  disabledEndDatesArray: string[]
  textColor?: string
}

const GridDAteRange = ({
  shortDaysArray,
  startDate,
  endDate,
  handleDayClick,
  handleEndHover,
  endHover,
  btnColor,
  hoverColor,
  setEndHover,
  month,
  disabledEnd,
  disabledEndDatesArray,
  disabledStart,
  disabledStartDatesArray,
  textColor,
}: IProps) => {
  return (
    <SimpleGrid spacing={10}>
      <VStack>
        <Text fontSize={{ base: "xl", xl: "xs", lg: "xs", md: "xs" }}>
          {month.month.format("MMMM YYYY").charAt(0).toUpperCase() +
            month.month.format("MMMM YYYY").slice(1)}
        </Text>
        <SimpleGrid
          pt={2}
          w={"full"}
          columns={7}
          spacing={0.5}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {shortDaysArray.map((day, idx) => (
            <Text
              mb={2}
              key={idx}
              textAlign={"center"}
              fontSize={{ base: "xl", xl: "xs", lg: "xs", md: "xs" }}
            >
              {day}
            </Text>
          ))}
          {month.daysInMonth.map((day, idx) => {
            return (
              <DayBtn
                key={idx}
                day={day}
                month={month.month}
                handleDayClick={handleDayClick}
                handleEndHover={handleEndHover}
                setEndHover={setEndHover}
                endHover={endHover}
                endDate={endDate}
                startDate={startDate}
                btnColor={btnColor}
                hoverColor={hoverColor}
                disabledStart={disabledStart}
                disabledStartDatesArray={disabledStartDatesArray}
                disabledEnd={disabledEnd}
                disabledEndDatesArray={disabledEndDatesArray}
                textColor={textColor}
              />
            )
          })}
        </SimpleGrid>
      </VStack>
    </SimpleGrid>
  )
}

export default GridDAteRange
