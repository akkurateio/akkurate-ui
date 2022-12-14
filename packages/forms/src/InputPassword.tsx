import { AisEye, AisEyeClosed } from "@akkurateio/icons"
import {
  FormControlOptions,
  HTMLChakraProps,
  Input,
  InputGroup,
  InputRightElement,
  ThemingProps,
} from "@chakra-ui/react"
import FormControlLayout from "./FormControlLayout"
import React, { useState } from "react"
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
  iconOpen?: JSX.Element
  iconClose?: JSX.Element
  register?: any
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    ThemingProps<"Input">,
    FormControlOptions {}

export const AcsInputPassword: React.FC<InputProps> = ({
  handleChange,
  register,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [focus, setFocus] = useState(false)

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
      <InputGroupWithShadow isInvalid={props.isInvalid}>
        <Input
          border={"none"}
          height={"38px"}
          rounded={"4px"}
          width={props.width ? props.width : "300px"}
          type={showPassword ? "text" : "password"}
          {...propsForInput()}
          variant={props.variant}
          focusBorderColor={props.isInvalid ? "error.700" : "primary.700"}
          _invalid={{
            borderColor: "error.600",
            bg: "error.100",
            color: "error.600",
          }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          fontSize={"14px"}
          pl={"11px"}
          pt={"10.5px"}
          pb={"10.5px"}
          bg={props.bg ? props.bg : "white"}
          onChange={handleOnChange}
          defaultValue={props.defaultValue}
          {...(register ? { ...register(props.name) } : null)}
        />

        <InputRightElement
          cursor={"pointer"}
          onClick={() => setShowPassword(!showPassword)}
          pb={"7px"}
          pr={"8px"}
          pt={"7px"}
        >
          {showPassword ? (
            props.iconOpen ? (
              props.iconOpen
            ) : (
              <AisEye
                color={
                  props.isInvalid
                    ? "error.500"
                    : focus
                    ? "primary.500"
                    : "neurtral.500"
                }
                boxSize={"24px"}
              />
            )
          ) : props.iconClose ? (
            props.iconClose
          ) : (
            <AisEyeClosed
              color={
                props.isInvalid
                  ? "error.500"
                  : focus
                  ? "primary.500"
                  : "neurtral.500"
              }
              boxSize={"24px"}
            />
          )}
        </InputRightElement>
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
