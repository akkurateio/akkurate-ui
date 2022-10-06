import React, {useCallback, useEffect, useState} from "react"
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useDropzone } from "react-dropzone"
import ForMultiple from "./ForMultiple"
import ForOne from "./ForOne"

interface IProps {
  accept?: string
  maxFiles?: number
  height?: string
  boxSize?: string
  handleChange: (files: FileList | File[] | null) => void
}

export const AcsDropzone: React.FC<IProps> = ({
  accept,
  height = "250px",
  maxFiles = 1,
  boxSize = "150px",
  handleChange,
}: IProps) => {
  const [files, setFiles] = useState<File[]>([])

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (maxFiles === 1) {
        if (acceptedFiles.length === 1) {
          setFiles(acceptedFiles)
        }
      } else if (maxFiles > 1) {
        if (files.length + acceptedFiles.length <= maxFiles) {
          setFiles([...files, ...acceptedFiles])
        }
      }
    },
    [files, maxFiles],
  )
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    maxFiles: maxFiles,
    noClick: true,
    noKeyboard: true,
  })

  useEffect(() => {
    handleChange(files)

  }, [files])

  return (
    <Box
      width={"full"}
      border={"1px dashed"}
      rounded={"md"}
      p={2}
      bg={isDragActive ? "primary.100" : undefined}
      height={height}
      minHeight={"250px"}
      overflow={"scroll"}
    >
      <Flex
        {...getRootProps()}
        width={"full"}
        height={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        py={12}
      >
        {files.length === 0 && (
          <Box>
            <input {...getInputProps()} accept={"image/jpg"} />
            <Text>Vous pouvez glisser et déposer dans cette zone.</Text>
            <Button
              onClick={open}
              colorScheme={isDragActive ? "primary" : undefined}
              marginLeft={24}
            >
              {files.length > 0 ? "Remplacer" : "Sélectionner"}
            </Button>
          </Box>
        )}

        {files.length > 0 && (
          <>
            {maxFiles > 1 ? (
              <HStack alignItems={"flex-start"} width={"full"}>
                {files.map((file, idx) => (
                  <Box>
                    <ForMultiple
                        key={idx}
                      file={file}
                      onDelete={() => setFiles(files.filter((f) => f !== file))}
                      boxSize={boxSize}
                      height={height}
                    />
                  </Box>
                ))}
              </HStack>
            ) : (
              <VStack spacing={2} divider={<Divider />} my={6} width={"full"}>
                {files.map((file, idx) => (
                  <>
                    <ForOne
                        key={idx}
                      file={file}
                      onDelete={() => setFiles(files.filter((f) => f !== file))}
                      boxSize={boxSize}
                      height={height}
                    />
                  </>
                ))}
              </VStack>
            )}
          </>
        )}
      </Flex>
      {maxFiles > 1 && (
        <Text position={"absolute"} right={"15%"}>
          {files.length} / {maxFiles}
        </Text>
      )}
    </Box>
  )
}
