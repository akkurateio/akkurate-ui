import { AisCalendar } from "@akkurateio/icons"
import { Button, Flex, Popover, PopoverTrigger } from "@chakra-ui/react"
import dayjs from "dayjs"
import "dayjs/locale/fr"
import React from "react"
import { DateObject } from "../../types"
import PopContent from "./PopContent"

dayjs.locale("fr")

interface IProps {
  date: DateObject
  setDate: (e: DateObject) => void
  focus?: boolean
}

export const PopBtn = ({ date, setDate, focus }: IProps) => {
  return (
    <Flex
      position={"absolute"}
      top={0}
      right={2}
      bottom={0}
      w={10}
      alignItems={"center"}
      justifyItems={"center"}
    >
      <Popover placement={"bottom-end"}>
        <PopoverTrigger>
          <Button
            variant={"unstyled"}
            width={"50%"}
            w={"32px"}
            h={"32px"}
            bg={"white"}
            zIndex={1}
          >
            <AisCalendar
              color={focus ? "primary.500" : "neutral.500"}
              boxSize={"24px"}
            />
          </Button>
        </PopoverTrigger>
        <PopContent date={date} setDate={setDate} />
      </Popover>
    </Flex>
  )
}

export default PopBtn
