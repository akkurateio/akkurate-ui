import React from "react"

import { AisColorPalette } from "@akkurateio/icons"
import {
  Box,
  FormControlOptions,
  HTMLChakraProps,
  Input,
  InputGroup,
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
  focusBorderColor?: string
  errorBorderColor?: string
  htmlSize?: number
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

  return (
    <FormControlLayout {...props}>
      <InputGroup size={props.size}>
        <InputLeftElement width={"80px"}>
          <Box
            backgroundColor={props.value as string}
            width={"4rem"}
            height={"1.6rem"}
            rounded={"sm"}
            border={"1px solid black"}
          />
        </InputLeftElement>
        <Input
          type={"text"}
          value={props.value}
          placeholder={"placeholder"}
          pl={"80px"}
          {...propsForInput()}
          variant={props.variant}
          focusBorderColor={props.isInvalid ? "error.700" : "primary.700"}
          _invalid={{
            borderColor: "error.600",
            bg: "error.100",
            color: "error.600",
          }}
          fontSize={"sm"}
          rounded={"4px"}
          p={2.5}
          bg={props.bg ? props.bg : "white"}
          onChange={(e) => handleChange(e.target.value)}
        />

        <InputRightElement cursor={"pointer"}>
          <Popover placement={"bottom-end"}>
            {({ isOpen }) => (
              <>
                <PopoverTrigger>
                  <Box color={props.isInvalid ? "error.400" : "primary.400"}>
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
                <PopoverContent width={"fit-content"}>
                  <PopoverBody p={0}>
                    <StyledBox>
                      <HexColorPicker
                        color={props.value as string}
                        onChange={handleChange}
                      />
                    </StyledBox>
                  </PopoverBody>
                </PopoverContent>
              </>
            )}
          </Popover>
        </InputRightElement>
      </InputGroup>
    </FormControlLayout>
  )
}
