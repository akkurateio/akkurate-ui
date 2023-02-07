import React, { FunctionComponent } from "react"
import { Button } from "@chakra-ui/react"
import dayjs, { Dayjs } from "dayjs"

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

  const isInCurrentMonth = day.isSame(month, "month")
  const isDisabledStart = disabledStart.includes(day.day())

  const isDisabledEnd = disabledEnd.includes(day.day()) && !!startDate
  const isDisabledStartDatesArray = disabledStartDatesArray.includes(
    day.format("YYYY-MM-DD"),
  )
  const isDisabledEndDatesArray =
    disabledEndDatesArray.includes(day.format("YYYY-MM-DD")) && !!startDate
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
      fontSize={{ xl: "xs", lg: "xs", md: "xs", base: "xl" }}
      _hover={{ backgroundColor: "none", border: "1px" }}
      _disabled={{
        opacity: !isInCurrentMonth ? 0 : 0.5,
        cursor: !isInCurrentMonth ? "pointer" : "not-allowed",
      }}
      bgColor={
        startDate && day.isSame(startDate)
          ? btnColor
            ? btnColor
            : "primary.500"
          : endDate && day.isSame(endDate)
          ? btnColor
            ? btnColor
            : "primary.500"
          : startDate && endDate && day.isBetween(startDate, endDate)
          ? hoverColor
            ? hoverColor
            : "neutral.400"
          : isDayBetween(day)
          ? hoverColor
            ? hoverColor
            : "neutral.400"
          : "white"
      }
      isDisabled={
        !isInCurrentMonth ||
        isDisabledStart ||
        isDisabledEnd ||
        isDisabledStartDatesArray ||
        isDisabledEndDatesArray
      }
      cursor={isInCurrentMonth ? "pointer" : "default"}
    >
      {day.date()}
    </Button>
  )
}

export default DayBtn
