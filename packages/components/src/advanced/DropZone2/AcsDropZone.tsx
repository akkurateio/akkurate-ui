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
import { useDropzone } from "react-dropzone"
import ForMultiple from "../Dropzone/ForMultiple"
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
  maxFilesSize?: number
}

export const AcsDropzone2: React.FC<Iprops> = ({
  handleChange,
  accept,
  maxFiles = 0,
  minHeight = "300px",
  height = "300px",
  boxSize = "150px",
  maxFilesSize = 0,
  ...props
}: Iprops) => {
  const [files, setFiles] = useState<File[]>([])
  const [toManyFiles, setToManyFiles] = useState(false)
  const [toManyFilesSize, setToManyFilesSize] = useState(false)

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
        }
      }
    },
    [files, maxFiles, toManyFiles],
  )

  const maxSizes = maxFilesSize ? maxFilesSize * (1024 * 1024) : 0

  useEffect(() => {
    if (props.clear === true) {
      setFiles([])
    }
  }, [props.clear])

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    maxFiles: maxFiles,
    onDropAccepted: () => {
      handleChange(files)
    },
    onDropRejected: (rejectedFiles) => {
      if (rejectedFiles.length > 0) {
        setToManyFilesSize(true)
      } else {
        setToManyFilesSize(false)
      }
    },
    maxSize: maxSizes,
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
    >
      <Flex {...getRootProps()} width={"full"} py={12} h={"full"}>
        {files.length === 0 ? (
          <VStack
            w={"full"}
            h={"full"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <input {...getInputProps()} />
            {toManyFiles || toManyFilesSize ? (
              <>
                {toManyFiles ? (
                  <>
                    <AisError boxSize={"64px"} color={"red.600"} />
                    <Box>
                      <Text fontSize={"sm"} color={"red.500"}>
                        Nombre de fichier excède la limite autorisée.
                      </Text>
                      <Text fontSize={"xs"} color={"neutral.400"}>
                        Nombre de fichiers maximum autorisés : {maxFiles}
                      </Text>
                    </Box>
                  </>
                ) : (
                  <>
                    <AisError boxSize={"64px"} color={"red.600"} />
                    <Box>
                      <Text fontSize={"sm"} color={"red.500"}>
                        Taille de fichier excède la limite autorisée.
                      </Text>
                      <Text fontSize={"xs"} color={"neutral.400"}>
                        Taille maximal par fichiers autorisée : {maxFilesSize}{" "}
                        Mo
                      </Text>
                    </Box>
                  </>
                )}
                <HStack>
                  <Button
                    colorScheme={"neutral"}
                    variant={"outline"}
                    onClick={() => {
                      setFiles([])
                      setToManyFiles(false)
                      setToManyFilesSize(false)
                    }}
                    size={"sm"}
                  >
                    Annuler
                  </Button>

                  <Button
                    onClick={() => {
                      setToManyFilesSize(false)
                      open()
                    }}
                    size={"sm"}
                    colorScheme={isDragActive ? "primary" : "neutral"}
                    backgroundColor={
                      props.backgroundColor
                        ? props.backgroundColor
                        : "primary.500"
                    }
                  >
                    <HStack>
                      <AisDownload boxSize={"24px"} />
                      <Text>Réessayer</Text>
                    </HStack>
                  </Button>
                </HStack>
              </>
            ) : (
              <>
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
                  {maxFilesSize && (
                    <Text fontSize={"xs"} color={"neutral.400"}>
                      Taille maximal par fichiers autorisée : {maxFilesSize} Mo
                    </Text>
                  )}
                </Box>
                <Button
                  onClick={open}
                  size={"sm"}
                  colorScheme={isDragActive ? "primary" : "neutral"}
                  backgroundColor={
                    props.backgroundColor
                      ? props.backgroundColor
                      : "primary.500"
                  }
                >
                  <HStack>
                    <AisDownload boxSize={"16px"} />
                    <Text fontSize={"sm"}>Importer de nouveau fichier</Text>
                  </HStack>
                </Button>
              </>
            )}
          </VStack>
        ) : toManyFilesSize || toManyFiles ? (
          <VStack
            w={"full"}
            h={"full"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {toManyFiles ? (
              <>
                <AisError boxSize={"64px"} color={"red.600"} />
                <Box>
                  <Text fontSize={"sm"} color={"red.500"}>
                    Nombre de fichier excède la limite autorisée.
                  </Text>
                  <Text fontSize={"xs"} color={"neutral.400"}>
                    Nombre de fichiers maximum autorisés : {maxFiles}
                  </Text>
                </Box>
              </>
            ) : (
              <>
                <AisError boxSize={"64px"} color={"red.600"} />
                <Box>
                  <Text fontSize={"sm"} color={"red.500"}>
                    Taille de fichier excède la limite autorisée.
                  </Text>
                  <Text fontSize={"xs"} color={"neutral.400"}>
                    Taille de fichier maximum autorisée : {maxFilesSize} Mo
                  </Text>
                </Box>
              </>
            )}
            <HStack>
              <Button
                colorScheme={"neutral"}
                variant={"outline"}
                onClick={() => {
                  setFiles([])
                  setToManyFiles(false)
                  setToManyFilesSize(false)
                }}
                size={"sm"}
              >
                Annuler
              </Button>

              <Button
                onClick={() => {
                  setToManyFilesSize(false)
                  open()
                }}
                size={"sm"}
                colorScheme={isDragActive ? "primary" : "neutral"}
                backgroundColor={
                  props.backgroundColor ? props.backgroundColor : "primary.500"
                }
              >
                <HStack>
                  <AisDownload boxSize={"24px"} />
                  <Text>Réessayer</Text>
                </HStack>
              </Button>
            </HStack>
          </VStack>
        ) : (
          <VStack spacing={4} h={"full"} width={"full"}>
            <VStack
              w={"full"}
              overflow={"auto"}
              h={"full"}
              alignItems={"flex-start"}
              p={2}
              divider={<Divider />}
            >
              {files.map((file, idx) => (
                <DisplayFile
                  key={idx}
                  file={file}
                  onDelete={() => setFiles(files.filter((f) => f !== file))}
                />
              ))}
            </VStack>
            <HStack>
              <Button
                size={"sm"}
                onClick={open}
                colorScheme={isDragActive ? "primary" : "neutral"}
                backgroundColor={
                  props.backgroundColor ? props.backgroundColor : "primary.500"
                }
              >
                <AisDownload boxSize={"16px"} />
                {files.length < maxFiles ? (
                  <Text ml={2}>Importer un nouveau fichier</Text>
                ) : (
                  <Text ml={2}>Remplacer les fichiers</Text>
                )}
              </Button>
            </HStack>
          </VStack>
        )}
      </Flex>
    </Box>
  )
}
