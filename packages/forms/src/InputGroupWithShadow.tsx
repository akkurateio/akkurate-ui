import React, { useState } from "react"

import {
  FormControl,
  FormControlOptions,
  FormErrorMessage,
  FormHelperText,
  HTMLChakraProps,
  InputGroup,
  ResponsiveValue,
} from "@chakra-ui/react"
import Label from "./Label"
import { theme } from "@akkurateio/utils"
import { ThemingProps } from "@chakra-ui/system"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
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

const FormControlLayout: React.FC<InputProps> = (props) => {
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
  const [focus, setFocus] = useState(false)

  return (
    <InputGroup
      size={props.size}
      width={"fit-content"}
      rounded={"4px"}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      borderWidth={"1px"}
      borderColor={
        props.isInvalid ? "error.500" : focus ? "primary.500" : "neutral.400"
      }
      boxShadow={
        focus ? `0 0 0 3px ${theme.colors.primary[500]}25 ` : undefined
      }
    >
      {props.children}
    </InputGroup>
  )
}

export default FormControlLayout
