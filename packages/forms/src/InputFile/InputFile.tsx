import { AisClose, AisFile } from "@akkurateio/icons"
import {
  FormControlOptions,
  HTMLChakraProps,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React from "react"
import FormControlLayout from "../FormControlLayout"
import ForOne from "./ForOne"
import { formatBytes } from "@akkurateio/utils"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  value: FileList | null
  handleChange: (e: FileList | null) => void
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

export const AcsInputFile: React.FC<InputProps> = ({
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

  const [files, setFiles] = React.useState<any>([])

  console.log(files)
  return (
    <FormControlLayout {...props}>
      <InputGroup size={props.size}>
        <InputLeftElement>
          <AisFile boxSize={6} color={"gray.500"} />
        </InputLeftElement>
        <Input
          position={"relative"}
          type={"text"}
          {...propsForInput()}
          value={files
            .map(
              (file: any) => file.name + " " + formatBytes(file.size, 2) + " ",
            )
            .join(", ")}
          variant={props.variant}
          focusBorderColor={props.isInvalid ? "error.700" : "primary.700"}
          _invalid={{
            borderColor: "error.600",
            bg: "error.100",
            color: "error.600",
          }}
          px={props.px ? props.px : 3}
          bg={props.bg ? props.bg : "white"}
          onChange={(e) => console.log(e)}
          placeholder={"Ajouter un fichier"}
        />

        {props.value && props.value.length > 0 && (
          <InputRightElement zIndex={2}>
            <IconButton
              aria-label={"delete button"}
              onClick={() => handleChange(null)}
              size={"xs"}
              rounded={"full"}
            >
              <AisClose boxSize={5} color={"gray.500"} />
            </IconButton>
          </InputRightElement>
        )}
        <Input
          type={"file"}
          opacity={0}
          position={"absolute"}
          top={0}
          bottom={0}
          right={0}
          left={0}
          zIndex={1}
          cursor={"pointer"}
          accept={props.accept}
          onChange={(e) => setFiles(Array.from(e.target.files as FileList))}
          multiple={props.multiple}
        />
      </InputGroup>
    </FormControlLayout>
  )
}
