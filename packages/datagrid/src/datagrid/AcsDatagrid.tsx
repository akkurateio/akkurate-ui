import React, { useEffect, useState } from "react"
import {
  Box,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
  Button,
  VStack,
  useBreakpointValue,
  Spinner,
  Text,
} from "@chakra-ui/react"
import { useTable } from "react-table"
import {
  AisChevronDown,
  AisChevronSort,
  AisChevronUp,
  AisClose,
} from "@akkurateio/icons"
import { AcsPaginate, AcsPaginateSecondary } from "@akkurateio/components"

interface Iprops {
  columns: {
    Header: string
    accessor: string
    withSort: boolean
    Cell?: (props: any) => JSX.Element | null
  }[]
  data: any[]
  selectedColonne: (id: string) => void
  sortByAcs: boolean
  setSortByAcs: (value: boolean) => void
  selected: string
  paginate: number
  setPaginate: (value: number) => void
  total: number
  size?: "sm" | "md" | "lg" | string
  borderHeaderWith?: string
  borderColonneWith?: string
  variant?: "simple" | "striped" | "unstyled"
  colonneFontSize?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | string
  colonneTitleFontSize?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | string
  isLoading?: boolean
}

export const AcsDatagrid: React.FC<Iprops> = ({
  columns,
  data,
  selectedColonne,
  sortByAcs,
  setSortByAcs,
  selected,
  paginate,
  setPaginate,
  total,
  size = "md",
  colonneTitleFontSize = "sm",
  colonneFontSize = "xs",
  isLoading = false,
  borderHeaderWith = "",
  borderColonneWith = "",
  variant = "striped",
}: Iprops) => {
  const handleSort = (id: string) => {
    selectedColonne(id)
    setSortByAcs(!sortByAcs)
  }
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  const screenSize = useBreakpointValue({ base: "base", md: "md", lg: "lg" })

  const SortByAsc = (column: any, columns: any) => {
    if (selected === column.id && sortByAcs) {
      return (
        <HStack spacing={2}>
          <AisChevronUp
            ml={5}
            boxSize={"16px"}
            onClick={() => handleSort(column.id)}
            cursor={"pointer"}
          />
          <AisClose
            boxSize={"16px"}
            cursor={"pointer"}
            onClick={() => handleSort("")}
          />
        </HStack>
      )
    } else if (selected === column.id && !sortByAcs) {
      return (
        <HStack spacing={2}>
          <AisChevronDown
            ml={5}
            boxSize={"16px"}
            onClick={() => handleSort(column.id)}
            cursor={"pointer"}
          />
          <AisClose
            boxSize={"16px"}
            cursor={"pointer"}
            onClick={() => handleSort("")}
          />
        </HStack>
      )
    } else if (selected !== column.id) {
      return (
        <HStack spacing={2}>
          <AisChevronSort
            ml={5}
            boxSize={"16px"}
            onClick={() => handleSort(column.id)}
            cursor={"pointer"}
          />
          <Box w={"16px"} />
        </HStack>
      )
    }
  }

  return isLoading ? (
    <Spinner alignSelf={"center"} />
  ) : (
    <Box w={"full"} position={"relative"}>
      <VStack spacing={3}>
        <TableContainer width={"full"}>
          <Table
            size={size}
            width={"full"}
            variant={variant}
            {...getTableProps()}
          >
            <Thead position={"sticky"} top={0} width={"full"}>
              {headerGroups.map((headerGroup) => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <Th
                      fontSize={colonneTitleFontSize}
                      borderWidth={borderHeaderWith}
                      {...column.getHeaderProps()}
                    >
                      <Flex
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        {column.render("Header")}
                        {/*// @ts-ignore*/}
                        {!(column.withSort === false) &&
                          SortByAsc(column, columns)}
                      </Flex>
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody
              width={"full"}
              overflow={{ base: "auto" }}
              {...getTableBodyProps()}
            >
              {rows.map((row) => {
                prepareRow(row)
                return (
                  <Tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <Td
                          fontSize={colonneFontSize}
                          wordBreak={"break-word"}
                          whiteSpace={"normal"}
                          borderWidth={borderColonneWith}
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </Td>
                      )
                    })}
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <HStack width={"full"} justifyContent={"space-between"}>
          <Box>
            <AcsPaginate
              max={total}
              current={paginate}
              handleChangePage={setPaginate}
            />
          </Box>
          {screenSize !== "base" && (
            <Box>
              <AcsPaginateSecondary
                max={total}
                current={paginate}
                handleChangePage={setPaginate}
              />
            </Box>
          )}
        </HStack>
      </VStack>
    </Box>
  )
}

export default AcsDatagrid
