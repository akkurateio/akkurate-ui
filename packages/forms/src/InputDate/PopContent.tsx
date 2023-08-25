import { Box, PopoverContent, Portal } from "@chakra-ui/react"
import React from "react"
import { DateObject } from "../../types"
import PopBody from "./PopBody"
import PopHeader from "./PopHeader"

interface IProps {
  date: DateObject
  setDate: (e: DateObject) => void
  zIndex?: number
}

const PopContent = ({ date, setDate, zIndex }: IProps) => {
  return (
    <Portal>
      <PopoverContent
        width={"auto"}
        // hack because the popover content would take his space on the right of the input when never opened
        rootProps={{ style: { transform: "scale(0)", zIndex: zIndex } }}
      >
        <PopHeader date={date} setDate={setDate} />
        <PopBody date={date} setDate={setDate} zIndex={zIndex} />
      </PopoverContent>
    </Portal>
  )
}

export default PopContent
