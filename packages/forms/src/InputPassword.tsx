import { AisEye, AisEyeClosed } from "@akkurateio/icons"
import {
  FormControlOptions,
  HTMLChakraProps,
  Input,
  InputRightElement,
  ThemingProps,
} from "@chakra-ui/react"
import React, { useState } from "react"
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
    <FormControlLayout label={props.label} {...props}>
      <InputGroupWithShadow
        isInvalid={props.isInvalid}
        width={props.width}
        height={props.height}
        rounded={props.rounded}
      >
        <Input
          border={"none"}
          _focusVisible={{
            border: "none",
            boxShadow: `none`,
          }}
          height={"full"}
          rounded={"base"}
          width={"full"}
          type={showPassword ? "text" : "password"}
          {...propsForInput()}
          variant={props.variant}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          fontSize={props.fontSize || "sm"}
          pl={"0.688rem"}
          pt={"0.656rem"}
          pb={"0.656rem"}
          pr={"2.5rem"}
          onChange={handleOnChange}
          defaultValue={props.defaultValue}
          {...(register ? { ...register(props.name) } : null)}
        />

        <InputRightElement
          cursor={"pointer"}
          onClick={() => setShowPassword(!showPassword)}
          pb={"0.438rem"}
          pt={"0.438rem"}
        >
          {showPassword ? (
            props.iconOpen ? (
              props.iconOpen
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
            )
          ) : props.iconClose ? (
            props.iconClose
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
          )}
        </InputRightElement>
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
