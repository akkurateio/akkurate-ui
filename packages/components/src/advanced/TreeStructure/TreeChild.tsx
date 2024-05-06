import {
  AisChevronDown,
  AisChevronRight,
  AisDot,
} from "@akkurateio/chakra-icons"
import { Box, Flex, HStack, IconButton, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { InterfaceTree } from "./InterfaceTree"

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
    return (
      <HStack
        onClick={handleClick}
        cursor={"pointer"}
        spacing={2}
        alignItems={"center"}
      >
        <IconButton
          size={"xs"}
          variant={"unstyled"}
          aria-label="Toggle children visibility"
          icon={
            child.children.length > 0 ? (
              showChildren ? (
                <AisChevronDown boxSize={"16px"} />
              ) : (
                <AisChevronRight boxSize={"16px"} />
              )
            ) : (
              <AisDot boxSize={"16px"} />
            )
          }
          bg={item.id === child.id ? "primary.500" : "neutral.200"}
          color={item.id === child.id ? "white" : "black"}
          rounded={"full"}
        />

        <Text
          color={showChildren ? "primary.500" : undefined}
          onClick={handleClick}
        >
          {child.name}
        </Text>
      </HStack>
    )
  }

  return (
    <Flex alignItems={"flex-start"} flexDir={"column"} gap={1}>
      <Box onClick={handleOpen}>
        <HStack
          onClick={handleClick}
          cursor={"pointer"}
          spacing={2}
          alignItems={"center"}
        >
          <IconButton
            size={"xs"}
            variant={"unstyled"}
            aria-label="Toggle children visibility"
            icon={
              child.children.length > 0 ? (
                showChildren ? (
                  <AisChevronDown boxSize={"16px"} />
                ) : (
                  <AisChevronRight boxSize={"16px"} />
                )
              ) : (
                <AisDot boxSize={"16px"} />
              )
            }
            bg={item.id === child.id ? "primary.500" : "neutral.200"}
            color={item.id === child.id ? "white" : "black"}
            rounded={"full"}
          />

          <Text
            color={showChildren ? "primary.500" : undefined}
            onClick={handleClick}
          >
            {child.name}
          </Text>
        </HStack>
      </Box>
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
