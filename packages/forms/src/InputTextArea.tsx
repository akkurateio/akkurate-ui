import {
  FormControlOptions,
  HTMLChakraProps,
  InputGroup,
  Textarea,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import { FunctionComponent, useEffect, useRef } from "react"
import FormControlLayout from "./FormControlLayout"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  handleChange: (e: string) => void
  value: string
  focusBorderColor?: string
  errorBorderColor?: string
  autoResize?: boolean
  htmlSize?: number
  label?: string
  error?: string
  hint?: string
}

interface InputProps
  extends Omit<HTMLChakraProps<"textarea">, Omitted>,
    InputOptions,
    ThemingProps<"Textarea">,
    FormControlOptions {}

export const AcsInputTextArea: FunctionComponent<InputProps> = ({handleChange, ...props}) => {
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
      autoResize,
      ...rest
    } = props
    return rest
  }

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    if (props.autoResize) {
      if (textareaRef && textareaRef.current) {
        textareaRef.current.style.height = "0px"
        const scrollHeight = textareaRef.current.scrollHeight
        textareaRef.current.style.height = scrollHeight + 10 + "px"
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value])

  return (
    <FormControlLayout {...props}>
      <InputGroup size={props.size}>
        <Textarea
          ref={textareaRef}
          onChange={(e) => handleChange(e.target.value)}
          type={"text"}
          {...propsForInput()}
          variant={props.variant}
          focusBorderColor={props.isInvalid ? "error.700" : "primary.700"}
          _invalid={{
            borderColor: "error.600",
            bg: "error.100",
            color: "error.600",
          }}
          px={props.px ? props.px : 3}
          bg={props.bg ? props.bg : "white"}
          rows={props.autoResize ? (props.rows ? props.rows : 2) : 1}
          minH={props.autoResize ? (props.minH ? props.minH : 24) : "auto"}
          resize={
            props.autoResize ? (props.resize ? props.resize : "none") : "none"
          }
        />
      </InputGroup>
    </FormControlLayout>
  )
}
