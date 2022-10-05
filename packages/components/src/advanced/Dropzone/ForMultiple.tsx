import React from "react"
import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react"
import { AisClose, AisTrash } from "@akkurateio/icons"
// @ts-ignore
import { formatBytes } from "@akkurateio/utils"
import { defaultStyles, FileIcon } from "react-file-icon"

interface IProps {
  file: File
  onDelete: () => void
  boxSize?: string
  height?: string
  iconSize?: string
}

const ForMultiple: React.FC<IProps> = ({ file, onDelete, boxSize, height }) => {
  return (
    <Flex
      position={"relative"}
      backgroundColor={"gray.200"}
      flexDir={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={boxSize}
      textAlign={"center"}
      rounded={8}
      py={2}
    >
      <Flex position={"absolute"} top={"-6px"} right={"-6px"}>
        <IconButton
          size={"xs"}
          rounded={"full"}
          aria-label="delete file"
          onClick={onDelete}
          width={"12px"}
          position={"relative"}
          colorScheme={"red"}
        >
          <AisClose boxSize={4} />
        </IconButton>
      </Flex>
      <Box height={boxSize}>
        {file.type.includes("image") ? (
          <Flex justifyContent={"center"} height={`calc(${boxSize} - 1rem)`}>
            <Image
              src={URL.createObjectURL(file)}
              alt={file.name}
              width={"100%"}
              height={"100%"}
              objectFit={"contain"}
            />
          </Flex>
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
      </Box>
      <Box>
        <Text width={"full"} noOfLines={1} w={boxSize}>
          {file.name}
        </Text>
        <Text>{formatBytes(file.size, 1)}</Text>
      </Box>
    </Flex>
  )
}

export default ForMultiple
