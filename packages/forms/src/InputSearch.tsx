import { AisClose, AisSearch } from "@akkurateio/icons"
import {
  FormControlOptions,
  HTMLChakraProps,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import { FunctionComponent } from "react"
import FormControlLayout from "./FormControlLayout"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  value?: string
  handleChange: (e: string) => void
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

export const AcsInputSearch: FunctionComponent<InputProps> = ({
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
        <InputLeftElement color={"gray.400"}>
          <AisSearch boxSize={6} />
        </InputLeftElement>
        <Input
          type={"text"}
          {...propsForInput()}
          variant={props.variant}
          focusBorderColor={props.isInvalid ? "error.700" : "primary.700"}
          _invalid={{
            borderColor: "error.600",
            bg: "error.100",
            color: "error.600",
          }}
          px={props.px ? props.px : 3}
          bg={props.bg ? props.bg : "white"}
          onChange={(e) => handleChange(e.target.value)}
        />
        {props.value && props.value.length > 0 && (
          <InputRightElement>
            <IconButton
              aria-label="Close"
              rounded={"full"}
              size={"xs"}
              color={"white"}
              colorScheme={"gray"}
            >
              <AisClose boxSize={5} onClick={() => handleChange("")} />
            </IconButton>
          </InputRightElement>
        )}
      </InputGroup>
    </FormControlLayout>
  )
}
