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
  hoverCircleColor?: string
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
  hoverCircleColor,
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
    // QUAND ON A PAS ENCORE SELECT LE START DAY ON DISABLE LES JOURS DE DEPART VOULUS
    if (
      !startDate &&
      (disabledStart.includes(day.day()) ||
        disabledStartDatesArray.includes(day.format("YYYY-MM-DD")))
    ) {
      return true
    }

    // QUAND ON A UN JOUR DE DEPART ON DISABLE LES JOURS DE DEPART VOULUS AVANT LE JOUR DE DEPART
    if (
      startDate &&
      (disabledStart.includes(day.day()) ||
        disabledStartDatesArray.includes(day.format("YYYY-MM-DD"))) &&
      day.isBefore(startDate)
    ) {
      return true
    }

    // QUAND ON A DEJA UN START DAY ON DISABLE LES JOURS DE RETOUR VOULUS
    if (
      startDate &&
      !endDate &&
      (disabledEnd.includes(day.day()) ||
        disabledEndDatesArray.includes(day.format("YYYY-MM-DD")))
    ) {
      return true
    }

    // QUAND ON A DEJA UN START DAY ET UN END DAY ON DISABLE LES JOURS DE RETOURS VOULUS APRES LE START DAY
    if (
      startDate &&
      endDate &&
      (disabledEnd.includes(day.day()) ||
        disabledEndDatesArray.includes(day.format("YYYY-MM-DD"))) &&
      day.isAfter(startDate)
    ) {
      return true
    }

    // QUAND ON A DEJA UN START DAY ET UN END DAY ON DISABLE LES JOURS DE DEPART VOULUS AVANT LE START DAY
    if (
      startDate &&
      endDate &&
      (disabledStart.includes(day.day()) ||
        disabledStartDatesArray.includes(day.format("YYYY-MM-DD"))) &&
      day.isBefore(startDate)
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
      _hover={{
        backgroundColor: "none",
        border: "1px",
        borderColor: hoverCircleColor
          ? hoverCircleColor
          : theme.colors.neutral[400],
      }}
      _disabled={{
        opacity: !isInCurrentMonth ? 0 : 0.5,
        cursor: !isInCurrentMonth ? "pointer" : "not-allowed",
        backgroundColor: disabled()
          ? day.isSame(startDate) ||
            day.isSame(endDate) ||
            day.isBetween(startDate, endDate) ||
            isDayBetween(day)
            ? theme.colors.neutral[300]
            : "white"
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
