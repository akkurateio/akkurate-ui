import React from "react"
import FormControlLayout from "@akkurateio/forms/src/FormControlLayout"

import {
  Box,
  HStack,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
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
    columns?: { header: string; accessor: string }[]
  }[]
  data: any[]
  selectedColonne: (id?: string) => void
  sortByAcs: boolean
  setSortByAcs: (value: boolean) => void
  selected: string
  paginate: number
  setPaginate: (value: number) => void
  total: number
  handleChange: (value: string) => void
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
  handleChange,
}: Iprops) => {
  const handleSort = (id: string) => {
    selectedColonne(id)
    setSortByAcs(!sortByAcs)
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <FormControlLayout>
      <Box alignItems={"flex-end"} textAlign={"end"} right={0}>
        <Input
          type={"search"}
          onChange={(e) => handleChange(e.target.value)}
          w={150}
        ></Input>
      </Box>

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
                    {selected === column.id ? (
                      <AisClose
                        cursor={"pointer"}
                        onClick={() => handleSort("")}
                      />
                    ) : (
                      ""
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
      <HStack width={"full"} justifyContent={"space-between"}>
        <Box>
          <AcsPaginate
            max={total}
            current={paginate}
            handleChangePage={setPaginate}
          />
        </Box>
        <Box>
          <AcsPaginateSecondary
            max={total}
            current={paginate}
            handleChangePage={setPaginate}
          />
        </Box>
      </HStack>
    </FormControlLayout>
  )
}

export default AcsDatagrid
