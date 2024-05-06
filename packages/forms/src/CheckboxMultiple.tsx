import {
  Button,
  FormControlOptions,
  HStack,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import { ResponsiveValue, ThemingProps } from "@chakra-ui/system"
import React, { useState } from "react"
import { AisCheckbox, AisCheckboxChecked } from "@akkurateio/chakra-icons"
import FormControlLayout from "./FormControlLayout"
// @ts-ignore
import { allSizes } from "@akkurateio/utils"

type Omitted =
  | "disabled"
  | "required"
  | "readOnly"
  | "size"
  | "value"
  | "justifyContent"
  | "alignItems"

interface CheckboxMultiple {
  contentArray: { id: string | number; name: string; isChecked: boolean }[]
  selectedCheckboxIds: (string | number)[]
  setSelectedCheckboxIds: (ids: (string | number)[]) => void
  multiple?: boolean
  // direction?: StackDirection
  label?: string
  columns?: ResponsiveValue<number>
  size?: "sm" | "md" | "lg"
}

interface CheckboxMultipleProps
  extends Omit<ThemingProps<"Checkbox">, Omitted>,
    CheckboxMultiple,
    FormControlOptions {}

export const AcsCheckboxMultiple: React.FC<CheckboxMultipleProps> = ({
  contentArray,
  selectedCheckboxIds,
  setSelectedCheckboxIds,
  multiple = true,
  columns = 1,
  size = "md",
  ...props
}) => {
  const [allIsChecked, setAllIsChecked] = useState(false)
  const [items, setItems] = useState(contentArray)
  const [focus, setFocus] = useState(false)

  const handleCheckAll = () => {
    const newItems = items.map((items) => ({
      ...items,
      isChecked: !allIsChecked,
    }))
    setItems(newItems)
    setAllIsChecked(!allIsChecked)

    const newItemsIds = newItems
      .filter((item) => item.isChecked)
      .map((item) => item.id)
    setSelectedCheckboxIds(newItemsIds)
  }

  const handleCheck = (id: string | number) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isChecked: !item.isChecked,
        }
      }
      return item
    })
    setItems(newItems)
    setAllIsChecked(newItems.every((item) => item.isChecked))
    const toto = newItems
      .filter((item) => item.isChecked)
      .map((item) => item.id)
    setSelectedCheckboxIds(toto)
  }
  const isInderminate = items.some((item) => item.isChecked) && !allIsChecked
  const isAllChecked = items.every((item) => item.isChecked)

  const sizeState = useBreakpointValue(typeof size === "object" ? size : {})

  const sizes = allSizes(sizeState ? sizeState : (size as string))

  return (
    <FormControlLayout label={props.label} {...props}>
      <SimpleGrid columns={columns} spacing={sizes?.spacing}>
        {items.map((item) => (
          <Button
            w={"full"}
            h={"full"}
            variant={"unstyled"}
            fontWeight={"normal"}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            _focus={{ outline: "none" }}
            _focusVisible={{ textDecoration: "none" }}
            key={item.id}
            onClick={() => handleCheck(item.id)}
          >
            <HStack spacing={sizes?.spacing}>
              {item.isChecked ? (
                <AisCheckboxChecked
                  color={"primary.500"}
                  boxSize={sizes?.boxSize}
                />
              ) : (
                <AisCheckbox
                  color={focus ? "primary.500" : "neutral.300"}
                  boxSize={sizes?.boxSize}
                  _hover={{ color: "neutral.500" }}
                />
              )}
              <Text fontSize={sizes?.fontSize}>{item.name}</Text>
            </HStack>
          </Button>
        ))}
      </SimpleGrid>
    </FormControlLayout>
  )
}
