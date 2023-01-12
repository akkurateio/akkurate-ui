import { Button, Text, useColorMode } from "@chakra-ui/react"
import dayjs, { Dayjs } from "dayjs"
import React from "react"
import { DateOptions, DefaultDate } from "./InputDateRange"

interface IProps {
  day: Dayjs
  dateFor: "afterDate" | "beforeDate"
  setDate: (date: DefaultDate) => void
  dateObject: DefaultDate
  options?: DateOptions
}

const DayItem = ({ day, dateFor, setDate, dateObject, options }: IProps) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const handleBackgroundColor = (day: Dayjs) => {
    if (dateObject.beforeDate && dateObject.beforeDate.isSame(dayjs(day))) {
      return colorMode === "light" ? "purple" : "purple"
    }

    if (dateObject.afterDate && dateObject.afterDate.isSame(dayjs(day))) {
      return colorMode === "light" ? "blue" : "blue"
    }

    if (dateObject.beforeDate && dateObject.afterDate) {
      if (
        dayjs(day) < dateObject.beforeDate &&
        dayjs(day) > dateObject.afterDate
      ) {
        return colorMode === "light" ? "green" : "green"
      }
    }

    if (dayjs(day).month() < dayjs(dateObject.currentDate).month()) {
      return colorMode === "light" ? "gray" : "gray"
    }

    if (dayjs(day).month() > dayjs(dateObject.currentDate).month()) {
      return colorMode === "light" ? "gray" : "gray"
    }

    return colorMode === "light" ? "primary" : "primary"
  }

  const disabledDays = (day: Dayjs) => {
    if (!options) return false

    if (options.disabledDays && options.disabledDays.includes(dayjs(day).day()))
      return true
    if (
      options.disabledDates &&
      options.disabledDates.includes(dayjs(day).format("YYYY-MM-DD"))
    )
      return true
    if (options.minDate && dayjs(day).isBefore(dayjs(options.minDate)))
      return true
    if (options.maxDate && dayjs(day).isAfter(dayjs(options.maxDate)))
      return true
    return false
  }

  const handleClick = () => {
    if (dateFor === "beforeDate") {
      if (dateObject.afterDate) {
        if (day > dateObject.afterDate) {
          setDate({
            ...dateObject,
            beforeDate: day,
          })
        }
      } else {
        setDate({
          ...dateObject,
          beforeDate: day,
        })
      }
    }

    if (dateFor === "afterDate") {
      if (dateObject.beforeDate) {
        if (day < dateObject.beforeDate) {
          setDate({
            ...dateObject,
            afterDate: day,
          })
        }
      } else {
        setDate({
          ...dateObject,
          afterDate: day,
        })
      }
    }
  }

  return (
    <Button
      size={"sm"}
      colorScheme={handleBackgroundColor(day)}
      isDisabled={disabledDays(day)}
      onClick={handleClick}
      width={"2.2rem"}
      height={"2.2rem"}
      borderRadius={"2px"}
      position={"relative"}
      boxSize={8}
    >
      <Text textAlign={"center"} fontSize={"sm"} fontWeight={"normal"}>
        {dayjs(day).format("DD")}
      </Text>
    </Button>
  )
}

export default DayItem
