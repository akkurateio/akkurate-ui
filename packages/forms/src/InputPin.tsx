import {
  FormControlOptions,
  HStack,
  PinInput,
  PinInputField,
  UsePinInputProps, useTheme,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React from "react"
import FormControlLayout from "./FormControlLayout"

interface InputOptions {
  handleChange: (e: string) => void
  pinNumber: number
  focusBorderColor?: string
  errorBorderColor?: string
  bg?: string
  htmlSize?: number
  label?: string
  error?: string
  hint?: string
}

interface InputProps
  extends UsePinInputProps,
    ThemingProps<"PinInput">,
    InputOptions,
    FormControlOptions {}

export const AcsInputPin: React.FC<InputProps> = ({
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
      bg,
      ...rest
    } = props
    return rest
  }
  const theme = useTheme()

  const pinArray = Array.from({ length: props.pinNumber }, (v, k) => k)

  return (
    <FormControlLayout label={props.label} {...props}>
      <HStack>
        <PinInput
          {...propsForInput}
          onChange={(e) => handleChange(e)}
          manageFocus={true}
        >
          {pinArray.map((pin, idx) => (
            <PinInputField _focus={{boxShadow:`0 0 0 3px ${theme.colors.primary[500]}25 `}} key={idx} bg={props.bg ? props.bg : "white"} />
          ))}
        </PinInput>
      </HStack>
    </FormControlLayout>
  )
}
