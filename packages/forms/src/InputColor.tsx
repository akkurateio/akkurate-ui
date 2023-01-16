import React, { useEffect, useId, useState } from "react"

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
  Portal,
  ThemingProps,
  useBreakpointValue,
} from "@chakra-ui/react"
import { useTheme } from "@chakra-ui/system"
import styled from "@emotion/styled"
import { HexColorPicker } from "react-colorful"
import FormControlLayout from "./FormControlLayout"
import InputGroupWithShadow from "./InputGroupWithShadow"
// @ts-ignore
import { sizesAll } from "@akkurateio/utils"

const StyledBox = styled.div`
  .react-colorful__saturation {
    border-radius: 2px 2px 2px 2px;
  }

  .react-colorful {
    width: 120px;
    height: 120px;
    border-radius: 0 0 4px 4px;
  }

  .react-colorful__hue {
    margin-top: 12px;
    height: 12px;
    border-radius: 2px 2px 2px 2px;
  }

  .react-colorful__saturation-pointer {
    width: 20px;
    height: 20px;
    border-radius: 99px;
  }

  .react-colorful__hue-pointer,
  .react-colorful__alpha-pointer {
    width: 20px;
    height: 20px;
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
  size?: "sm" | "md" | "lg"
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    Omit<ThemingProps<"Input">, Omitted>,
    FormControlOptions {}

export const AcsInputColor: React.FC<InputProps> = ({
  handleChange,
  height,
  value,
  size = "md",
  iconOpen,
  iconClose,
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
  const sizeState = useBreakpointValue(typeof size === "object" ? size : {})
  const sizeInput = sizesAll(sizeState ? sizeState : (size as string))

  return (
    <FormControlLayout label={props.label} {...props}>
      <InputGroupWithShadow
        rounded={props.rounded}
        isInvalid={props.isInvalid}
        height={sizeInput?.height}
        width={props.width}
      >
        <InputLeftElement width={"fit-content"} height={"full"}>
          <Box
            rounded={props.rounded ? props.rounded : "0.125rem"}
            ml={"0.25rem"}
            mt={"0.25rem"}
            mb={"0.25rem"}
            mr={0}
            backgroundColor={value as string}
            width={"4rem"}
            height={"80%"}
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
          fontSize={sizeInput?.fontSize}
          pt={"0.641rem"}
          pb={"0.641rem"}
          bg={props.bg ? props.bg : "white"}
          onChange={(e) => handleChange(e.target.value)}
        />

        <InputRightElement
          boxShadow={"none"}
          cursor={"pointer"}
          height={"full"}
          display={"flex"}
          alignItems={"center"}
        >
          <Popover placement={"bottom-end"}>
            {({ isOpen }) => (
              <>
                <PopoverTrigger>
                  <Box
                    position={"relative"}
                    mt={"-1px"}
                    color={
                      props.isInvalid
                        ? "error.500"
                        : focus || isOpen
                        ? "primary.500"
                        : "neutral.500"
                    }
                  >
                    {isOpen ? (
                      iconOpen ? (
                        iconOpen
                      ) : (
                        <AisColorPalette boxSize={sizeInput?.boxSize} />
                      )
                    ) : iconClose ? (
                      iconClose
                    ) : (
                      <AisColorPalette boxSize={sizeInput?.boxSize} />
                    )}
                  </Box>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent
                    rootProps={{ style: { transform: "scale(0)" } }}
                    p={"0.25rem"}
                    pb={"1.063rem"}
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
                </Portal>
              </>
            )}
          </Popover>
        </InputRightElement>
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
