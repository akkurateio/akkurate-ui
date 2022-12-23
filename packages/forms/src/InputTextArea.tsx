import {
  FormControlOptions,
  HTMLChakraProps,
  InputGroup,
  Textarea,
  useTheme,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React, { useEffect, useRef } from "react"
import FormControlLayout from "./FormControlLayout"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  handleChange: (e: string) => void
  value?: string
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
  const theme = useTheme()

  const [focus, setFocus] = React.useState(false)

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
      <InputGroup width={props.width} size={props.size} height={props.height}>
        <Textarea
          borderColor={"neutral.300"}
          _focusVisible={{
            borderWidth: "1px",
            borderColor: theme.colors.primary[500],
            boxShadow: focus
              ? `0 0 0 3px ${theme.colors.primary[500]}25 `
              : "none",
          }}
          rounded={"base"}
          width={"full"}
          height={"full"}
          ref={textareaRef}
          onChange={handleOnChange}
          type={"text"}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...propsForInput()}
          variant={props.variant}
          _invalid={{
            borderColor: "red.500",
            bg: "red.50",
            color: "red.500",
          }}
          fontSize={props.fontSize || "sm"}
          pl={"0.688rem"}
          pt={"0.625rem"}
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
      </InputGroup>
    </FormControlLayout>
  )
}
