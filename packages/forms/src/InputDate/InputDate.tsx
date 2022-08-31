import {
  FormControlOptions,
  HTMLChakraProps,
  Input,
  InputGroup,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import dayjs from "dayjs"
import { FunctionComponent, useEffect, useState } from "react"
import { DateObject } from "../../types"
import FormControlLayout from "../FormControlLayout"
import PopBtn from "./PopBtn"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  value: string
  handleChange: (e: string) => void
  focusBorderColor?: string
  errorBorderColor?: string
  htmlSize?: number
  label?: string
  error?: string
  hint?: string
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    ThemingProps<"Input">,
    FormControlOptions {}

export const InputDate: FunctionComponent<InputProps> = ({
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
      ...rest
    } = props
    return rest
  }

  const [date, setDate] = useState<DateObject>({
    currentDate: dayjs(new Date()),
    selectedDate: props.value ? dayjs(props.value) : null,
    value: props.value,
  })

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
    <FormControlLayout {...props}>
      <InputGroup size={props.size} position={"relative"}>
        <Input
          type={"date"}
          {...propsForInput()}
          value={props.value}
          variant={props.variant}
          focusBorderColor={props.isInvalid ? "error.700" : "primary.700"}
          _invalid={{
            borderColor: "error.600",
            bg: "error.100",
            color: "error.600",
          }}
          px={props.px ? props.px : 3}
          bg={props.bg ? props.bg : "white"}
          onChange={(e) => handleManualChange(e.target.value)}
        />

        <PopBtn date={date} setDate={setDate} />
      </InputGroup>
    </FormControlLayout>
  )
}
