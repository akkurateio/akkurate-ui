import { AisClose, AisTrash } from "@akkurateio/icons"
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

const DisplayFile: React.FC<IProps> = ({ file, onDelete }) => {
  return (
    <HStack justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      {file.type.includes("image") ? (
        <Box w={"20px"} h={"28px"}>
          <Image
            src={URL.createObjectURL(file)}
            alt={file.name}
            width={"100%"}
            height={"100%"}
            objectFit={"contain"}
            loading={"lazy"}
          />
        </Box>
      ) : (
        <Box w={"20px"} h={"28px"}>
          {file.name.split(".").pop() && (
            <FileIcon
              extension={file.name.split(".").pop()}
              // @ts-ignore
              {...defaultStyles[file.name.split(".").pop()]}
            />
          )}
        </Box>
      )}
      <VStack
        wordBreak={"break-word"}
        pl={4}
        alignItems={"flex-start"}
        w={"full"}
        ml={2}
      >
        <Text fontSize={"sm"} noOfLines={1}>
          {file.name}
        </Text>
        <Text fontSize={"xs"}>{formatBytes(file.size, 1)}</Text>
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
