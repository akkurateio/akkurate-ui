import { AcsDropzone, AisClose } from "@akkurateio/ds"
import { Button, HStack, IconButton, Text, VStack } from "@chakra-ui/react"
import { FunctionComponent, useState } from "react"
import { NovelEditor } from "@akkurateio/novel"

interface IProps {
  value: string
  setValue: (value: string) => void
  handleUpload?: (file: File) => { url: string } | Promise<{ url: string }>
  setFiles?: (files: any) => void
  simpleBar?: boolean
  isInvalid?: boolean
  isHtml?: boolean
  label?: string
  closeDropzone?: boolean
  bgSecondary?: boolean
  withFileButton?: boolean
}

const CustomWysiwyg: FunctionComponent<IProps> = ({
  value,
  setValue,
  setFiles,
  handleUpload,
  isHtml,
  isInvalid,
  withFileButton = true,
}) => {
  const [isDropzoneOpen, setIsDropzoneOpen] = useState<boolean>(false)

  return (
    <VStack width={"full"} alignItems={"flex-start"}>
      <NovelEditor
        value={value}
        setValue={setValue}
        handleUpload={handleUpload}
        p={0}
        shadow={"none"}
        border={"1px solid"}
        borderColor={isInvalid ? "red.500" : "gray.200"}
        bg={isInvalid ? "red.50" : "inherit"}
        mode={isHtml ? "html" : "markdown"}
        height={"200px"}
        rounded={"base"}
      />

      {withFileButton && (
        <Button
          onClick={() => setIsDropzoneOpen(!isDropzoneOpen)}
          variant={"ghost"}
          size={"xs"}
        >
          Joindre un fichier
        </Button>
      )}

      {!!setFiles && isDropzoneOpen && (
        <VStack width={"full"}>
          <HStack width={"full"} justifyContent={"space-between"}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              Importez vos fichiers
            </Text>

            <IconButton
              rounded={"base"}
              variant={"ghost"}
              aria-label={"close"}
              icon={<AisClose boxSize={"16px"} />}
              size={"xs"}
              onClick={() => setIsDropzoneOpen(false)}
            />
          </HStack>
          <AcsDropzone handleChange={setFiles} maxFiles={5} maxFilesSize={6} />
        </VStack>
      )}
    </VStack>
  )
}

export default CustomWysiwyg
