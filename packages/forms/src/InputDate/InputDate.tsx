import {
  FormControlOptions,
  HTMLChakraProps,
  Input,
  useBreakpointValue,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import dayjs, { Dayjs } from "dayjs"
import React, { useEffect, useState } from "react"
import { DateObject } from "../../types"
import FormControlLayout from "../FormControlLayout"
import InputGroupWithShadow from "../InputGroupWithShadow"
import { PopBtn } from "./PopBtn"
import { sizesAll } from "@akkurateio/utils"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  value: string
  handleChange: (e: string) => void
  label?: string
  error?: string
  hint?: string
  // ---
  minDate?: string | Dayjs
  maxDate?: string | Dayjs
  disabledDays?: number[] // 0 - 6 : 0 - Sunday, 1 - Monday, ...
  disabledDates?: string[] // format : YYYY-MM-DD
  size?: "sm" | "md" | "lg"
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    Omit<ThemingProps<"Input">, Omitted>,
    FormControlOptions {}

export const AcsInputDate: React.FC<InputProps> = ({
  handleChange,
  size = "md",
  ...props
}) => {
  const propsForInput = () => {
    const {
      label,
      hint,
      error,
      isRequired,
      isDisabled,
      isInvalid,
      isReadOnly,
      minDate,
      maxDate,
      disabledDays,
      disabledDates,
      ...rest
    } = props
    return rest
  }

  const [date, setDate] = useState<DateObject>({
    currentDate: dayjs(new Date()),
    selectedDate: props.value ? dayjs(props.value) : null,
    value: props.value,
    minDate: props.minDate,
    maxDate: props.maxDate,
    disabledDays: props.disabledDays,
    disabledDates: props.disabledDates,
  })
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    if (date.selectedDate) {
      handleChange(date.selectedDate.format("YYYY-MM-DD"))
      setDate({ ...date, value: date.selectedDate.format("YYYY-MM-DD") })
    } else {
      handleChange("")
      setDate({ ...date, value: "" })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date.selectedDate])

  const handleManualChange = (e: string) => {
    setDate({
      ...date,
      value: e,
    })
    handleChange(e)
  }

  const sizeState = useBreakpointValue(typeof size === "object" ? size : {})
  const sizeInput = sizesAll(sizeState ? sizeState : (size as string))

  return (
    <FormControlLayout label={props.label} {...props}>
      <InputGroupWithShadow
        height={sizeInput?.height}
        width={props.width}
        isInvalid={props.isInvalid}
      >
        <Input
          border={"none"}
          height={"full"}
          rounded={"base"}
          width={"full"}
          type={"date"}
          {...propsForInput()}
          fontSize={sizeInput?.fontSize}
          value={props.value}
          variant={props.variant}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          focusBorderColor={props.isInvalid ? "red.500" : "primary.500"}
          _invalid={{
            borderColor: "red.500",
            bg: "red.50",
            color: "red.500",
          }}
          px={props.px ? props.px : 2}
          bg={props.bg ? props.bg : "white"}
          onChange={(e) => handleManualChange(e.target.value)}
        />

        <PopBtn
          focus={focus}
          date={date}
          setDate={setDate}
          sizeInput={sizeInput?.boxSize}
        />
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
