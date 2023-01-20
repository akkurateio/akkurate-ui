import { AisEye, AisEyeClosed } from "@akkurateio/icons"
import {
  FormControlOptions,
  HTMLChakraProps,
  Input,
  InputRightElement,
  ThemingProps,
  useBreakpointValue,
  useTheme,
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import FormControlLayout from "./FormControlLayout"
import InputGroupWithShadow from "./InputGroupWithShadow"
// @ts-ignore
import { sizesAll } from "@akkurateio/utils"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  handleChange?: (e: string) => void
  value?: string
  focusBorderColor?: string
  errorBorderColor?: string
  label?: string
  error?: string
  hint?: string
  iconOpen?: JSX.Element
  iconClose?: JSX.Element
  register?: any
  size?: "sm" | "md" | "lg"
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    Omit<ThemingProps<"Input">, Omitted>,
    FormControlOptions {}

export const AcsInputPassword: React.FC<InputProps> = ({
  handleChange,
  register,
  size = "md",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [focus, setFocus] = useState(false)

  const sizeState = useBreakpointValue(typeof size === "object" ? size : {})
  const sizeInput = sizesAll(sizeState ? sizeState : (size as string))

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
  const theme = useTheme()
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (handleChange) {
      handleChange(e.target.value)
    }

    if (register) {
      return null
    }

    return null
  }
  const handleFocus = () => {
    setFocus(false)
  }
  useEffect(() => {
    handleFocus
  }, [focus])
  return (
    <FormControlLayout label={props.label} {...props}>
      <InputGroupWithShadow
        isInvalid={props.isInvalid}
        width={props.width}
        height={sizeInput?.height}
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
          onBlur={handleFocus}
          fontSize={sizeInput?.fontSize}
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
          h={"full"}
          onBlur={() => setFocus(false)}
        >
          {showPassword ? (
            props.iconOpen ? (
              props.iconOpen
            ) : (
              <AisEyeClosed
                color={
                  !focus
                    ? theme.colors.neutral[500]
                    : props.isInvalid
                    ? theme.colors.error[500]
                    : theme.colors.primary[500]
                }
                boxSize={sizeInput?.boxSize}
              />
            )
          ) : props.iconClose ? (
            props.iconClose
          ) : (
            <AisEye
              color={
                !focus
                  ? theme.colors.neutral[500]
                  : props.isInvalid
                  ? theme.colors.error[500]
                  : theme.colors.primary[500]
              }
              boxSize={sizeInput?.boxSize}
            />
          )}
        </InputRightElement>
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
