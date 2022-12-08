import React, { useEffect, useState } from "react"
import { ThemingProps } from "@chakra-ui/system"
import { Box, Checkbox, FormControlOptions, Stack } from "@chakra-ui/react"
import { AisCheckbox, AisCheckboxChecked } from "@akkurateio/icons"

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
  direction?: "row" | "column"
  margin?: number | string
  marginBottom?: number | string
  marginTop?: number | string
  marginLeft?: number | string
  marginRight?: number | string
  padding?: number | string
  paddingTop?: number | string
  paddingLeft?: number | string
  paddingRight?: number | string
  paddingBottom?: number | string
  spacing?: number | string
  justifyContent?: "flex-start" | "center" | "flex-end"
  alignItems?: "center" | "flex-start" | "flex-end"
  width?: number | string
  height?: number | string
  backgroundColor?: string
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
  ...props
}) => {
  const [allIsChecked, setAllIsChecked] = useState(false)
  const [items, setItems] = useState(contentArray)

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

  return (
    <Stack direction={props.direction ? props.direction : "row"}>
      {multiple ? (
        <Checkbox
          size={props.size ? props.size : "md"}
          onChange={handleCheckAll}
          isChecked={allIsChecked}
          isIndeterminate={
            items.some((item) => item.isChecked) && !allIsChecked
          }
          colorScheme={props.colorScheme ? props.colorScheme : "primary"}
          margin={props.margin ? props.margin : 0}
          marginTop={props.marginTop ? props.marginTop : 0}
          marginLeft={props.marginLeft ? props.marginLeft : 0}
          marginRight={props.marginRight ? props.marginRight : 0}
          marginBottom={props.marginBottom ? props.marginBottom : 0}
          padding={props.padding ? props.padding : 0}
          paddingTop={props.paddingTop ? props.paddingTop : 0}
          paddingLeft={props.paddingLeft ? props.paddingLeft : 0}
          paddingRight={props.paddingRight ? props.paddingRight : 0}
          paddingBottom={props.paddingBottom ? props.paddingBottom : 0}
          spacing={props.spacing ? props.spacing : 0}
          justifyContent={
            props.justifyContent ? props.justifyContent : "flex-start"
          }
          alignItems={props.alignItems ? props.alignItems : "center"}
          width={props.width ? props.width : "auto"}
          height={props.height ? props.height : "auto"}
          backgroundColor={
            props.backgroundColor ? props.backgroundColor : "transparent"
          }
        >
          tous les éléments
        </Checkbox>
      ) : null}

      {items.map((item) => (
        <Checkbox
          size={props.size ? props.size : "md"}
          key={item.id}
          isChecked={item.isChecked}
          onChange={() => handleCheck(item.id)}
          colorScheme={props.colorScheme ? props.colorScheme : "primary"}
          margin={props.margin ? props.margin : 0}
          marginTop={props.marginTop ? props.marginTop : 0}
          marginLeft={props.marginLeft ? props.marginLeft : 0}
          marginRight={props.marginRight ? props.marginRight : 0}
          marginBottom={props.marginBottom ? props.marginBottom : 0}
          padding={props.padding ? props.padding : 0}
          paddingTop={props.paddingTop ? props.paddingTop : 0}
          paddingLeft={props.paddingLeft ? props.paddingLeft : 0}
          paddingRight={props.paddingRight ? props.paddingRight : 0}
          paddingBottom={props.paddingBottom ? props.paddingBottom : 0}
          spacing={props.spacing ? props.spacing : 0}
          justifyContent={
            props.justifyContent ? props.justifyContent : "flex-start"
          }
          alignItems={props.alignItems ? props.alignItems : "center"}
          width={props.width ? props.width : "auto"}
          height={props.height ? props.height : "auto"}
          backgroundColor={
            props.backgroundColor ? props.backgroundColor : "transparent"
          }
        >
          {item.name}
        </Checkbox>
      ))}
    </Stack>
  )
}
