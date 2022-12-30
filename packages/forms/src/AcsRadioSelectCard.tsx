import { AisRadioButton, AisRadioButtonChecked } from "@akkurateio/icons"
import {
  Box,
  FormControlOptions,
  HStack,
  HTMLChakraProps,
  SimpleGrid,
  useTheme,
} from "@chakra-ui/react"
import { ResponsiveValue, SystemProps, ThemingProps } from "@chakra-ui/system"
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
  columns?: ResponsiveValue<number>
  spacing?: SystemProps["margin"]
  justifyContent?: SystemProps["justifyContent"]
  alignItems?: SystemProps["alignItems"]
  label?: string
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
  columns = 2,
  spacing = 6,
  justifyContent = "flex-start",
  alignItems = "center",
  ...props
}) => {
  const propsForInput = () => {
    const { isRequired, isDisabled, isInvalid, isReadOnly, size, ...rest } =
      props
    return rest
  }

  const theme = useTheme()

  const [currentId, setCurrentId] = useState<number | string | undefined>(
    selectedCardId ? selectedCardId : undefined,
  )

  useEffect(() => {
    if (currentId) {
      setSelectedCardId(currentId)
    }
  }, [currentId])

  return (
    <FormControlLayout label={props.label} {...props}>
      <SimpleGrid
        columns={columns}
        spacing={spacing}
        justifyContent={justifyContent}
        alignItems={alignItems}
      >
        {contentArray.map((item, idx) => (
          <HStack
            cursor={"pointer"}
            onClick={() => setCurrentId(item.id)}
            height={"fit-content"}
            width={"auto"}
            rounded={"md"}
            minH={"42px"}
            alignItems={"flex-start"}
            key={idx}
            position={"relative"}
            boxShadow={
              currentId === item.id
                ? `0 0 0 3px ${theme.colors.primary[500]}25 `
                : undefined
            }
            borderWidth={"1px"}
            borderColor={currentId === item.id ? "primary.500" : "neutral.200"}
            bg={"white"}
          >
            <Box
              w={"full"}
              ml={"0.75rem"}
              mt={"0.563rem"}
              mb={"0.563rem"}
              mr={"2.4rem"}
            >
              {item.body}
            </Box>
            <Box
              position={"absolute"}
              top={2}
              right={2}
              color={currentId === item.id ? "primary.500" : "neutral.300"}
            >
              {currentId === item.id ? (
                <AisRadioButtonChecked boxSize={"24px"} />
              ) : (
                <AisRadioButton boxSize={"24px"} />
              )}
            </Box>
          </HStack>
        ))}
      </SimpleGrid>
    </FormControlLayout>
  )
}

export default AcsRadioSelectCard
