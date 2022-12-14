import {
  FormControlOptions,
  HTMLChakraProps,
  Input,
  InputGroup,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React from "react"
import FormControlLayout from "./FormControlLayout"
import InputGroupWithShadow from "./InputGroupWithShadow"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  handleChange?: (e: string) => void
  value?: string
  focusBorderColor?: string
  errorBorderColor?: string
  htmlSize?: number
  label?: string
  error?: string
  hint?: string
  register?: any
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    ThemingProps<"Input">,
    FormControlOptions {}

export const AcsInputText: React.FC<InputProps> = ({
  handleChange,
  register,
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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (handleChange) {
      handleChange(e.target.value)
    }

    if (register) {
      return null
    }

    return null
  }

  return (
    <FormControlLayout {...props}>
      <InputGroupWithShadow isInvalid={props.isInvalid} size={props.size}>
        <Input
          border={"none"}
          height={"38px"}
          rounded={"4px"}
          width={props.width ? props.width : "300px"}
          type={"text"}
          {...propsForInput()}
          variant={props.variant}
          _invalid={{
            borderColor: "error.600",
            bg: "error.100",
            color: "error.600",
          }}
          bg={props.bg ? props.bg : "white"}
          onChange={handleOnChange}
          pl={"11px"}
          pt={"10.5px"}
          pb={"10.5px"}
          fontSize={"14px"}
          {...(register ? { ...register(props.name) } : null)}
          defaultValue={props.defaultValue}
        />
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
