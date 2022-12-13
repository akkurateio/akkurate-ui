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
import { theme } from "@akkurateio/utils"

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
            rounded={"6px"}
            alignItems={"flex-start"}
            minWidth={"245px"}
            pt={"9px"}
            pl={"9px"}
            pb={"9px"}
            key={idx}
            // position={"relative"}
            boxShadow={
              currentIds.includes(item.id)
                ? `0 0 0 3px ${theme.colors.primary[500]}25 `
                : undefined
            }
            borderWidth={"1px"}
            borderColor={
              currentIds.includes(item.id) ? "primary.500" : "gray.200"
            }
            bg={"white"}
            transition={"all 0.2s ease-in-out"}
            justifyContent={"space-between"}
          >
            <Box>{item.body}</Box>
            {/*<Box width={"48px"} />*/}
            <IconButton
              colorScheme={currentIds.includes(item.id) ? "primary" : "white"}
              borderWidth={"1px"}
              borderColor={
                currentIds.includes(item.id) ? "primary.500" : "gray.200"
              }
              rounded={"md"}
              size={"2xs"}
              aria-label={"Select"}
              icon={<AisCheckmark boxSize={"24px"} color={"white"} />}
              transition={"all 0.2s ease-in-out"}
              boxSize={"24px"}
              right={"8px"}
              marginRight={"-8px"}
            />
            )
          </HStack>
        ))}
      </Stack>
    </FormControlLayout>
  )
}

export default AcsCheckboxCard
