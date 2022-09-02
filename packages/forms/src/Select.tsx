import {
  FormControlOptions,
  HTMLChakraProps,
  Select,
  ThemingProps,
} from "@chakra-ui/react"
import { FunctionComponent } from "react"
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
}

interface InputProps
  extends Omit<HTMLChakraProps<"select">, Omitted>,
    InputOptions,
    ThemingProps<"Select">,
    FormControlOptions {}

export const AcsSelect: FunctionComponent<InputProps> = ({
  valuesArray,
  ...props
}) => {
  return (
    <FormControlLayout {...props}>
      <Select
        {...props}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.handleChange(e.target.value)}
        cursor={"pointer"}
      >
        {valuesArray.map((item) => (
          <option key={item.value}  value={item.value}>{item.label}</option>
        ))}
      </Select>
    </FormControlLayout>
  )
}
