import React, { useEffect, useState } from "react"

import { AisColorPalette } from "@akkurateio/icons"
import {
  Box,
  FormControlOptions,
  HTMLChakraProps,
  Input,
  InputLeftElement,
  InputRightElement,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  ThemingProps,
} from "@chakra-ui/react"
import styled from "@emotion/styled"
import { HexColorPicker } from "react-colorful"
import FormControlLayout from "./FormControlLayout"
import InputGroupWithShadow from "./InputGroupWithShadow"
import { useTheme } from "@chakra-ui/system"

const StyledBox = styled.div`
  .react-colorful__saturation {
    border-radius: 4px 4px 0 0;
  }

  .react-colorful {
    width: 120px;
    height: 120px;
    border-radius: 0 0 4px 4px;
  }

  .react-colorful__hue {
    height: 20px;
    border-radius: 0 0 4px 4px;
  }

  .react-colorful__saturation-pointer {
    width: 16px;
    height: 16px;
    border-radius: 99px;
  }

  .react-colorful__hue-pointer,
  .react-colorful__alpha-pointer {
    width: 12px;
    height: 12px;
    border-radius: 99px;
  }
`

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  handleChange: (e: string) => void
  value?: string
  label?: string
  error?: string
  hint?: string
  iconOpen?: JSX.Element
  iconClose?: JSX.Element
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    ThemingProps<"Input">,
    FormControlOptions {}

export const AcsInputColor: React.FC<InputProps> = ({
  handleChange,
  height,
  value,
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
      ...rest
    } = props
    return rest
  }
  const [focus, setFocus] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    if (!value) {
      handleChange(theme.colors.primary[500])
    }
  }, [value])

  console.log("isFocused", value)
  return (
    <FormControlLayout label={props.label} {...props}>
      <InputGroupWithShadow
        rounded={props.rounded}
        isInvalid={props.isInvalid}
        height={height}
        width={props.width}
      >
        <InputLeftElement width={"fit-content"} height={"full"}>
          <Box
            ml={"0.25rem"}
            mt={"0.25rem"}
            mb={"0.25rem"}
            mr={0}
            backgroundColor={value as string}
            width={"64px"}
            height={"30px"}
            rounded={"2px"}
          />
        </InputLeftElement>
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
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          pl={"78px"}
          {...propsForInput()}
          variant={props.variant}
          focusBorderColor={props.isInvalid ? "error.700" : "primary.700"}
          _invalid={{
            borderColor: "error.600",
            bg: "error.100",
            color: "error.600",
          }}
          fontSize={props.fontSize || "sm"}
          pt={"0.641rem"}
          pb={"0.641rem"}
          bg={props.bg ? props.bg : "white"}
          onChange={(e) => handleChange(e.target.value)}
        />

        <InputRightElement
          boxShadow={"none"}
          cursor={"pointer"}
          height={"full"}
        >
          <Popover placement={"bottom-end"}>
            {({ isOpen }) => (
              <>
                <PopoverTrigger>
                  <Box
                    color={
                      props.isInvalid
                        ? "error.500"
                        : focus || isOpen
                        ? "primary.500"
                        : "neutral.500"
                    }
                  >
                    {isOpen ? (
                      props.iconOpen ? (
                        props.iconOpen
                      ) : (
                        <AisColorPalette boxSize={"24px"} />
                      )
                    ) : props.iconClose ? (
                      props.iconClose
                    ) : (
                      <AisColorPalette boxSize={"24px"} />
                    )}
                  </Box>
                </PopoverTrigger>
                <PopoverContent
                  p={"0.313rem"}
                  pb={"1.125rem"}
                  _focus={{ boxShadow: "none" }}
                  width={"fit-content"}
                >
                  <PopoverBody p={0}>
                    <StyledBox>
                      <HexColorPicker
                        color={value as string}
                        onChange={handleChange}
                        style={{
                          width: "18.75rem",
                          height: "13.875rem",
                        }}
                      />
                    </StyledBox>
                  </PopoverBody>
                </PopoverContent>
              </>
            )}
          </Popover>
        </InputRightElement>
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
