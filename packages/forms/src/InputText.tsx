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
      <InputGroupWithShadow
        width={props.width}
        height={props.height}
        isInvalid={props.isInvalid}
      >
        <Input
          border={"none"}
          height={"full"}
          rounded={"base"}
          width={"full"}
          type={"text"}
          {...propsForInput()}
          variant={props.variant}
          _invalid={{
            borderColor: "error.500",
            bg: "red.50",
            color: "error.500",
          }}
          bg={props.bg ? props.bg : "white"}
          onChange={handleOnChange}
          pl={"0.688rem"}
          pt={"0.656rem"}
          pb={"0.656rem"}
          fontSize={props.fontSize || "sm"}
          {...(register ? { ...register(props.name) } : null)}
          defaultValue={props.defaultValue}
        />
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
