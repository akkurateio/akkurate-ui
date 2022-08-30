import {
  Box,
  FormControlOptions,
  HTMLChakraProps,
  Input,
  InputGroup,
  VStack,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import { FunctionComponent, useEffect, useState } from "react"
import FormControlLayout from "./FormControlLayout"

type Omitted = "disabled" | "required" | "readOnly" | "size"

interface InputOptions {
  onTextChange: (e: string) => void
  wordsArray: string[]
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

export const InputSearch: FunctionComponent<InputProps> = ({
  label,
  hint,
  error,
  isRequired,
  isDisabled,
  isInvalid,
  isReadOnly,
  size,
  wordsArray,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (props.value && String(props.value).length >= 3) {
      setIsVisible(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value])

  console.log(isVisible)

  return (
    <FormControlLayout {...props}>
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
          px={props.px ? props.px : 3}
          bg={props.bg ? props.bg : "white"}
          onChange={(e) => props.onTextChange(e.target.value)}
        />
      </InputGroup>

      {isVisible &&
        wordsArray.length > 0 &&
        props.value &&
        String(props.value).length >= 3 && (
          <VStack
            bg={"white"}
            spacing={1}
            alignItems={"flex-start"}
            border={"1px solid"}
            borderColor={"primary.500"}
          >
            {
              // show the first 10 results of the search
              wordsArray
                .filter((word) =>
                  word
                    .toLowerCase()
                    .includes(String(props.value).toLowerCase()),
                )
                .slice(0, 10)
                .map((word, idx) => (
                  <Box
                    key={idx}
                    bg={"gray.100"}
                    width={"full"}
                    px={3}
                    cursor={"pointer"}
                    onClick={() => {
                      props.onTextChange(word)
                      setIsVisible(false)
                    }}
                  >
                    {word}
                  </Box>
                ))
            }
          </VStack>
        )}
    </FormControlLayout>
  )
}
