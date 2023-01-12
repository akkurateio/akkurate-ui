import {
  FormControlOptions,
  HTMLChakraProps,
  Input,
  useBreakpointValue,
} from "@chakra-ui/react"
import { ResponsiveValue, ThemingProps } from "@chakra-ui/system"
import React from "react"
import FormControlLayout from "./FormControlLayout"
import InputGroupWithShadow from "./InputGroupWithShadow"
// @ts-ignore
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

export const AcsInputText: React.FC<InputProps> = ({
  handleChange,
  register,
  size = "md",
  ...props
}) => {
  const propsForInput = () => {
    const { label, error, isRequired, isDisabled, isInvalid, ...rest } = props
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
        width={props.width}
        height={sizeInput?.height}
        isInvalid={props.isInvalid}
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
          type={"text"}
          {...propsForInput()}
          variant={props.variant}
          onChange={handleOnChange}
          pl={"0.688rem"}
          pt={"0.656rem"}
          pb={"0.656rem"}
          pr={"0.688rem"}
          fontSize={sizeInput?.fontSize}
          {...(register ? { ...register(props.name) } : null)}
          defaultValue={props.defaultValue}
        />
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
