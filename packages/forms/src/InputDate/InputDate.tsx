// @ts-ignore
import { sizesAll } from "@akkurateio/utils"
import {
  Flex,
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

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  value: string
  handleChange: (e: string) => void
  label?: string
  error?: string
  hint?: string
  isEditable?: boolean
  isResetable?: boolean
  isOtherMonthVisible?: boolean
  isCloseOnSelect?: boolean
  // ---
  minDate?: string | Dayjs
  maxDate?: string | Dayjs
  disabledDays?: number[] // 0 - 6 : 0 - Sunday, 1 - Monday, ...
  disabledDates?: string[] // format : YYYY-MM-DD
  size?: "sm" | "md" | "lg"
  // ---
  arrowColor?: string
  hoverBg?: string
  hoverColor?: string
  selectedBg?: string
  selectedColor?: string
  otherMonthBg?: string
  otherMonthColor?: string
  currentMonthBg?: string
  currentMonthColor?: string
  disabledBg?: string
  disabledColor?: string
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    Omit<ThemingProps<"Input">, Omitted>,
    FormControlOptions {}

export const AcsInputDate: React.FC<InputProps> = ({
  handleChange,
  size = "md",
  isEditable = true,
  ...props
}) => {
  const propsForInput = () => {
    const {
      label,
      hint,
      error,
      isRequired,
      isDisabled,
      isResetable,
      isOtherMonthVisible,
      isCloseOnSelect,
      isInvalid,
      isReadOnly,
      minDate,
      maxDate,
      disabledDays,
      disabledDates,
      arrowColor,
      hoverBg,
      hoverColor,
      selectedBg,
      selectedColor,
      otherMonthBg,
      otherMonthColor,
      currentMonthBg,
      currentMonthColor,
      disabledBg,
      disabledColor,
      ...rest
    } = props
    return rest
  }

  const [date, setDate] = useState<DateObject>({
    currentDate: props.value ? dayjs(props.value) : dayjs(new Date()),
    selectedDate: props.value ? dayjs(props.value) : null,
    value: props.value,
    minDate: props.minDate,
    maxDate: props.maxDate,
    disabledDays: props.disabledDays,
    disabledDates: props.disabledDates,
    // -----
    arrowColor: props.arrowColor ?? props.currentMonthBg ?? "primary.500",
    hoverBg: props.hoverBg,
    hoverColor: props.hoverColor,
    selectedBg: props.selectedBg,
    selectedColor: props.selectedColor,
    otherMonthBg: props.otherMonthBg,
    otherMonthColor: props.otherMonthColor,
    currentMonthBg: props.currentMonthBg,
    currentMonthColor: props.currentMonthColor,
    disabledBg: props.disabledBg,
    disabledColor: props.disabledColor,
    // -----
    isResetable: props.isResetable ?? false,
    isOtherMonthVisible: props.isOtherMonthVisible ?? true,
    isCloseOnSelect: props.isCloseOnSelect ?? false,
  })
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    if (date.selectedDate) {
      handleChange(date.selectedDate.format("YYYY-MM-DD"))
      setDate({
        ...date,
        value: date.selectedDate.format("YYYY-MM-DD"),
      })
    } else {
      handleChange("")
      setDate({ ...date, value: null })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date.selectedDate])

  useEffect(() => {
    setDate({
      ...date,
      minDate: props.minDate,
      maxDate: props.maxDate,
      disabledDays: props.disabledDays,
      disabledDates: props.disabledDates,
      isResetable: props.isResetable ?? false,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.minDate,
    props.maxDate,
    props.disabledDays,
    props.disabledDates,
    props.isResetable,
  ])

  const handleManualChange = (e: string) => {
    setDate({
      ...date,
      currentDate: dayjs(e).isValid() ? dayjs(e) : dayjs(new Date()),
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
        {isEditable ? (
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
        ) : (
          <Flex
            alignItems={"center"}
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
          >
            {props.value
              ? dayjs(props.value).format("DD/MM/YYYY")
              : "jj/mm/aaaa"}
          </Flex>
        )}

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
