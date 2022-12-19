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
          height={"full"}
          rounded={"base"}
          width={"full"}
          type={showPassword ? "text" : "password"}
          {...propsForInput()}
          variant={props.variant}
          focusBorderColor={props.isInvalid ? "red.500" : "primary.700"}
          _invalid={{
            borderColor: "red.500",
            bg: "red.50",
            color: "red.500",
          }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          fontSize={props.fontSize || "sm"}
          pl={"0.688rem"}
          pt={"0.656rem"}
          pb={"0.656rem"}
          pr={"2.5rem"}
          bg={props.bg ? props.bg : "white"}
          onChange={handleOnChange}
          defaultValue={props.defaultValue}
          {...(register ? { ...register(props.name) } : null)}
        />

        <InputRightElement
          cursor={"pointer"}
          onClick={() => setShowPassword(!showPassword)}
          pb={"0.438rem"}
          pr={"0.5rem"}
          pt={"0.438rem"}
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
                    : "neutral.500"
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
                  : "neutral.500"
              }
              boxSize={"24px"}
            />
          )}
        </InputRightElement>
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
