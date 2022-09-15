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
import { FunctionComponent, useEffect } from "react"
import FormControlLayout from "./FormControlLayout"

type Omitted =
  | "disabled"
  | "required"
  | "readOnly"
  | "size"
  | "selectionStart"
  | "value"

interface InputOptions {
  handleChange: (e: string | number) => void
  value?: string | number
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

export const AcsInputNumber: FunctionComponent<InputProps> = ({
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
    }
    else if (valueAsNumber === 0) {
      handleChange(Number('0'))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueAsNumber])




  return (
    <FormControlLayout {...props}>
      <HStack>
        <InputGroup size={props.size}>
          <InputLeftElement
            color={props.isInvalid ? "error.600" : "primary.500"}
            borderRight={"1px solid"}
            borderColor={props.isInvalid ? "error.600" : "gray.200"}
          >
            <Button {...dec} variant={"unstyled"}>
              <AisSubstract boxSize={6} />
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
            px={props.px ? props.px : 3}
            bg={props.bg ? props.bg : "white"}
          />
          <InputRightElement
            color={props.isInvalid ? "error.600" : "primary.500"}
            borderLeft={"1px solid"}
            borderColor={props.isInvalid ? "error.600" : "gray.200"}
            _focus={{
              borderColor: "primary.700",
            }}
          >
            <Button {...inc} variant={"unstyled"}>
              <AisAdd boxSize={6} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </HStack>
    </FormControlLayout>
  )
}
