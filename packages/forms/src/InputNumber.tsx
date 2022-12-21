import { AisAdd, AisSubstract } from "@akkurateio/icons"
import {
  Button,
  FormControlOptions,
  HStack,
  HTMLChakraProps,
  Input,
  InputLeftElement,
  InputRightElement,
  useNumberInput,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React, { useEffect, useState } from "react"
import FormControlLayout from "./FormControlLayout"
import InputGroupWithShadow from "./InputGroupWithShadow"

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

export const AcsInputNumber: React.FC<InputProps> = ({
  handleChange,
  height,
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
        <InputGroupWithShadow
          isInvalid={props.isInvalid}
          width={props.width}
          height={height}
        >
          <InputLeftElement
            color={
              props.isInvalid
                ? "red.500"
                : focus
                ? "primary.500"
                : "neutral.500"
            }
            height={"full"}
            pl={"0.5rem"}
            pt={"0.438rem"}
            pb={"0.5rem"}
          >
            <Button textAlign={"left"} {...dec} variant={"unstyled"}>
              <AisSubstract boxSize={"24px"} />
            </Button>
          </InputLeftElement>
          <Input
            {...input}
            variant={props.variant}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            textAlign={"center"}
            fontSize={props.fontSize || "sm"}
            border={"none"}
            height={"full"}
            rounded={"base"}
          />
          <InputRightElement
            height={"full"}
            color={
              props.isInvalid
                ? "red.500"
                : focus
                ? "primary.500"
                : "neutral.500"
            }
            pt={"0.438rem"}
            pb={"0.438rem"}
            pr={"0.5rem"}
          >
            <Button
              width={"fit-content"}
              {...inc}
              variant={"unstyled"}
              textAlign={"right"}
            >
              <AisAdd boxSize={"24px"} />
            </Button>
          </InputRightElement>
        </InputGroupWithShadow>
      </HStack>
    </FormControlLayout>
  )
}
