import React, { useState } from "react"
import {
  Box,
  FormControlOptions,
  HStack,
  HTMLChakraProps,
  IconButton,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react"
import { AisCheckbox, AisCheckboxChecked } from "@akkurateio/icons"
import FormControlLayout from "./FormControlLayout"
import { StackDirection } from "@chakra-ui/layout"
import { ResponsiveValue, SystemProps, ThemingProps } from "@chakra-ui/system"
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
  columns?: ResponsiveValue<number>
  direction?: StackDirection
  spacing?: SystemProps["margin"]
}

interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    CardOptions,
    ThemingProps<"Checkbox">,
    FormControlOptions {}

export const AcsCheckboxCard: React.FC<InputProps> = ({
  contentArray,
  selectedCardIds,
  columns = 2,
  setSelectedCardIds,
  direction = "row",
  spacing = 4,
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
      <SimpleGrid columns={columns} spacing={spacing}>
        {contentArray.map((item, idx) => (
          <HStack
            position={"relative"}
            cursor={"pointer"}
            onClick={() => handleOnChange(item.id)}
            height={"auto"}
            width={"auto"}
            rounded={"6px"}
            alignItems={"flex-start"}
            minWidth={"245px"}
            pt={"0.563rem"}
            pl={"0.563rem"}
            pb={"0.563rem"}
            key={idx}
            // position={"relative"}
            boxShadow={
              currentIds.includes(item.id)
                ? `0 0 0 3px ${theme.colors.primary[500]}25 `
                : undefined
            }
            borderWidth={"1px"}
            borderColor={
              currentIds.includes(item.id) ? "primary.500" : "neutral.200"
            }
            bg={"white"}
            transition={"all 0.2s ease-in-out"}
            justifyContent={"space-between"}
          >
            <Box>{item.body}</Box>
            <Box
              position={"absolute"}
              top={2}
              right={2}
              color={
                currentIds.includes(item.id) ? "primary.500" : "neutral.300"
              }
            >
              {currentIds.includes(item.id) ? (
                <AisCheckboxChecked boxSize={"24px"} />
              ) : (
                <AisCheckbox boxSize={"24px"} />
              )}
            </Box>
            )
          </HStack>
        ))}
      </SimpleGrid>
    </FormControlLayout>
  )
}

export default AcsCheckboxCard
