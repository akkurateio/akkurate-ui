import React, { useEffect, useState } from "react"
import FormControlLayout from "@akkurateio/forms/src/FormControlLayout"

import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"
import { useTable } from "react-table"
import { AisChevronDown, AisChevronSort, AisChevronUp } from "@akkurateio/icons"

interface Iprops {
  columns: any[]
  data: any[]
  selectedColonne: (id?: string) => void
  sortByAcs: boolean
  setSortByAcs: (value: boolean) => void
  selected: string
}

export const AcsDatagrid: React.FC<Iprops> = ({
  columns,
  data,
  selectedColonne,
  sortByAcs,
  setSortByAcs,
  selected,
}: Iprops) => {
  const handleSort = (id: string) => {
    selectedColonne(id)
    setSortByAcs(!sortByAcs)
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <FormControlLayout>
      <TableContainer>
        <Table variant={"unstyled"} {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th borderWidth={"1px"} {...column.getHeaderProps()}>
                    {column.render("Header")}
                    {selected === column.id && sortByAcs ? (
                      <AisChevronUp
                        ml={5}
                        onClick={() => handleSort(column.id)}
                        cursor={"pointer"}
                      />
                    ) : selected === column.id && !sortByAcs ? (
                      <AisChevronDown
                        ml={5}
                        onClick={() => handleSort(column.id)}
                        cursor={"pointer"}
                      />
                    ) : (
                      <AisChevronSort
                        ml={5}
                        onClick={() => handleSort(column.id)}
                        cursor={"pointer"}
                      />
                    )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>

          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td borderWidth={"1px"} {...cell.getCellProps()}>
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
    </FormControlLayout>
  )
}

export default AcsDatagrid
