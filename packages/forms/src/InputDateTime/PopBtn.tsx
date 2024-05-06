import React, { useEffect, useState } from "react"
import { AisCalendar, AisMobile } from "@akkurateio/chakra-icons"
import { Button, Flex, Popover, PopoverTrigger } from "@chakra-ui/react"
import dayjs from "dayjs"
import "dayjs/locale/fr"
import { DateObject } from "../../types"
import PopContent from "./PopContent"

import { isMobile } from "react-device-detect"

dayjs.locale("fr")

interface IProps {
  date: DateObject
  setDate: (e: DateObject) => void
}

export const PopBtn = ({ date, setDate }: IProps) => {
  const [useNativeCalendar, setUseNativeCalendar] = useState(false)

  useEffect(() => {
    if (isMobile) {
      setUseNativeCalendar(true)
    }
  }, [])

  return (
    <Flex
      position={"absolute"}
      top={0}
      right={"36%"}
      bottom={0}
      w={10}
      alignItems={"center"}
      justifyItems={"center"}
    >
      {!useNativeCalendar ? (
        <Popover placement={"bottom-end"}>
          <PopoverTrigger>
            <Button
              variant={"unstyled"}
              width={"50%"}
              w={"32px"}
              h={"32px"}
              bg={"white"}
              color={"primary.500"}
              zIndex={1}
            >
              <AisCalendar boxSize={6} />
            </Button>
          </PopoverTrigger>
          <PopContent date={date} setDate={setDate} />
        </Popover>
      ) : (
        <Button
          variant={"unstyled"}
          width={"50%"}
          w={"32px"}
          h={"32px"}
          bg={"white"}
          color={"primary.500"}
          zIndex={1}
        >
          <AisCalendar boxSize={6} />
        </Button>
      )}
    </Flex>
  )
}

export default PopBtn
