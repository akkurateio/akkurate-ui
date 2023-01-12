import { AisChevronLeft, AisChevronRight } from "@akkurateio/icons"
import { Flex, IconButton, PopoverHeader, Text } from "@chakra-ui/react"
import dayjs from "dayjs"
import React from "react"
import { DateOptions, DefaultDate } from "./InputDateRange"

interface IProps {
  dateFor: "afterDate" | "beforeDate"
  setDate: (date: DefaultDate) => void
  dateObject: DefaultDate
  options?: DateOptions
}

const Header = ({ dateFor, setDate, dateObject, options }: IProps) => {
  const handlePreviousMonth = () => {
    setDate({
      ...dateObject,
      currentDate: dateObject.currentDate.subtract(1, "month"),
    })
  }

  const handleNextMonth = () => {
    setDate({
      ...dateObject,
      currentDate: dateObject.currentDate.add(1, "month"),
    })
  }

  const handlePresentMonth = () => {
    setDate({
      ...dateObject,
      currentDate: dayjs(),
    })
  }

  return (
    <PopoverHeader p={0} mb={2.5} borderBottom={"none"}>
      <Flex alignItems={"center"}>
        <IconButton
          aria-label="Mois précédent"
          icon={<AisChevronLeft boxSize={"16px"} />}
          onClick={handlePreviousMonth}
          variant="ghost"
          size={"xs"}
        />

        <Text
          fontSize={"sm"}
          mx={2}
          onClick={handlePresentMonth}
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          {dayjs(dateObject.currentDate).format("MMM YYYY")}
        </Text>

        <IconButton
          aria-label="Mois suivant"
          icon={<AisChevronRight boxSize={"16px"} />}
          onClick={handleNextMonth}
          variant="ghost"
          size={"xs"}
        />

        <Text flex={1} textAlign={"center"} fontSize={"xs"}>
          {dateFor === "afterDate" ? "À partir du" : "Jusqu'au"}
        </Text>
      </Flex>
    </PopoverHeader>
  )
}

export default Header
