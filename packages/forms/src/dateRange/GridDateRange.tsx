import React from "react"
import {
  Button,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
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
  isMobile: boolean

  monthsArray?: {
    daysInMonth: Dayjs[]
    firstDay: Dayjs
    lastDay: Dayjs
    month: Dayjs
  }[]
}

const GridDAteRange = ({
  currentDate,
  shortDaysArray,
  startDate,
  endDate,
  daysArray,
  handleDayClick,
  handleEndHover,
  endHover,
  setEndHover,
  isMobile,
  monthsArray,
}: IProps) => {
  console.log(isMobile)
  return (
    <Stack direction={"column"} spacing={10}>
      {isMobile === true && monthsArray ? (
        monthsArray.map((month, idx) => (
          <HStack w={"full"} key={idx}>
            <VStack>
              <Text>{dayjs(month.month).format("MMMM YYYY")}</Text>
              <SimpleGrid
                pt={2}
                w={"full"}
                columns={7}
                spacing={0.5}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                {shortDaysArray.map((day, idx) => (
                  <Text mb={2} key={idx} textAlign={"center"} fontSize={"xs"}>
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
                    />
                  )
                })}
              </SimpleGrid>
            </VStack>
          </HStack>
        ))
      ) : (
        <VStack w={"full"}>
          <Text>{dayjs(currentDate).format("MMMM YYYY")}</Text>
          <SimpleGrid
            pt={2}
            w={"full"}
            columns={7}
            spacing={0.5}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {shortDaysArray.map((day, idx) => (
              <Text mb={2} key={idx} textAlign={"center"} fontSize={"xs"}>
                {day}
              </Text>
            ))}
            {daysArray.map((day, idx) => {
              return (
                <DayBtn
                  key={idx}
                  day={day}
                  month={dayjs(currentDate)}
                  handleDayClick={handleDayClick}
                  handleEndHover={handleEndHover}
                  setEndHover={setEndHover}
                  endHover={endHover}
                  endDate={endDate}
                  startDate={startDate}
                />
              )
            })}
          </SimpleGrid>
        </VStack>
      )}
    </Stack>
  )
}

export default GridDAteRange
