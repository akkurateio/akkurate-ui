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
import { sizesAll } from "@akkurateio/utils"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  handleChange?: (e: string) => void
  value?: string
  label?: string
  error?: string
  hint?: string
  register?: any
  sizes?: "sm" | "md" | "lg"
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    ThemingProps<"Input">,
    FormControlOptions {}

export const AcsInputText: React.FC<InputProps> = ({
  handleChange,
  register,
  sizes = "md",
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

  const sizeState = useBreakpointValue(typeof sizes === "object" ? sizes : {})

  const sizeInput = sizesAll(sizeState ? sizeState : (sizes as string))

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
