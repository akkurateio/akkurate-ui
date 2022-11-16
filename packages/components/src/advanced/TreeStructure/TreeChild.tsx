import React, { useState } from "react"
import { InterfaceTree } from "./InterfaceTree"
import { Box, Flex, HStack, VStack } from "@chakra-ui/react"
import {
  AisArrowDown,
  AisArrowRight,
  AisArrowRightDown,
  AisChevronDown,
  AisChevronRight,
  AisDot,
  AisFolder,
} from "@akkurateio/icons"

interface IProps {
  child: {
    id: string | number
    name: string
    children: InterfaceTree[]
  }
}

const TreeChild: React.FC<IProps> = ({ child }) => {
  const [showChildren, setShowChildren] = useState<boolean>(false)

  const handleClick = () => {
    setShowChildren(!showChildren)
  }

  return (
    <Flex alignItems={"flex-start"} flexDir={"column"} gap={1}>
      <HStack spacing={1} cursor={"pointer"} onClick={handleClick}>
        {child.children.length > 0 ? (
          showChildren ? (
            <AisChevronDown boxSize={3} />
          ) : (
            <AisChevronRight boxSize={3} />
          )
        ) : (
          <AisDot />
        )}
        <Box>{child.name}</Box>
      </HStack>

      <Box marginLeft={5}>
        {showChildren &&
          child.children &&
          child.children.map((child) => (
            <TreeChild child={child} key={child.id} />
          ))}
      </Box>
    </Flex>
  )
}

export default TreeChild
