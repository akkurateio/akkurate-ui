import {
  Box,
  Button,
  Checkbox,
  FormControlOptions,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react"
import { ThemingProps } from "@chakra-ui/system"
import React, { useState } from "react"
import {
  AisCheckbox,
  AisCheckboxChecked,
  AisCheckboxIntermediate,
} from "@akkurateio/icons"
import FormControlLayout from "./FormControlLayout"

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
  direction?: "horizontal" | "vertical"
  label?: string
}

interface CheckboxMultipleProps
  extends Omit<ThemingProps<"Checkbox">, Omitted>,
    ThemingProps<"Checkbox">,
    CheckboxMultiple,
    FormControlOptions {}

export const AcsCheckboxMultiple: React.FC<CheckboxMultipleProps> = ({
  contentArray,
  selectedCheckboxIds,
  setSelectedCheckboxIds,
  multiple = false,
  direction,
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

  let boxSize = "22px"
  if (props.size === "sm") {
    boxSize = "16px"
  } else if (props.size === "md") {
    boxSize = "22px"
  } else if (props.size === "lg") {
    boxSize = "24px"
  }

  let fontSize = "14px"
  if (props.size === "sm") {
    fontSize = "12px"
  } else if (props.size === "md") {
    fontSize = "14px"
  } else if (props.size === "lg") {
    fontSize = "16px"
  }

  let spacing = "8px"
  if (props.size === "sm") {
    spacing = "6px"
  } else if (props.size === "md") {
    spacing = "8px"
  } else if (props.size === "lg") {
    spacing = "10px"
  }

  let padding = "8px"
  if (direction === "vertical") {
    padding = "0px"
  }

  let paddingLeft = "8px"
  if (props.size === "sm") {
    paddingLeft = "4px"
  } else if (props.size === "md") {
    paddingLeft = "8px"
  } else if (props.size === "lg") {
    paddingLeft = "15px"
  }

  return (
    <FormControlLayout label={props.label} {...props}>
      <Stack direction={direction === "vertical" ? "column" : "row"}>
        {multiple ? (
          <Button
            onClick={handleCheckAll}
            variant={"unstyled"}
            fontWeight={"normal"}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            _focus={{ outline: "none" }}
            _focusVisible={{ textDecoration: "none" }}
            paddingLeft={paddingLeft}
          >
            <HStack spacing={spacing}>
              {isInderminate ? (
                <AisCheckboxIntermediate
                  color={"primary.500"}
                  boxSize={boxSize}
                />
              ) : isAllChecked ? (
                <AisCheckboxChecked color={"primary.500"} boxSize={boxSize} />
              ) : (
                <AisCheckbox
                  color={focus ? "primary.500" : "neutral.300"}
                  boxSize={boxSize}
                />
              )}
              <Text fontSize={fontSize}>Tous les éléments</Text>
            </HStack>
          </Button>
        ) : null}

        {items.map((item) => (
          <Button
            variant={"unstyled"}
            fontWeight={"normal"}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            _focus={{ outline: "none" }}
            _focusVisible={{ textDecoration: "none" }}
            key={item.id}
            onClick={() => handleCheck(item.id)}
            paddingLeft={paddingLeft}
          >
            <HStack spacing={spacing}>
              {item.isChecked ? (
                <AisCheckboxChecked color={"primary.500"} boxSize={boxSize} />
              ) : (
                <AisCheckbox
                  color={focus ? "primary.500" : "neutral.300"}
                  boxSize={boxSize}
                />
              )}
              <Text fontSize={fontSize}>{item.name}</Text>
            </HStack>
          </Button>
        ))}
      </Stack>
    </FormControlLayout>
  )
}
