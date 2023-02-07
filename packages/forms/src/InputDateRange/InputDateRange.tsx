import { Divider, Flex } from "@chakra-ui/react"
import { Dayjs } from "dayjs"
import React from "react"
import FormControlLayout from "../FormControlLayout"
import InputGroupWithShadow from "../InputGroupWithShadow"

import Date from "./Date"

interface IProps {
  value: DefaultDate
  handleChange: (date: DefaultDate) => void

  options?: DateOptions

  label?: string
  height?: string
  width?: string
  isInvalid?: boolean
}

export type DefaultDate = {
  beforeDate: Dayjs | null
  afterDate: Dayjs | null
  currentDate: Dayjs
}

export type DateOptions = {
  minDate?: string | Dayjs | undefined
  maxDate?: string | Dayjs | undefined
  disabledDays?: number[] | undefined
  disabledDates?: string[] | undefined
}

export const AcsInputDateRange = ({
  value: date,
  handleChange: setDate,
  options,

  label,
  height,
  width,
  isInvalid,
}: IProps) => {
  return (
    <FormControlLayout label={label}>
      <Flex experimental_spaceX={4}>
        <InputGroupWithShadow
          height={height}
          width={width}
          isInvalid={isInvalid}
        >
          <Date
            setDate={setDate}
            dateObject={date}
            date={date.afterDate}
            dateFor={"afterDate"}
            options={options}
          />
        </InputGroupWithShadow>
        <InputGroupWithShadow
          height={height}
          width={width}
          isInvalid={isInvalid}
        >
          <Date
            setDate={setDate}
            dateObject={date}
            date={date.beforeDate}
            dateFor={"beforeDate"}
            options={options}
          />
        </InputGroupWithShadow>
      </Flex>
    </FormControlLayout>
  )
}
