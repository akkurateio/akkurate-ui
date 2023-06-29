import { AisChevronDown, AisChevronSort, AisChevronUp } from "@akkurateio/icons"
import {
  Flex,
  IconButton,
  TableColumnHeaderProps,
  Text,
  TextProps,
  Th,
} from "@chakra-ui/react"
import React, { FunctionComponent, useEffect, useState } from "react"

export interface ITableHeadProps {
  jsxElement?: JSX.Element
  label?: string
  code: string
  withSort?: boolean
  headerStyle?: TableColumnHeaderProps
  headerLabelStyle?: TextProps
}

interface ISelectionProps {
  selectedColumn?: string
  setSelectedColumn?: (code: string) => void
}

type IProps = ITableHeadProps & ISelectionProps

export const TableHead: FunctionComponent<IProps> = ({
  jsxElement,
  label,
  code,
  withSort,
  headerStyle,
  headerLabelStyle,
  selectedColumn,
  setSelectedColumn,
}) => {
  const [isDesc, setIsDesc] = useState<boolean | undefined>(undefined)

  const handleToggleSelection = () => {
    if (!setSelectedColumn) {
      return
    }

    if (selectedColumn === code || selectedColumn === `-${code}`) {
      setIsDesc(!isDesc)
    } else {
      setIsDesc(true)
    }

    setSelectedColumn(!!isDesc ? code : `-${code}`)
  }

  const getSortIcon = () => {
    if (isDesc === false) {
      return <AisChevronUp boxSize={"16px"} />
    }

    if (isDesc === true) {
      return <AisChevronDown boxSize={"16px"} />
    }

    if (isDesc === undefined) {
      return <AisChevronSort boxSize={"16px"} />
    }

    return <></>
  }

  useEffect(() => {
    if (selectedColumn !== code && selectedColumn !== `-${code}`) {
      setIsDesc(undefined)
    }
  }, [selectedColumn, code])

  if (!jsxElement && !label) {
    return <Th {...headerStyle}>No Content</Th>
  }

  if (jsxElement) {
    return <Th {...headerStyle}>{jsxElement}</Th>
  }

  return (
    <Th {...headerStyle}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Text {...headerLabelStyle}>{label}</Text>

        {withSort && (
          <IconButton
            onClick={handleToggleSelection}
            aria-label={"Sort"}
            variant={"ghost"}
            size={"xs"}
            rounded={"full"}
            colorScheme={"neutral"}
            icon={getSortIcon()}
          />
        )}
      </Flex>
    </Th>
  )
}
