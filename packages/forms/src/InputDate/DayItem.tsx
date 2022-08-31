import { Button } from "@chakra-ui/react"
import dayjs, { Dayjs } from "dayjs"
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
      return "primary.500"
    }

    if (date.value && dayjs(date.value).isSame(dayjs(day))) {
      return "primary.500"
    }

    if (dayjs(day).isSame(dayjs(), "day")) {
      if (type === "before" || type === "after") return "gray.200"
      return "primary.200"
    }

    if (type === "before" || type === "after") return "gray.100"
    return "primary.100"
  }

  const handleColor = (day: Dayjs) => {
    if (date.selectedDate && date.selectedDate.isSame(dayjs(day))) {
      return "white"
    }

    if (date.value && dayjs(date.value).isSame(dayjs(day))) {
      return "white"
    }

    return "primary.800"
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
      fontWeight={"normal"}
      bg={handleBackgroundColor(day)}
      color={handleColor(day)}
      _hover={{
        bg: "primary.300",
        color: "white",
      }}
      _active={{
        bg: "primary.600",
      }}
      onClick={handleClick}
      width={"3rem"}
      height={"3rem"}
      borderRadius={"2px"}
    >
      {dayjs(day).format("DD")}
    </Button>
  )
}

export default DayItem
