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
  const getBackgroundColor = (day: Dayjs) => {
    const selected = isDaySelected(day)
    const clickStart = startDate && day.isSame(startDate)
    const between = isDayBetween(day)
    if (selected || clickStart) {
      return "blue.500"
    } else if (between) {
      return "gray.400"
    }
    return "white"
  }

  const isInCurrentMonth = day.isSame(month, "month")

  return (
    <Button
      size={"sm"}
      onClick={() => handleDayClick(day)}
      onMouseEnter={() => handleEndHover(day)}
      onMouseLeave={() => setEndHover(null)}
      textAlign={"center"}
      variant={"ghost"}
      backgroundColor={getBackgroundColor(day)}
      fontSize={"sm"}
      _hover={{ backgroundColor: "none" }}
      opacity={isInCurrentMonth ? 1 : 0}
      cursor={isInCurrentMonth ? "pointer" : "default"}
    >
      {day.date()}
    </Button>
  )
}

export default DayBtn
