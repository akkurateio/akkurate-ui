import { Box, Button } from "@chakra-ui/react"
import dayjs, { Dayjs } from "dayjs"
import React from "react"
import { DateObject } from "../../types"

interface IProps {
  type: "before" | "current" | "after"
  day: Dayjs
  date: DateObject
  setDate: (e: DateObject) => void
}

const DayItem = ({ day, type, date, setDate }: IProps) => {
  const handleBackgroundColor = (day: Dayjs) => {
    if (date.selectedDate && date.selectedDate.isSame(dayjs(day))) {
      return date.selectedBg ?? "primary.500"
    }

    if (date.value && dayjs(date.value).isSame(dayjs(day))) {
      return date.selectedBg ?? "primary.500"
    }

    // if (dayjs(day).isSame(dayjs(), "day")) {
    //   if (type === "before" || type === "after") return "gray.800"
    //   return "gray.800"
    // }

    if (type === "before" || type === "after") return "transparent"
    return date.currentMonthBg ?? "primary.100"
  }

  const handleColor = (day: Dayjs) => {
    if (date.selectedDate && date.selectedDate.isSame(dayjs(day))) {
      return date.selectedColor ?? "white"
    }

    if (date.value && dayjs(date.value).isSame(dayjs(day))) {
      return date.selectedColor ?? "white"
    }

    if (type === "before" || type === "after") return "gray.500"

    return date.currentMonthColor ?? "primary.900"
  }

  const handleWeight = (day: Dayjs) => {
    if (date.selectedDate && date.selectedDate.isSame(dayjs(day))) {
      return "bold"
    }

    return "normal"
  }

  const disabledDays = (day: Dayjs) => {
    if (date.disabledDays && date.disabledDays.includes(dayjs(day).day()))
      return true
    if (
      date.disabledDates &&
      date.disabledDates.includes(dayjs(day).format("YYYY-MM-DD"))
    )
      return true
    if (date.minDate && dayjs(day).isBefore(dayjs(date.minDate))) return true
    if (date.maxDate && dayjs(day).isAfter(dayjs(date.maxDate))) return true
    return false
  }

  const handleClick = () => {
    setDate({
      ...date,
      selectedDate: day,
    })
  }

  return (
    <Button
      size={"sm"}
      fontWeight={handleWeight(day)}
      isDisabled={disabledDays(day)}
      bg={handleBackgroundColor(day)}
      color={handleColor(day)}
      _hover={{
        bg: date.hoverBg ?? "primary.700",
        color: date.hoverColor ?? "primary.200",
      }}
      // _active={{
      //   bg: "primary.600",
      // }}
      onClick={handleClick}
      width={"2.2rem"}
      height={"2.2rem"}
      borderRadius={"2px"}
      position={"relative"}
      boxSize={8}
    >
      {dayjs(day).isSame(dayjs(), "day") && (
        <Box
          w={1}
          h={1}
          bg={"red.500"}
          rounded={"full"}
          position={"absolute"}
          top={1}
          right={1}
        />
      )}
      {dayjs(day).format("DD")}
    </Button>
  )
}

export default DayItem
