import { PopoverContent, Portal } from "@chakra-ui/react"
import React from "react"
import Body from "./Body"
import Header from "./Header"
import { DateOptions, DefaultDate } from "./InputDateRange"

interface IProps {
  dateFor: "afterDate" | "beforeDate"
  setDate: (date: DefaultDate) => void
  dateObject: DefaultDate
  options?: DateOptions
}

const Picker = ({ dateFor, setDate, dateObject, options }: IProps) => {
  return (
    <Portal>
      <PopoverContent
        width={"auto"}
        rootProps={{ style: { transform: "scale(0)" } }}
        p={2}
      >
        <Header
          dateFor={dateFor}
          setDate={setDate}
          dateObject={dateObject}
          options={options}
        />
        <Body
          dateFor={dateFor}
          setDate={setDate}
          dateObject={dateObject}
          options={options}
        />
      </PopoverContent>
    </Portal>
  )
}

export default Picker
