import {
  FormControlOptions,
  HStack,
  PinInput,
  PinInputField,
  UsePinInputProps,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import { FunctionComponent } from "react"
import FormControlLayout from "./FormControlLayout"

interface InputOptions {
  onPinChange: (e: string) => void
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

export const InputPin: FunctionComponent<InputProps> = (props) => {
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

  const pinArray = Array.from({ length: props.pinNumber }, (v, k) => k)

  console.log(props.value)

  return (
    <FormControlLayout {...props}>
      <HStack>
        <PinInput
          {...props}
          onChange={(e) => props.onPinChange(e)}
          manageFocus={true}
        >
          {pinArray.map((pin, idx) => (
            <PinInputField key={idx + 1} bg={props.bg ? props.bg : "white"} />
          ))}
        </PinInput>
      </HStack>
    </FormControlLayout>
  )
}
