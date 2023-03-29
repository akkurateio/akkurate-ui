import { AisCalendar } from "@akkurateio/icons"
import {
  Button,
  Flex,
  Popover,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react"
import dayjs from "dayjs"
import "dayjs/locale/fr"
import React, { useEffect } from "react"
import { DateObject } from "../../types"
import PopContent from "./PopContent"

dayjs.locale("fr")

interface IProps {
  date: DateObject
  setDate: (e: DateObject) => void
  focus?: boolean
  sizeInput?: string
}

export const PopBtn = ({ date, setDate, focus, sizeInput }: IProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure()

  useEffect(() => {
    if (date.isCloseOnSelect) {
      if (date.selectedDate && dayjs(date.selectedDate).isValid()) {
        onClose()
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date.selectedDate])

  return (
    <Flex
      position={"absolute"}
      top={0}
      right={0}
      bottom={0}
      w={10}
      alignItems={"center"}
      justifyItems={"center"}
    >
      <Popover
        isOpen={isOpen}
        placement={"bottom-end"}
        onClose={() => {
          setDate({
            ...date,
            currentDate: dayjs(date.value).isValid()
              ? dayjs(date.value)
              : dayjs(new Date()),
          })
          onClose()
        }}
      >
        <PopoverTrigger>
          <Button
            variant={"unstyled"}
            width={"50%"}
            w={"full"}
            h={"full"}
            bg={"white"}
            zIndex={1}
            onClick={isOpen ? onClose : onOpen}
          >
            <AisCalendar
              color={focus ? "primary.500" : "neutral.500"}
              boxSize={sizeInput}
            />
          </Button>
        </PopoverTrigger>
        <PopContent date={date} setDate={setDate} />
      </Popover>
    </Flex>
  )
}

export default PopBtn
