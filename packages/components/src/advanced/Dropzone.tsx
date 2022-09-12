import { AisTrash } from "@akkurateio/icons"
import {
  Box,
  Button,
  Divider,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react"
import { FunctionComponent, useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"

interface IProps {
  accept?: string
  maxFiles?: number
}

export const AcsDropzone: FunctionComponent<IProps> = ({
  accept,
  maxFiles = 1,
}: IProps) => {
  const [files, setFiles] = useState<File[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    maxFiles: maxFiles,
    noClick: true,
    noKeyboard: true,
  })

  return (
    <Box
      width={"full"}
      border={"1px dashed"}
      rounded={"md"}
      p={2}
      bg={isDragActive ? "primary.100" : undefined}
    >
      <VStack
        {...getRootProps()}
        width={"full"}
        height={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        py={12}
      >
        <input {...getInputProps()} accept={"image/jpg"} />
        <Text>Vous pouvez glisser et déposer dans cette zone.</Text>
        <Button
          onClick={open}
          colorScheme={isDragActive ? "primary" : undefined}
        >
          {files.length > 0 ? "Remplacer" : "Sélectionner"}
        </Button>

        {files && files.length > 0 && (
          <VStack
            spacing={2}
            alignItems={"flex-start"}
            divider={<Divider />}
            my={6}
          >
            {files &&
              files.length > 0 &&
              files.map((file, idx) => (
                <HStack
                  key={idx}
                  justifyContent={"space-between"}
                  width={"100%"}
                  zIndex={10}
                >
                  <Text>{file.name}</Text>
                  <IconButton
                    size={"xs"}
                    rounded={"full"}
                    aria-label="delete file"
                    onClick={() => setFiles(files.filter((f) => f !== file))}
                  >
                    <AisTrash boxSize={4} />
                  </IconButton>
                </HStack>
              ))}
          </VStack>
        )}
      </VStack>
    </Box>
  )
}