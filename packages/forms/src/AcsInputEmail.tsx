import { FormControlOptions, HTMLChakraProps, Input } from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React from "react"
import FormControlLayout from "./FormControlLayout"
import InputGroupWithShadow from "./InputGroupWithShadow"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  handleChange?: (e: string) => void
  value?: string
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

export const AcsInputEmail: React.FC<InputProps> = ({
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
        isInvalid={props.isInvalid}
        width={props.width}
        height={props.height}
        rounded={props.rounded}
      >
        <Input
          border={"none"}
          rounded={props.rounded ? props.rounded : "base"}
          height={"full"}
          width={"full"}
          type={"email"}
          {...propsForInput()}
          variant={props.variant}
          _focusVisible={{
            border: "none",
            boxShadow: `none`,
          }}
          pl={"0.688rem"}
          pt={"0.656rem"}
          pb={"0.656rem"}
          pr={"0.688rem"}
          bg={props.bg ? props.bg : "white"}
          onChange={handleOnChange}
          fontSize={props.fontSize || "sm"}
          {...(register ? { ...register(props.name) } : null)}
          defaultValue={props.defaultValue}
        />
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
