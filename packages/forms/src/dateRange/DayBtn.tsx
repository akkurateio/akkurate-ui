import React, { FunctionComponent } from "react"
import { Button } from "@chakra-ui/react"
import dayjs, { Dayjs } from "dayjs"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import { useTheme } from "@chakra-ui/system"

interface IProps {
  day: Dayjs
  month: Dayjs
  handleDayClick: (day: Dayjs) => void
  endHover: Dayjs | null
  handleEndHover: (day: Dayjs) => void
  setEndHover: (day: Dayjs | null) => void
  startDate: Dayjs | null | string
  endDate: Dayjs | null | string
  btnColor: string
  hoverColor: string
  disabledStart: number[]
  disabledStartDatesArray: string[]
  disabledEnd: number[]
  disabledEndDatesArray: string[]
  textColor?: string
}

const DayBtn: FunctionComponent<IProps> = ({
  day,
  month,
  startDate,
  endDate,
  handleDayClick,
  endHover,
  handleEndHover,
  setEndHover,
  btnColor,
  hoverColor,
  disabledStart,
  disabledStartDatesArray,
  disabledEnd,
  textColor = "black",
  disabledEndDatesArray,
}) => {
  const isDayBetween = (day: any) => {
    if (!startDate || !endHover || endDate) {
      return false
    }
    const start = dayjs(startDate)
    const end = dayjs(endHover)
    return day.isSameOrAfter(start) && day.isSameOrBefore(end)
  }

  const theme = useTheme()

  const isInCurrentMonth = day.isSame(month, "month")

  const disabled = () => {
    if (!startDate && disabledStart.includes(day.day())) {
      return true
    }
    if (
      !!startDate &&
      disabledEndDatesArray.includes(day.format("YYYY-MM-DD"))
    ) {
      return true
    }
    if (day.isBefore(startDate) && disabledStart.includes(day.day())) {
      return true
    }

    if (endDate && day.isAfter(startDate) && disabledEnd.includes(day.day())) {
      return true
    }
    if (
      startDate &&
      !endDate &&
      disabledEnd.includes(day.day()) &&
      day.isAfter(startDate)
    ) {
      return true
    }
    if (
      startDate &&
      disabledStartDatesArray.includes(day.format("YYYY-MM-DD")) &&
      day.isAfter(startDate)
    ) {
      return false
    }
    if (
      startDate &&
      disabledEndDatesArray.includes(day.format("YYYY-MM-DD")) &&
      day.isBefore(startDate)
    ) {
      return true
    }
    if (
      !startDate &&
      disabledStartDatesArray.includes(day.format("YYYY-MM-DD"))
    ) {
      return true
    }
    if (
      startDate &&
      !endDate &&
      day.isBefore(startDate) &&
      disabledStartDatesArray.includes(day.format("YYYY-MM-DD"))
    ) {
      return true
    }
    if (
      startDate &&
      endDate &&
      day.isBefore(startDate) &&
      disabledStartDatesArray.includes(day.format("YYYY-MM-DD"))
    ) {
      return true
    }
    return false
  }

  return (
    <Button
      w={{ xl: "10px", lg: "30px", md: "30px", base: "50px" }}
      h={{ xl: "40px", lg: "40px", md: "40px", base: "50px" }}
      onClick={() => handleDayClick(day)}
      onMouseEnter={() => handleEndHover(day)}
      onMouseLeave={() => setEndHover(null)}
      textAlign={"center"}
      variant={"ghost"}
      border={"1px"}
      borderColor={"transparent"}
      rounded={"full"}
      color={
        day.isBetween(startDate, endDate)
          ? textColor
          : startDate && endDate
          ? textColor
          : "black"
      }
      fontSize={{ xl: "xs", lg: "xs", md: "xs", base: "xl" }}
      _hover={{ backgroundColor: "none", border: "1px" }}
      _disabled={{
        opacity: !isInCurrentMonth ? 0 : 0.5,
        cursor: !isInCurrentMonth ? "pointer" : "not-allowed",
        backgroundColor:
          disabled() && startDate && day.isBetween(startDate, endDate)
            ? theme.colors.neutral[300]
            : disabled() && isDayBetween(day)
            ? theme.colors.neutral[300]
            : "white",
      }}
      bgColor={
        startDate && day.isSame(startDate)
          ? btnColor
            ? btnColor
            : theme.colors.primary[500]
          : endDate && day.isSame(endDate)
          ? btnColor
            ? btnColor
            : theme.colors.primary[500]
          : startDate && endDate && day.isBetween(startDate, endDate)
          ? hoverColor
            ? hoverColor
            : theme.colors.neutral[400]
          : isDayBetween(day)
          ? hoverColor
            ? hoverColor
            : theme.colors.neutral[400]
          : "white"
      }
      isDisabled={!isInCurrentMonth || disabled()}
      cursor={isInCurrentMonth ? "pointer" : "default"}
    >
      {day.date()}
    </Button>
  )
}

export default DayBtn
