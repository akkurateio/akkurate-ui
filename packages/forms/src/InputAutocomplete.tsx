import {
  Box,
  FormControlOptions,
  HTMLChakraProps,
  Input,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React, { useState } from "react"
import FormControlLayout from "./FormControlLayout"
import InputGroupWithShadow from "./InputGroupWithShadow"
// @ts-ignore
import { sizesAll } from "@akkurateio/utils"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  handleChange: (e: string) => void
  value?: string
  resultsArray: string[]
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

export const AcsInputAutocomplete: React.FC<InputProps> = ({
  label,
  hint,
  error,
  isRequired,
  size = "md",
  isDisabled,
  isInvalid,
  isReadOnly,
  resultsArray,
  handleChange,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true)

  const sizeState = useBreakpointValue(typeof size === "object" ? size : {})

  const sizeInput = sizesAll(sizeState ? sizeState : (size as string))

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
      <InputGroupWithShadow
        isInvalid={isInvalid}
        height={sizeInput?.height}
        width={props.width}
        rounded={props.rounded}
      >
        <Input
          type={"text"}
          {...props}
          border={"none"}
          _focusVisible={{
            border: "none",
            boxShadow: `none`,
          }}
          height={"full"}
          rounded={props.rounded ? props.rounded : "base"}
          width={"full"}
          pl={"0.688rem"}
          pt={"0.656rem"}
          pb={"0.656rem"}
          fontSize={sizeInput?.fontSize}
          onChange={(e) => {
            if (e.target.value.length >= 3) {
              setIsVisible(true)
            }
            handleChange(e.target.value)
          }}
        />
      </InputGroupWithShadow>

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
