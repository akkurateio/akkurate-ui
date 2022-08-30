import { AisCheckmark, AisPencil } from "@akkurateio/icons"
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
import { FunctionComponent } from "react"
import { HexColorPicker } from "react-colorful"
import "../css/hexacolor.css"
import FormControlLayout from "./FormControlLayout"

type Omitted = "disabled" | "required" | "readOnly" | "size"

interface InputOptions {
  onColorChange: (e: string) => void
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

export const InputColor: FunctionComponent<InputProps> = (props) => {
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
          px={props.px ? props.px : 3}
          bg={props.bg ? props.bg : "white"}
          onChange={(e) => props.onColorChange(e.target.value)}
        />

        <InputRightElement>
          <Popover placement={"bottom-end"}>
            {({ isOpen }) => (
              <>
                <PopoverTrigger>
                  <Box color={props.isInvalid ? "error.400" : "primary.400"}>
                    {isOpen ? (
                      props.iconOpen ? (
                        props.iconOpen
                      ) : (
                        <AisCheckmark w={8} h={8} />
                      )
                    ) : props.iconClose ? (
                      props.iconClose
                    ) : (
                      <AisPencil w={7} h={7} />
                    )}
                  </Box>
                </PopoverTrigger>
                <PopoverContent width={"fit-content"}>
                  <PopoverBody p={0}>
                    <HexColorPicker
                      color={props.value as string}
                      onChange={props.onColorChange}
                    />
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
