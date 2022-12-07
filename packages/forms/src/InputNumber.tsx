import { AisAdd, AisSubstract } from "@akkurateio/icons"
import {
  Button,
  FormControlOptions,
  HStack,
  HTMLChakraProps,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useNumberInput,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React, { useEffect } from "react"
import FormControlLayout from "./FormControlLayout"

type Omitted =
  | "disabled"
  | "required"
  | "readOnly"
  | "size"
  | "selectionStart"
  | "value"

interface InputOptions {
  handleChange: (e: number) => void
  value?: number
  focusBorderColor?: string
  errorBorderColor?: string
  htmlSize?: number
  label?: string
  error?: string
  hint?: string
  precision?: number
  allowMouseWheel?: boolean
}

export interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    ThemingProps<"NumberInput">,
    FormControlOptions {}

// @TODO: Ne fonctionne pas

export const AcsInputNumber: React.FC<InputProps> = ({
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

  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    valueAsNumber,
  } = useNumberInput({
    step: props.step ? Number(props.step) : undefined,
    precision: props.precision ? props.precision : undefined,
    allowMouseWheel: props.allowMouseWheel ? props.allowMouseWheel : false,
    min: props.min ? Number(props.min) : undefined,
    max: props.max ? Number(props.max) : undefined,
    defaultValue: props.value === undefined ? undefined : Number(props.value),
    format: (value) => {
      return value.toString().replace(",", ".")
    },
    isValidCharacter: (char) =>
      char === "." ||
      char === "," ||
      char === "-" ||
      char === "+" ||
      char === "0" ||
      char === "1" ||
      char === "2" ||
      char === "3" ||
      char === "4" ||
      char === "5" ||
      char === "6" ||
      char === "7" ||
      char === "8" ||
      char === "9",
  })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  useEffect(() => {
    if (!!valueAsNumber) {
      handleChange(valueAsNumber)
    } else if (valueAsNumber === 0) {
      handleChange(0)
    }
  }, [valueAsNumber])

  return (
    <FormControlLayout {...props}>
      <HStack>
        <InputGroup size={props.size}>
          <InputLeftElement
            color={props.isInvalid ? "error.600" : "primary.500"}
            borderColor={props.isInvalid ? "error.600" : "gray.200"}
          >
            <Button {...dec} variant={"unstyled"}>
              <AisSubstract boxSize={"16px"} />
            </Button>
          </InputLeftElement>
          <Input
            {...input}
            variant={props.variant}
            focusBorderColor={props.isInvalid ? "error.700" : "primary.700"}
            _invalid={{
              borderColor: "error.600",
              bg: "error.100",
              color: "error.600",
            }}
            textAlign={"center"}
            fontSize={"sm"}
            rounded={"4px"}
            p={2.5}
            bg={props.bg ? props.bg : "white"}
          />
          <InputRightElement
            color={props.isInvalid ? "error.600" : "primary.500"}
            borderColor={props.isInvalid ? "error.600" : "gray.200"}
            _focus={{
              borderColor: "primary.700",
            }}
          >
            <Button {...inc} variant={"unstyled"}>
              <AisAdd boxSize={"16px"} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </HStack>
    </FormControlLayout>
  )
}
