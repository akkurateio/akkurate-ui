import React, { useState } from "react"
import { InterfaceTree } from "./InterfaceTree"
import { Box, color, Flex, HStack, Text } from "@chakra-ui/react"
import { AisChevronDown, AisChevronRight, AisDot } from "@akkurateio/icons"

interface IProps {
  child: {
    id: string | number | null
    name: string | null
    children: InterfaceTree[]
  }
  item: {
    id: string | number | null
    name: string | null
  }
  setItem: (item: { id: string | number | null; name: string | null }) => void
}

const TreeChild: React.FC<IProps> = ({ child, item, setItem }) => {
  const [showChildren, setShowChildren] = useState<boolean>(false)

  const handleClick = () => {
    setShowChildren(!showChildren)
    if (child && child.id && child.name) {
      setItem({ id: child.id, name: child.name })
    }
  }

  const handleOpen = () => {
    setShowChildren(!showChildren)
  }

  const step1 = () => {
    if (child && child.children.length > 0) {
      return (
        <HStack
          onClick={handleClick}
          cursor={"pointer"}
          spacing={2}
          alignItems={"center"}
        >
          {showChildren ? (
            <Flex
              borderWidth={"1px"}
              boxSize={"24px"}
              backgroundColor={"primary.500"}
              rounded={"full"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <AisChevronDown color={"white"} boxSize={"16px"} />
            </Flex>
          ) : (
            <Flex
              borderWidth={"1px"}
              boxSize={"24px"}
              backgroundColor={"neutral.200"}
              rounded={"full"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <AisChevronRight boxSize={"16px"} />
            </Flex>
          )}
          <Text color={showChildren ? "primary.500" : ""} onClick={handleClick}>
            {child.name}
          </Text>
        </HStack>
      )
    } else {
      return (
        <HStack
          onClick={handleClick}
          cursor={"pointer"}
          spacing={2}
          alignItems={"center"}
        >
          <Flex
            borderWidth={"1px"}
            boxSize={"24px"}
            backgroundColor={"neutral.200"}
            rounded={"full"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <AisDot boxSize={"16px"} />
          </Flex>
          <Text onClick={handleClick}>{child.name}</Text>
        </HStack>
      )
    }
  }

  return (
    <Flex alignItems={"flex-start"} flexDir={"column"} gap={1}>
      <Box onClick={handleOpen}>{step1()}</Box>
      <Box marginLeft={"2rem"} mt={"0.5rem"}>
        {showChildren &&
          child.children &&
          child.children.map((child) => (
            <TreeChild
              child={child}
              key={child.id}
              item={item}
              setItem={setItem}
            />
          ))}
      </Box>
    </Flex>
  )
}

export default TreeChild
