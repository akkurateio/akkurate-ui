import {
  FormControlOptions,
  HTMLChakraProps,
  Radio,
  RadioGroup,
  Stack,
  ThemingProps,
} from "@chakra-ui/react"
import React from "react"
import FormControlLayout from "./FormControlLayout"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  handleChange: (e: string) => void
  focusBorderColor?: string
  errorBorderColor?: string
  htmlSize?: number
  label?: string
  error?: string
  hint?: string
  value?: string | number
  valuesArray: {
    value: string | number
    label: string
  }[]
  direction?: "horizontal" | "vertical"
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    ThemingProps<"RadioGroup">,
    FormControlOptions {}

export const AcsRadioGroup: React.FC<InputProps> = ({
  handleChange,
  valuesArray,
  direction,
  ...props
}) => {
  return (
    <FormControlLayout {...props}>
      <RadioGroup onChange={handleChange} value={props.value}>
        <Stack
          direction={direction === "vertical" ? "column" : "row"}
          flexWrap={props.flexWrap}
        >
          {valuesArray.map((item) => (
            <Radio key={item.value} value={item.value} colorScheme={"primary"}>
              {item.label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </FormControlLayout>
  )
}
