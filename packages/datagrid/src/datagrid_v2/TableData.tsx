import { TableCellProps, Td, Text, TextProps, Tooltip } from "@chakra-ui/react"
import React, { FunctionComponent } from "react"

export interface ITableDataProps {
  jsxElement?: JSX.Element
  label?: string
  withTooltip?: boolean
  cellStyle?: TableCellProps
  cellLabelStyle?: TextProps
}

export const TableData: FunctionComponent<ITableDataProps> = ({
  jsxElement,
  label,
  withTooltip,
  cellStyle,
  cellLabelStyle,
}) => {
  if (!label && !jsxElement) {
    return <Td {...cellStyle}>No Content</Td>
  }

  if (jsxElement) {
    return <Td {...cellStyle}>{jsxElement}</Td>
  }

  return (
    <Tooltip
      label={label}
      openDelay={1400}
      size={"sm"}
      isDisabled={!withTooltip}
    >
      <Td {...cellStyle}>
        <Text {...cellLabelStyle}>{label}</Text>
      </Td>
    </Tooltip>
  )
}
