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
}) => {
  const isDaySelected = (day: any) => {
    if (!startDate || !endDate) {
      return false
    }
    const start = dayjs(startDate)
    const end = dayjs(endDate)
    return day.isSameOrAfter(start) && day.isSameOrBefore(end)
  }

  const isDayBetween = (day: any) => {
    if (!startDate || !endHover || endDate) {
      return false
    }
    const start = dayjs(startDate)
    const end = dayjs(endHover)
    return day.isSameOrAfter(start) && day.isSameOrBefore(end)
  }

  const isInCurrentMonth = day.isSame(month, "month")

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
      _disabled={{ opacity: 0 }}
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
      isDisabled={!isInCurrentMonth}
      cursor={isInCurrentMonth ? "pointer" : "default"}
    >
      {day.date()}
    </Button>
  )
}

export default DayBtn
