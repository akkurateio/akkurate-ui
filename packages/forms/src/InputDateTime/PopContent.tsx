import { PopoverContent, Portal } from "@chakra-ui/react"
import React from "react"
import { DateObject } from "../../types"
import PopBody from "./PopBody"
import PopHeader from "./PopHeader"

interface IProps {
  date: DateObject
  setDate: (e: DateObject) => void
}

const PopContent = ({ date, setDate }: IProps) => {
  return (
    <Portal>
      <PopoverContent width={"auto"}>
        <PopHeader date={date} setDate={setDate} />
        <PopBody date={date} setDate={setDate} />
      </PopoverContent>
    </Portal>
  )
}

export default PopContent
