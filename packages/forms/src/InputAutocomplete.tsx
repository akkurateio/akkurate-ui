import React, { useState } from "react"
import {
  Box,
  FormControlOptions,
  HTMLChakraProps,
  Input,
  InputGroup,
  VStack,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import FormControlLayout from "./FormControlLayout"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  handleChange: (e: string) => void
  value?: string
  resultsArray: string[]
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

export const AcsInputAutocomplete: React.FC<InputProps> = ({
  label,
  hint,
  error,
  isRequired,
  isDisabled,
  isInvalid,
  isReadOnly,
  size,
  resultsArray,
  handleChange,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <FormControlLayout
      label={label}
      hint={hint}
      error={error}
      isRequired={isRequired}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
    >
      <InputGroup size={size}>
        <Input
          type={"text"}
          {...props}
          focusBorderColor={isInvalid ? "error.700" : "primary.700"}
          _invalid={{
            borderColor: "error.600",
            bg: "error.100",
            color: "error.600",
          }}
          fontSize={"sm"}
          rounded={"4px"}
          p={2.5}
          bg={props.bg ? props.bg : "white"}
          onChange={(e) => {
            if (e.target.value.length >= 3) {
              setIsVisible(true)
            }
            handleChange(e.target.value)
          }}
        />
      </InputGroup>

      {isVisible &&
        resultsArray.length > 0 &&
        props.value &&
        String(props.value).length >= 3 && (
          <VStack
            bg={"white"}
            spacing={1}
            alignItems={"flex-start"}
            borderTop={0}
            borderBottomLeftRadius={4}
            borderBottomRightRadius={4}
          >
            {
              // show the first 10 results of the search
              resultsArray
                .filter((result) =>
                  result
                    .toLowerCase()
                    .includes(String(props.value).toLowerCase()),
                )
                .slice(0, 10)
                .map((result, idx) => (
                  <Box
                    key={idx}
                    bg={"gray.100"}
                    width={"full"}
                    px={3}
                    cursor={"pointer"}
                    onClick={() => {
                      handleChange(result)
                      setIsVisible(false)
                    }}
                  >
                    {result}
                  </Box>
                ))
            }
          </VStack>
        )}
    </FormControlLayout>
  )
}
