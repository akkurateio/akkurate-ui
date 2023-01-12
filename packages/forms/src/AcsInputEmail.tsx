import {
  FormControlOptions,
  HTMLChakraProps,
  Input,
  useBreakpointValue,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React from "react"
import FormControlLayout from "./FormControlLayout"
import InputGroupWithShadow from "./InputGroupWithShadow"
import { sizesAll } from "@akkurateio/utils"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  handleChange?: (e: string) => void
  value?: string
  label?: string
  error?: string
  hint?: string
  register?: any
  size?: "sm" | "md" | "lg"
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    Omit<ThemingProps<"Input">, Omitted>,
    FormControlOptions {}

export const AcsInputEmail: React.FC<InputProps> = ({
  handleChange,
  register,
  size = "md",
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

  const sizeState = useBreakpointValue(typeof size === "object" ? size : {})
  const sizeInput = sizesAll(sizeState ? sizeState : (size as string))

  return (
    <FormControlLayout {...props}>
      <InputGroupWithShadow
        isInvalid={props.isInvalid}
        width={props.width}
        height={sizeInput?.height}
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
          fontSize={sizeInput?.fontSize}
          {...(register ? { ...register(props.name) } : null)}
          defaultValue={props.defaultValue}
        />
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
