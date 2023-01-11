import { FormControlOptions, HTMLChakraProps, Input } from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import dayjs, { Dayjs } from "dayjs"
import React, { useEffect, useState } from "react"
import { DateObject } from "../../types"
import FormControlLayout from "../FormControlLayout"
import InputGroupWithShadow from "../InputGroupWithShadow"
import { PopBtn } from "./PopBtn"

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
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    ThemingProps<"Input">,
    FormControlOptions {}

export const AcsInputDate: React.FC<InputProps> = ({
  handleChange,
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
      size,
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

  return (
    <FormControlLayout label={props.label} {...props}>
      <InputGroupWithShadow
        height={props.height}
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

        <PopBtn focus={focus} date={date} setDate={setDate} />
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
