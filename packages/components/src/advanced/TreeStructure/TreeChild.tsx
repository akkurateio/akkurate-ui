import React, { useState } from "react"
import { InterfaceTree } from "./InterfaceTree"
import { Box, Flex, HStack, Text } from "@chakra-ui/react"
import { AisChevronDown, AisChevronRight, AisDot } from "@akkurateio/icons"

interface IProps {
  child: {
    id: string | number
    name: string
    children: InterfaceTree[]
  }
  item: {
    id: string | number | null
    name: string | null
  }
  setItem: (item: { id: string | number; name: string }) => void
}

const TreeChild: React.FC<IProps> = ({ child, item, setItem }) => {
  const [showChildren, setShowChildren] = useState<boolean>(false)

  const handleClick = () => {
    setShowChildren(!showChildren)
    setItem({ id: child.id, name: child.name })
  }

  const handleOpen = () => {
    setShowChildren(!showChildren)
  }

  return (
    <Flex alignItems={"flex-start"} flexDir={"column"} gap={1}>
      <HStack
        spacing={1}
        cursor={"pointer"}
        color={item.id === child.id ? "primary.500" : undefined}
      >
        <Box onClick={handleOpen}>
          {child.children.length > 0 ? (
            showChildren ? (
              <Box
                textAlign={"center"}
                boxSize={4}
                border={"1px"}
                rounded={"full"}
                backgroundColor={
                  item.id === child.id ? "primary.500" : undefined
                }
              >
                <AisChevronDown
                  boxSize={3}
                  marginTop={-3}
                  color={item.id === child.id ? "white" : undefined}
                />
              </Box>
            ) : (
              <Box
                textAlign={"center"}
                boxSize={4}
                border={"1px"}
                rounded={"full"}
                backgroundColor={
                  item.id === child.id ? "primary.500" : undefined
                }
              >
                <AisChevronRight
                  boxSize={3}
                  marginTop={-3}
                  color={item.id === child.id ? "white" : undefined}
                />
              </Box>
            )
          ) : (
            <AisDot />
          )}
        </Box>

        <Text onClick={handleClick}>{child.name}</Text>
      </HStack>

      <Box marginLeft={5}>
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
