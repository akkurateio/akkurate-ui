import React from "react"
import { Box, HStack, IconButton, Image, Text } from "@chakra-ui/react"
import { defaultStyles, FileIcon } from "react-file-icon"
import { AisTrash } from "@akkurateio/icons"
// @ts-ignore
import { formatBytes } from "@akkurateio/utils"

interface IProps {
  file: File
  onDelete: () => void
  boxSize?: string
  height?: string
}

const ForOne: React.FC<IProps> = ({ file, onDelete, boxSize, height }) => {
  return (
    <HStack
      justifyContent={"space-between"}
      width={"100%"}
      zIndex={10}
      maxHeight={height}
    >
      {file.type.includes("image") ? (
        <Image
          src={URL.createObjectURL(file)}
          alt={file.name}
          w={boxSize}
          height={boxSize}
          p={8}
        />
      ) : (
        <Box w={boxSize} p={8}>
          {file.name.split(".").pop() && (
            <FileIcon
              extension={file.name.split(".").pop()}
              // @ts-ignore
              {...defaultStyles[file.name.split(".").pop()]}
            />
          )}
        </Box>
      )}
      <Box>
        <Text noOfLines={1}>{file.name}</Text>
        <Text>{formatBytes(file.size, 1)}</Text>
      </Box>
      <IconButton
        size={"xs"}
        rounded={"full"}
        aria-label="delete file"
        onClick={onDelete}
        right={3}
      >
        <AisTrash boxSize={4} />
      </IconButton>
    </HStack>
  )
}

export default ForOne
