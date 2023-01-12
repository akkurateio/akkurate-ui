import { AisClose } from "@akkurateio/icons"
import {
  Button,
  HStack,
  IconButton,
  Popover,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react"
import dayjs, { Dayjs } from "dayjs"
import React from "react"
import { DateOptions, DefaultDate } from "./InputDateRange"
import Picker from "./Picker"

interface IProps {
  date: Dayjs | null
  setDate: (date: DefaultDate) => void
  dateObject: DefaultDate
  dateFor: "afterDate" | "beforeDate"
  options?: DateOptions
}

const Date = ({ date, setDate, dateObject, dateFor, options }: IProps) => {
  const handleClick = () => {
    if (dateFor === "afterDate") {
      setDate({
        ...dateObject,
        afterDate: null,
      })
    }

    if (dateFor === "beforeDate") {
      setDate({
        ...dateObject,
        beforeDate: null,
      })
    }
  }

  return (
    <Popover>
      <HStack
        width={"full"}
        spacing={20}
        justifyContent={"center"}
        position={"relative"}
      >
        <Text
          fontSize={"2xs"}
          opacity={0.5}
          top={0.5}
          left={1}
          position={"absolute"}
        >
          {dateFor === "afterDate" ? "À partir du :" : "Jusqu'au :"}
        </Text>

        <PopoverTrigger>
          <Button variant={"unstyled"} fontWeight={"normal"} fontSize={"sm"}>
            {date
              ? dayjs(date).format("dddd DD MMMM")
              : "Cliquez pour sélectionner"}
          </Button>
        </PopoverTrigger>

        <IconButton
          aria-label="Vider la date"
          icon={<AisClose boxSize={"16px"} />}
          onClick={handleClick}
          variant="ghost"
          size={"xs"}
          rounded={"full"}
        />
      </HStack>

      <Picker
        dateFor={dateFor}
        setDate={setDate}
        dateObject={dateObject}
        options={options}
      />
    </Popover>
  )
}

export default Date
