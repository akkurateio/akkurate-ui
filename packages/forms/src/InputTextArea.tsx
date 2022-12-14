import {
  FormControlOptions,
  HTMLChakraProps,
  InputGroup,
  Textarea,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React, { useEffect, useRef } from "react"
import FormControlLayout from "./FormControlLayout"
import InputGroupWithShadow from "./InputGroupWithShadow"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  handleChange: (e: string) => void
  value?: string
  focusBorderColor?: string
  errorBorderColor?: string
  autoResize?: boolean
  htmlSize?: number
  label?: string
  error?: string
  hint?: string
  register?: any
}

interface InputProps
  extends Omit<HTMLChakraProps<"textarea">, Omitted>,
    InputOptions,
    ThemingProps<"Textarea">,
    FormControlOptions {}

export const AcsInputTextArea: React.FC<InputProps> = ({
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
      autoResize,
      ...rest
    } = props
    return rest
  }

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (handleChange) {
      handleChange(e.target.value)
    }

    if (register) {
      return null
    }

    return null
  }

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
      <InputGroupWithShadow isInvalid={props.isInvalid} size={props.size}>
        <Textarea
          border={"none"}
          rounded={"4px"}
          width={props.width ? props.width : "600px"}
          ref={textareaRef}
          onChange={handleOnChange}
          type={"text"}
          {...propsForInput()}
          variant={props.variant}
          _invalid={{
            borderColor: "error.500",
            bg: "red.50",
            color: "error.500",
          }}
          fontSize={"14px"}
          pl={"11px"}
          pt={"10px"}
          bg={props.bg ? props.bg : "white"}
          rows={
            props.autoResize
              ? props.rows
                ? props.rows
                : 4
              : props.rows
              ? props.rows
              : 4
          }
          minH={props.autoResize ? (props.minH ? props.minH : 24) : "auto"}
          resize={
            props.autoResize ? (props.resize ? props.resize : "none") : "none"
          }
          {...(register ? { ...register(props.name) } : null)}
          defaultValue={props.defaultValue}
        />
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
