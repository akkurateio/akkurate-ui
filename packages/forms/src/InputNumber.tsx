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
import { FunctionComponent } from "react"
import FormControlLayout from "./molecules/FormControlLayout"

type Omitted = "disabled" | "required" | "readOnly" | "size"

interface InputOptions {
  onNumberChange: (e: string | number) => void
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

export const InputNumber: FunctionComponent<InputProps> = (props) => {
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

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 0.01,
      defaultValue: 1.53,
      precision: 2,
      allowMouseWheel: true,
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

  return (
    <FormControlLayout {...props}>
      <HStack>
        <InputGroup>
          <InputLeftElement>
            <Button {...dec} variant={"unstyled"}>
              <AisSubstract />
            </Button>
          </InputLeftElement>
          <Input {...input} />
          <InputRightElement>
            <Button {...inc} variant={"unstyled"}>
              <AisAdd />
            </Button>
          </InputRightElement>
        </InputGroup>
      </HStack>
    </FormControlLayout>
  )
}
