import React, { useCallback, useEffect, useState } from "react"
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { FileRejection, useDropzone } from "react-dropzone"
import ForMultiple from "./ForMultiple"
import ForOne from "./ForOne"
import { AisDownload, AisError, AisUploadCloud } from "@akkurateio/icons"
import { Simulate } from "react-dom/test-utils"
import waiting = Simulate.waiting

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
  height = "250px",
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
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    maxFiles: maxFiles,
    noClick: true,
    noKeyboard: true,
    onDropRejected,
  })
  console.log(toManyFiles)

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
          <Box textAlign={"center"}>
            <input {...getInputProps()} accept={"image/jpg"} />
            {!toManyFiles ? (
              <AisUploadCloud boxSize={"64px"} color={"blackAlpha.700"} />
            ) : (
              <AisError boxSize={"64px"} color={"red.600"} />
            )}
            {!toManyFiles ? (
              maxFiles === 1 ? (
                <Text marginTop={"32px"}>
                  Glissez / Déposer le fichier ou cliquez ci-dessous.
                </Text>
              ) : (
                <Text marginTop={"32px"}>
                  Glissez / Déposer les fichiers ou cliquez ci-dessous.
                </Text>
              )
            ) : (
              <Text color={"red.500"}>
                Nombre de fichier excède la limite autorisée.
              </Text>
            )}
            {!toManyFiles ? (
              maxFiles > 1 ? (
                <Text fontSize={"sm"} color={"neutral.400"} marginTop={"4px"}>
                  Nombre de fichier maximum autorisés : {maxFiles}
                </Text>
              ) : (
                <Text fontSize={"sm"} color={"neutral.400"} marginTop={"4px"}>
                  Nombre de fichier maximum autorisés : {maxFiles}
                </Text>
              )
            ) : (
              <Text fontSize={"sm"} color={"neutral.400"} marginTop={"4px"}>
                Nombre de fichiers maximum autorisés : {maxFiles}
              </Text>
            )}
            <Button
              onClick={open}
              colorScheme={isDragActive ? "primary" : "neutral"}
              paddingLeft={1}
              backgroundColor={
                props.backgroundColor ? props.backgroundColor : "primary.500"
              }
              marginTop={"4px"}
            >
              {toManyFiles ? (
                <>
                  <AisDownload boxSize={"24px"} marginBottom={2} />
                  <Text paddingLeft={3}>Réessayer</Text>
                </>
              ) : (
                <>
                  <AisDownload boxSize={"24px"} marginBottom={2} />
                  <Text paddingLeft={3}>
                    {files.length > 0 ? "Remplacer" : "Importer un fichier"}
                  </Text>
                </>
              )}
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
    </Box>
  )
}
