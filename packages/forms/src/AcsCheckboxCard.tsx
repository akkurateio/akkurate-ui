import { AisCheckbox, AisCheckboxChecked } from "@akkurateio/chakra-icons"
import {
  Box,
  FormControlOptions,
  HStack,
  HTMLChakraProps,
  SimpleGrid,
} from "@chakra-ui/react"
import {
  ResponsiveValue,
  SystemProps,
  ThemingProps,
  useTheme,
} from "@chakra-ui/system"
import React, { useState } from "react"
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
  selectedCardIds: (string | number)[]
  setSelectedCardIds: (ids: (string | number)[]) => void
  columns?: ResponsiveValue<number>
  spacing?: SystemProps["margin"]
  label?: string
  heightBox?: string
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
  spacing = 4,
  heightBox = "full",
  ...props
}) => {
  const theme = useTheme()

  const [currentIds, setCurrentIds] = useState<(string | number)[]>(
    selectedCardIds ? selectedCardIds : [],
  )

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
    <FormControlLayout label={props.label} {...props}>
      <SimpleGrid columns={columns} spacing={spacing}>
        {contentArray.map((item, idx) => (
          <HStack
            position={"relative"}
            cursor={"pointer"}
            onClick={() => handleOnChange(item.id)}
            height={heightBox}
            width={"auto"}
            rounded={"md"}
            alignItems={"flex-start"}
            key={idx}
            minH={"42px"}
            border={"1px"}
            borderColor={
              currentIds.includes(item.id) ? "primary.500" : "neutral.200"
            }
            boxShadow={
              currentIds.includes(item.id)
                ? `0px 0px 0px 1px ${theme.colors.primary[500]}`
                : "none"
            }
            bg={"white"}
            transition={"all 0.2s ease-in-out"}
            justifyContent={"space-between"}
          >
            <Box
              w={"full"}
              ml={"0.75rem"}
              mt={"0.563rem"}
              mb={"0.563rem"}
              mr={"2.563rem"}
            >
              {item.body}
            </Box>
            <Box
              position={"absolute"}
              right={2}
              top={"0.45rem"}
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
          </HStack>
        ))}
      </SimpleGrid>
    </FormControlLayout>
  )
}

export default AcsCheckboxCard
