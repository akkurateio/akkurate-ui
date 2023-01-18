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
  heightBox?: string
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
  heightBox = "full",
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
            height={heightBox}
            width={"auto"}
            rounded={"md"}
            minH={"42px"}
            alignItems={"flex-start"}
            key={idx}
            position={"relative"}
            borderWidth={"1px"}
            borderColor={currentId === item.id ? "primary.500" : "neutral.200"}
            boxShadow={
              currentId === item.id
                ? `0px 0px 0px 1px ${theme.colors.primary[500]}`
                : "none"
            }
            bg={"white"}
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
