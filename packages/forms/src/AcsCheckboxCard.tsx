import React, { useState } from "react"
import {
  Box,
  FormControlOptions,
  HStack,
  HTMLChakraProps,
  IconButton,
  Stack,
} from "@chakra-ui/react"
import { AisCheckbox, AisCheckmark } from "@akkurateio/icons"
import FormControlLayout from "./FormControlLayout"
import { StackDirection } from "@chakra-ui/layout"
import { SystemProps, ThemingProps } from "@chakra-ui/system"

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
  selectedCardIds: (string | number)[]
  setSelectedCardIds: (ids: (string | number)[]) => void
  direction?: StackDirection
  spacing?: SystemProps["margin"]
  justifyContent?: SystemProps["justifyContent"]
  alignItems?: SystemProps["alignItems"]
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    CardOptions,
    ThemingProps<"Checkbox">,
    FormControlOptions {}

export const AcsCheckboxCard: React.FC<InputProps> = ({
  contentArray,
  selectedCardIds,
  setSelectedCardIds,
  direction = "row",
  spacing = 4,
  justifyContent = "flex-start",
  alignItems = "center",
  ...props
}) => {
  const [currentIds, setCurrentIds] = useState<(string | number)[]>(
    selectedCardIds ? selectedCardIds : [],
  )
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false)
  const [isIndeterminate, setIsIndeterminate] = useState<boolean>(false)

  const handleOnChange = (id: string | number) => {
    if (currentIds && currentIds.includes(id)) {
      const newIds = currentIds.filter((i) => i !== id)
      setCurrentIds(newIds)
      setSelectedCardIds(newIds)
    } else {
      const newIds = currentIds ? [...currentIds, id] : [id]
      setCurrentIds(newIds)
      setSelectedCardIds(newIds)
    }
  }

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
            onClick={() => handleOnChange(item.id)}
            height={"auto"}
            width={"auto"}
            rounded={"md"}
            alignItems={"flex-start"}
            p={2}
            key={idx}
            position={"relative"}
            borderWidth={2}
            borderColor={
              currentIds.includes(item.id) ? "primary.500" : "gray.200"
            }
            bg={"white"}
            transition={"all 0.2s ease-in-out"}
          >
            {item.body}
            <Box width={"48px"} />
            <Box position={"absolute"} marginLeft={2} top={2} right={2}>
              <IconButton
                colorScheme={currentIds.includes(item.id) ? "primary" : "white"}
                borderWidth={1}
                borderColor={
                  currentIds.includes(item.id) ? "primary.500" : "gray.200"
                }
                rounded={"md"}
                size={"2xs"}
                aria-label={"Select"}
                icon={<AisCheckmark boxSize={"24px"} color={"white"} />}
                transition={"all 0.2s ease-in-out"}
              />
            </Box>
            )
          </HStack>
        ))}
      </Stack>
    </FormControlLayout>
  )
}

export default AcsCheckboxCard
