import { AisClose, AisFile } from "@akkurateio/icons"
import {
  FormControlOptions,
  HTMLChakraProps,
  IconButton,
  Input,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React, { useEffect, useState } from "react"
import FormControlLayout from "../FormControlLayout"
import InputGroupWithShadow from "../InputGroupWithShadow"

type Omitted = "disabled" | "required" | "readOnly" | "size" | "value"

interface InputOptions {
  value: FileList | null
  handleChange: (e: FileList | null) => void
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

  const handleDelete = () => {
    handleChange(null)
    setFiles([])
  }

  const [files, setFiles] = useState<any>([])

  useEffect(() => {
    handleChange(files)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files])

  const formatBytes = (bytes: number, decimals: number): string => {
    const k = 1000 // or 1024 for binary
    const dm = decimals || 2
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  return (
    <FormControlLayout {...props}>
      <InputGroupWithShadow
        width={props.width}
        height={props.height}
        isInvalid={props.isInvalid}
      >
        <InputLeftElement height={"full"}>
          <AisFile boxSize={"24px"} color={"neutral.500"} />
        </InputLeftElement>
        <Input
          height={"full"}
          position={"relative"}
          type={"text"}
          {...propsForInput()}
          value={files
            .map(
              (file: any) => file.name + " " + formatBytes(file.size, 2) + " ",
            )
            .join(", ")}
          variant={props.variant}
          border={"none"}
          _focusVisible={{
            border: "none",
            boxShadow: `none`,
          }}
          px={props.px ? props.px : 3}
          bg={props.bg ? props.bg : "white"}
          onChange={(e) => console.log(e)}
          placeholder={"Ajouter un fichier"}
        />

        {props.value && props.value.length > 0 && (
          <InputRightElement zIndex={2} height={"full"}>
            <IconButton
              aria-label="Close"
              onClick={handleDelete}
              variant={"ghost"}
              cursor={"pointer"}
              color={"white"}
              backgroundColor={"neutral.500"}
              rounded={"full"}
              size={"24px"}
            >
              <AisClose boxSize={"24px"}/>
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
      </InputGroupWithShadow>
    </FormControlLayout>
  )
}
