import { AisDownload, AisError, AisUploadCloud } from "@akkurateio/icons"
import {
  background,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react"
import React, { useCallback, useEffect, useState } from "react"
import { FileRejection, useDropzone } from "react-dropzone"
import ForMultiple from "./ForMultiple"
import ForOne from "./ForOne"

interface IProps {
  accept?: string
  maxFiles?: number
  height?: string
  boxSize?: string
  handleChange: (files: FileList | File[] | null) => void
  colorScheme?: string
  backgroundColor?: string
}

export const AcsDropzone: React.FC<IProps> = ({
  accept,
  height = "300px",
  maxFiles = 1,
  boxSize = "150px",
  handleChange,
  ...props
}: IProps) => {
  const [files, setFiles] = useState<File[]>([])
  const [toManyFiles, setToManyFiles] = useState(false)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (maxFiles === 1) {
        if (acceptedFiles.length === 1) {
          setFiles(acceptedFiles)
          setToManyFiles(false)
        }
      } else if (maxFiles > 1) {
        if (files.length + acceptedFiles.length <= maxFiles) {
          setFiles([...files, ...acceptedFiles])
        }
      }

    },
    [files, maxFiles],
  )

  const onDropRejected = useCallback((rejectedFiles: FileRejection[]) => {
    if (rejectedFiles.length > 0) {
      setToManyFiles(true)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive, open,  } = useDropzone({
    onDrop,
    maxFiles: maxFiles,
    noClick: true,
    noKeyboard: true,
    onDropRejected,
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
      overflow={"auto"}
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
          <VStack width={"full"} spacing={4}>
            <input {...getInputProps()} accept={"image/jpg"} />
            {!toManyFiles ? (
              <AisUploadCloud boxSize={"64px"} color={"blackAlpha.700"} />
            ) : (
              <AisError boxSize={"64px"} color={"red.600"} />
            )}

            <Box textAlign={"center"}>
              {!toManyFiles ? (
                maxFiles === 1 ? (
                  <Text>
                    Glissez / D??poser le fichier ou cliquez ci-dessous.
                  </Text>
                ) : (
                  <Text>
                    Glissez / D??poser les fichiers ou cliquez ci-dessous.
                  </Text>
                )
              ) : (
                <Text color={"red.500"}>
                  Nombre de fichier exc??de la limite autoris??e.
                </Text>
              )}
              {!toManyFiles ? (
                maxFiles > 1 ? (
                  <Text fontSize={"sm"} color={"neutral.400"}>
                    Nombre de fichier maximum autoris??s : {maxFiles}
                  </Text>
                ) : (
                  <Text fontSize={"sm"} color={"neutral.400"}>
                    Nombre de fichier maximum autoris??s : {maxFiles}
                  </Text>
                )
              ) : (
                <Text fontSize={"sm"} color={"neutral.400"}>
                  Nombre de fichiers maximum autoris??s : {maxFiles}
                </Text>
              )}
            </Box>
            <Button
              onClick={open}
              colorScheme={isDragActive ? "primary" : "neutral"}
              backgroundColor={
                props.backgroundColor ? props.backgroundColor : "primary.500"
              }
            >
              {toManyFiles ? (
                <HStack>
                  <AisDownload boxSize={"24px"} />
                  <Text>R??essayer</Text>
                </HStack>
              ) : (
                <HStack>
                  <AisDownload boxSize={"24px"} />
                  <Text>
                    {files.length > 0 ? "Remplacer" : "Importer un fichier"}
                  </Text>
                </HStack>
              )}
            </Button>
          </VStack>
        )}

        {files.length > 0 && (
          <>
            {maxFiles > 1 && files.length <= maxFiles ? (
                <VStack spacing={4}>
              <HStack alignItems={"flex-start"} width={"full"}>
                {files.map((file, idx) => (
                  <ForMultiple
                    key={idx}
                    file={file}
                    onDelete={() => setFiles(files.filter((f) => f !== file))}
                    boxSize={boxSize}
                    height={height}
                  />
                ))}
              </HStack>
                  <HStack>
                   <Button
                      onClick={open}
                      colorScheme={isDragActive ? "primary" : "neutral"}
                      backgroundColor={
                        props.backgroundColor ? props.backgroundColor : "primary.500"
                      }>
                    <AisDownload boxSize={"24px"} /><Text ml={2} >Importer un nouveau fichier</Text>
                  </Button>
                  </HStack>
                </VStack>
            ) : (
              <VStack spacing={2} divider={<Divider />} my={6} width={"full"}>
                {files.map((file, idx) => (
                  <ForOne
                    key={idx}
                    file={file}
                    onDelete={() => setFiles(files.filter((f) => f !== file))}
                    boxSize={boxSize}
                    height={height}
                  />
                ))}
              </VStack>
            )}
          </>
        )}
      </Flex>
    </Box>
  )
}
