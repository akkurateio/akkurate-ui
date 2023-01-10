import { AisClose, AisSearch } from "@akkurateio/icons"
import {
  FormControlOptions,
  HTMLChakraProps,
  IconButton,
  Input,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react"
import { ThemingProps, useTheme } from "@chakra-ui/system"
import React, { useState } from "react"
import FormControlLayout from "./FormControlLayout"
import InputGroupWithShadow from "./InputGroupWithShadow"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  value?: string
  handleChange: (e: string) => void
  focusBorderColor?: string
  errorBorderColor?: string
  htmlSize?: number
  label?: string
  error?: string
  hint?: string
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    ThemingProps<"Input">,
    FormControlOptions {}

export const AcsInputSearch: React.FC<InputProps> = ({
  handleChange,
  ...props
}) => {
  const theme = useTheme()

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

  const [focus, setFocus] = useState(false)

  return (
    <FormControlLayout {...props}>
      <InputGroupWithShadow
        width={props.width}
        height={props.height}
        isInvalid={props.isInvalid}
        rounded={props.rounded}
      >
        <InputLeftElement
          backgroundColor={props.isInvalid ? "red.50" : "white"}
          height={"full"}
          rounded={props.rounded}
        >
          <AisSearch
            boxSize={"24px"}
            color={
              props.isInvalid
                ? "red.500"
                : focus
                ? theme.colors.primary[500]
                : "neutral.400"
            }
          />
        </InputLeftElement>
        <Input
          type={"text"}
          {...propsForInput()}
          variant={props.variant}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          fontSize={props.fontSize || "sm"}
          rounded={props.rounded ? props.rounded : "base"}
          paddingBottom={"0.656rem"}
          paddingTop={"0.656rem"}
          paddingLeft={"2.5rem"}
          onChange={(e) => handleChange(e.target.value)}
          border={"none"}
          _focusVisible={{
            border: "none",
            boxShadow: `none`,
          }}
          width={"full"}
          height={"full"}
        />
        <InputRightElement height={"full"}>
          {props.value && props.value.length > 0 && (
            <IconButton
              aria-label="Close"
              rounded={"full"}
              color={"white"}
              colorScheme={"neutral"}
              size={"16px"}
            >
              <AisClose boxSize={"16px"} onClick={() => handleChange("")} />
            </IconButton>
          )}
        </InputRightElement>
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
