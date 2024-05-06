import { AisClose, AisSearch } from "@akkurateio/chakra-icons"
import {
  FormControlOptions,
  HTMLChakraProps,
  IconButton,
  Input,
  InputLeftElement,
  InputRightElement,
  useBreakpointValue,
} from "@chakra-ui/react"
import { ThemingProps, useTheme } from "@chakra-ui/system"
import React, { useState } from "react"
import FormControlLayout from "./FormControlLayout"
import InputGroupWithShadow from "./InputGroupWithShadow"
// @ts-ignore
import { sizesAll } from "@akkurateio/utils"

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
  size?: "sm" | "md" | "lg"
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    Omit<ThemingProps<"Input">, Omitted>,
    FormControlOptions {}

export const AcsInputSearch: React.FC<InputProps> = ({
  handleChange,
  size = "md",
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
      ...rest
    } = props
    return rest
  }

  const [focus, setFocus] = useState(false)

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
        <InputLeftElement
          backgroundColor={props.isInvalid ? "red.50" : "transparent"}
          height={"full"}
          rounded={props.rounded ? props.rounded : "base"}
        >
          <AisSearch
            boxSize={sizeInput?.boxSize}
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
          fontSize={sizeInput?.fontSize}
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
            <AisClose
              cursor={"pointer"}
              _hover={{ backgroundColor: "neutral.200" }}
              rounded={"full"}
              boxSize={sizeInput?.iconRightControl}
              onClick={() => handleChange("")}
            />
          )}
        </InputRightElement>
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
