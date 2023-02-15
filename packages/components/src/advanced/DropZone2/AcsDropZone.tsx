import React, { useCallback, useEffect, useState } from "react"
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import { useDropzone } from "react-dropzone"
import { AisDownload, AisError, AisUploadCloud } from "@akkurateio/icons"
import DisplayFile from "./DisplayFile"

interface Iprops {
  handleChange: (files: FileList | File[] | null) => void
  accept?: string
  maxFiles?: number
  backgroundColor?: string
  boxSize?: string
  height?: string
  clear?: boolean
  minHeight?: string
}

export const AcsDropzone: React.FC<Iprops> = ({
  handleChange,
  accept,
  maxFiles = 0,
  minHeight = "300px",
  height = "350px",
  boxSize = "150px",
  ...props
}: Iprops) => {
  const [files, setFiles] = useState<File[]>([])
  const [toManyFiles, setToManyFiles] = useState(false)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (maxFiles === 1) {
        setFiles(acceptedFiles.slice(0, 1))
        setToManyFiles(acceptedFiles.length > 1)
      } else {
        if (acceptedFiles.length + files.length <= maxFiles) {
          setFiles([...files, ...acceptedFiles])
        } else {
          setToManyFiles(true)
          setFiles([
            ...files,
            ...acceptedFiles.slice(0, maxFiles - files.length),
          ])
        }
      }
    },
    [files, maxFiles, toManyFiles],
  )

  const screenSize = useBreakpointValue({ base: "base", md: "md" })

  useEffect(() => {
    if (props.clear === true) {
      setFiles([])
    }
  }, [props.clear])

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    onDropAccepted: () => {
      handleChange(files)
    },
  })

  useEffect(() => {
    handleChange(files)
  }, [files])

  return (
    <Box
      border={"1px dashed"}
      minHeight={minHeight}
      height={height}
      width={"full"}
      p={{ base: 4, md: 4 }}
      pb={{ base: toManyFiles ? 2 : 4, md: 4 }}
    >
      <Flex {...getRootProps()} width={"full"} h={"full"}>
        {files.length === 0 ? (
          <VStack
            w={"full"}
            h={"full"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <AisUploadCloud boxSize={"64px"} color={"blackAlpha.700"} />
            <Box textAlign={"center"}>
              {maxFiles === 1 ? (
                <Text fontSize={"sm"}>
                  Glissez / Déposez le fichier ou cliquez ci-dessous.
                </Text>
              ) : (
                <Text fontSize={"sm"}>
                  Glissez / Déposez les fichiers ou cliquez ci-dessous.
                </Text>
              )}
              <Text fontSize={"xs"} color={"neutral.400"}>
                Nombre de fichiers maximum autorisés : {maxFiles}
              </Text>
            </Box>
            <Button
              onClick={open}
              size={"sm"}
              colorScheme={isDragActive ? "primary" : "neutral"}
              backgroundColor={
                props.backgroundColor ? props.backgroundColor : "primary.500"
              }
            >
              <HStack>
                <AisDownload boxSize={"16px"} />
                <Text fontSize={"sm"}>Importer de nouveau fichier</Text>
              </HStack>
            </Button>
          </VStack>
        ) : (
          <>
            <input {...getInputProps()} />
            <VStack spacing={4} h={"full"} width={"full"}>
              {toManyFiles ? (
                <HStack
                  w={"full"}
                  h={"50px"}
                  backgroundColor={"red.50"}
                  borderLeftWidth={"2px"}
                  borderColor={"red.500"}
                >
                  <AisError boxSize={"18px"} color={"red.500"} ml={4} />
                  <Text fontSize={"sm"} color={"red.500"}>
                    Vous ne pouvez pas charger plus de {maxFiles} fichiers
                  </Text>
                </HStack>
              ) : null}
              <VStack
                w={"full"}
                overflow={"auto"}
                alignItems={"flex-start"}
                divider={<Divider />}
                h={toManyFiles ? "calc(100% - 120px)" : "100%"}
              >
                <VStack w={"full"} divider={<Divider />}>
                  {files.map((file, idx) => (
                    <DisplayFile
                      key={idx}
                      file={file}
                      onDelete={() => setFiles(files.filter((f) => f !== file))}
                    />
                  ))}
                </VStack>
              </VStack>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                w={"full"}
                experimental_spaceX={{ base: 2, md: 0 }}
              >
                <Button
                  size={"xs"}
                  onClick={() => {
                    setFiles([])
                    setToManyFiles(false)
                  }}
                >
                  <Text>Supprimer les {files.length} fichiers</Text>
                </Button>
                <Button
                  size={"xs"}
                  onClick={open}
                  colorScheme={isDragActive ? "primary" : "neutral"}
                  backgroundColor={
                    props.backgroundColor
                      ? props.backgroundColor
                      : "primary.500"
                  }
                  disabled={toManyFiles}
                >
                  <AisDownload boxSize={"16px"} />
                  <Text>
                    {screenSize === "base"
                      ? "Importer des fichiers"
                      : "Importer un nouveau fichier"}
                  </Text>
                </Button>
              </Flex>
            </VStack>
          </>
        )}
      </Flex>
    </Box>
  )
}
