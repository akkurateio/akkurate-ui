import { PopoverContent } from "@chakra-ui/react"
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
    <PopoverContent
      width={"auto"}
      // hack because the popover content would take his space on the right of the input when never opened
      rootProps={{ style: { transform: "scale(0)" } }}
    >
      <PopHeader date={date} setDate={setDate} />
      <PopBody date={date} setDate={setDate} />
    </PopoverContent>
  )
}

export default PopContent
