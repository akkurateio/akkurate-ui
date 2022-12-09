import { AisCheckmark } from "@akkurateio/icons"
import { StackDirection } from "@chakra-ui/layout"
import {
  Box,
  Flex,
  FormControlOptions,
  HStack,
  HTMLChakraProps,
  IconButton,
  Stack,
} from "@chakra-ui/react"
import { SystemProps, ThemingProps } from "@chakra-ui/system"
import React, { useEffect, useState } from "react"
import FormControlLayout from "./FormControlLayout"

type Omitted =
  | "disabled"
  | "required"
  | "readOnly"
  | "size"
  | "value"
  | "justifyContent"
  | "alignItems"

interface CardOptions {
  contentArray: { id: string | number; body: JSX.Element }[]
  selectedCardId: string | number
  setSelectedCardId: (id: string | number) => void
  direction?: StackDirection
  spacing?: SystemProps["margin"]
  justifyContent?: SystemProps["justifyContent"]
  alignItems?: SystemProps["alignItems"]
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    CardOptions,
    ThemingProps<"Radio">,
    FormControlOptions {}

export const AcsRadioSelectCard: React.FC<InputProps> = ({
  contentArray,
  selectedCardId,
  setSelectedCardId,
  direction = "row",
  spacing = 4,
  justifyContent = "flex-start",
  alignItems = "center",
  ...props
}) => {
  const propsForInput = () => {
    const { isRequired, isDisabled, isInvalid, isReadOnly, size, ...rest } =
      props
    return rest
  }

  const [currentId, setCurrentId] = useState<number | string | undefined>(
    selectedCardId ? selectedCardId : undefined,
  )

  useEffect(() => {
    if (currentId) {
      setSelectedCardId(currentId)
    }
  }, [currentId])

  return (
    <FormControlLayout {...props}>
      <Stack
        direction={direction}
        spacing={spacing}
        justifyContent={justifyContent}
        alignItems={alignItems}
      >
        {contentArray.map((item, idx) => (
          <HStack
            cursor={"pointer"}
            onClick={() => setCurrentId(item.id)}
            height={"auto"}
            width={"auto"}
            rounded={"md"}
            alignItems={"flex-start"}
            p={2}
            key={idx}
            position={"relative"}
            borderWidth={2}
            borderColor={currentId === item.id ? "primary.500" : "gray.200"}
            bg={"white"}
            transition={"all 0.2s ease-in-out"}
          >
            {item.body}
            <Box width={"48px"} />
            <Flex
              position={"absolute"}
              marginLeft={2}
              top={2}
              right={2}
              justifyContent={"center"}
              alignItems={"center"}
              boxSize={"24px"}
            >
              <IconButton
                colorScheme={currentId === item.id ? "primary" : "white"}
                borderWidth={1}
                borderColor={currentId === item.id ? "primary.500" : "gray.200"}
                rounded={"full"}
                size={"2xs"}
                aria-label={"Select"}
                icon={<AisCheckmark boxSize={"16px"} color={"white"} />}
                transition={"all 0.2s ease-in-out"}
              />
            </Flex>
            )
          </HStack>
        ))}
      </Stack>
    </FormControlLayout>
  )
}

export default AcsRadioSelectCard
