import { AisEye, AisEyeClosed } from "@akkurateio/icons"
import {
  FormControlOptions,
  HTMLChakraProps,
  Input,
  InputGroup,
  InputRightElement,
  ThemingProps,
} from "@chakra-ui/react"
import { FunctionComponent, useState } from "react"
import FormControlLayout from "./FormControlLayout"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  handleChange: (e: string) => void
  value: string
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

export const AcsInputPassword: FunctionComponent<InputProps> = ({
  handleChange,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

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
        <Input
          type={showPassword ? "text" : "password"}
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

        <InputRightElement
          cursor={"pointer"}
          onClick={() => setShowPassword(!showPassword)}
          color={props.isInvalid ? "error.400" : "primary.400"}
        >
          {showPassword ? (
            props.iconOpen ? (
              props.iconOpen
            ) : (
              <AisEye w={8} h={8} />
            )
          ) : props.iconClose ? (
            props.iconClose
          ) : (
            <AisEyeClosed w={8} h={8} />
          )}
        </InputRightElement>
      </InputGroup>
    </FormControlLayout>
  )
}
