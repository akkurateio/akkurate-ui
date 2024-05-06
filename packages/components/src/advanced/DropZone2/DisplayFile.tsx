import {
  AisClose,
  AisDot,
  AisFile,
  AisFileDoc,
  AisFileJson,
  AisFileMarkdown,
  AisFilePdf,
  AisFileSlide,
  AisFileTable,
  AisFileTypescript,
  AisFileXml,
  AisFileZip,
  AisImage,
  AisTrash,
} from "@akkurateio/chakra-icons"
import {
  Box,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from "react"
// @ts-ignore
import { formatBytes } from "@akkurateio/utils"
import { defaultStyles, FileIcon } from "react-file-icon"

interface IProps {
  file: File
  onDelete: () => void
  iconSize?: string
}

const displayImgFile = (file: File) => {
  if (file.name.split(".").pop() === "pdf") {
    return (
      <Box
        borderWidth={"1px"}
        borderColor={"neutral.200"}
        rounded={"base"}
        p={2.5}
      >
        <AisFilePdf boxSize={"32px"} />
      </Box>
    )
  }
  if (file.name.split(".").pop() === ("docx" || "doc")) {
    return (
      <Box
        borderWidth={"1px"}
        borderColor={"neutral.200"}
        rounded={"base"}
        p={2.5}
      >
        <AisFileDoc boxSize={"32px"} />
      </Box>
    )
  }
  if (file.name.split(".").pop() === "json") {
    return (
      <Box
        borderWidth={"1px"}
        borderColor={"neutral.200"}
        rounded={"base"}
        p={2.5}
      >
        <AisFileJson boxSize={"32px"} />
      </Box>
    )
  }
  if (file.name.split(".").pop() === "xml") {
    return (
      <Box
        borderWidth={"1px"}
        borderColor={"neutral.200"}
        rounded={"base"}
        p={2.5}
      >
        <AisFileXml boxSize={"32px"} />
      </Box>
    )
  }
  if (file.name.split(".").pop() === "md") {
    return (
      <Box
        borderWidth={"1px"}
        borderColor={"neutral.200"}
        rounded={"base"}
        p={2.5}
      >
        <AisFileMarkdown boxSize={"32px"} />
      </Box>
    )
  }
  if (file.name.split(".").pop() === ("zip" || "rar")) {
    return (
      <Box
        borderWidth={"1px"}
        borderColor={"neutral.200"}
        rounded={"base"}
        p={2.5}
      >
        <AisFileZip boxSize={"32px"} />
      </Box>
    )
  }
  if (file.name.split(".").pop() === ("ts" || "tsx")) {
    return (
      <Box
        borderWidth={"1px"}
        borderColor={"neutral.200"}
        rounded={"base"}
        p={2.5}
      >
        <AisFileTypescript boxSize={"32px"} />
      </Box>
    )
  }
  if (
    file.name.split(".").pop() ===
    ("ppt" ||
      "pptx" ||
      "pps" ||
      "ppsx" ||
      "pptm" ||
      "pot" ||
      "potx" ||
      "potm" ||
      "ppsm" ||
      "ppam" ||
      "sldx" ||
      "sldm")
  ) {
    return (
      <Box
        borderWidth={"1px"}
        borderColor={"neutral.200"}
        rounded={"base"}
        p={2.5}
      >
        <AisFileSlide boxSize={"32px"} />
      </Box>
    )
  }
  if (
    file.name.split(".").pop() ===
    ("xls" ||
      "xlsx" ||
      "xlsm" ||
      "xlsb" ||
      "xlt" ||
      "xltx" ||
      "xltm" ||
      "xlam" ||
      "csv")
  ) {
    return (
      <Box
        borderWidth={"1px"}
        borderColor={"neutral.200"}
        rounded={"base"}
        p={2.5}
      >
        <AisFileTable boxSize={"32px"} />
      </Box>
    )
  }
  return (
    <Box
      borderWidth={"1px"}
      borderColor={"neutral.200"}
      rounded={"base"}
      p={2.5}
    >
      <AisFile boxSize={"32px"} />
    </Box>
  )
}

const DisplayFile: React.FC<IProps> = ({ file, onDelete }) => {
  return (
    <HStack justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      {file.type.includes("image") ? (
        <Box
          borderWidth={"1px"}
          borderColor={"neutral.200"}
          rounded={"base"}
          p={2.5}
        >
          <AisImage boxSize={"32px"} />
        </Box>
      ) : (
        displayImgFile(file)
      )}
      <VStack
        wordBreak={"break-word"}
        pl={4}
        alignItems={"flex-start"}
        w={"full"}
        ml={2}
        spacing={0}
      >
        <Text fontSize={"sm"} noOfLines={1}>
          {file.name}
        </Text>
        <Text fontSize={"2xs"} opacity={0.5} mt={1}>
          Fichier {file.name.split(".").pop()?.toUpperCase()} •{" "}
          {formatBytes(file.size, 1)}
        </Text>
      </VStack>
      <IconButton
        size={"xs"}
        rounded={"full"}
        aria-label="delete file"
        onClick={onDelete}
        variant={"ghost"}
        position={"relative"}
      >
        <AisTrash boxSize={"16px"} />
      </IconButton>
    </HStack>
  )
}

export default DisplayFile
