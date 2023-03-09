// @ts-ignore
import { AcsPaginate, AcsPaginateSecondary } from "@akkurateio/components"
import {
  AisChevronDown,
  AisChevronSort,
  AisChevronUp,
  AisClose,
} from "@akkurateio/icons"
import {
  Box,
  Flex,
  HStack,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react"
import React from "react"
import { useTable } from "react-table"

interface Iprops {
  columns: {
    Header: string
    accessor: string
    withSort: boolean
    Cell?: (props: any) => JSX.Element | null
  }[]
  data: any[]
  selectedColumn: (id: string) => void
  sortByAcs: boolean
  setSortByAcs: (value: boolean) => void
  selected: string
  paginate: number
  setPaginate: (value: number) => void
  total: number
  size?: "sm" | "md" | "lg" | string
  borderHeaderWidth?: string
  borderColumnWidth?: string
  variant?: "simple" | "striped" | "unstyled"
  columnFontSize?:
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
  columnTitleFontSize?:
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
  backgroundBoxColor?: string
  borderBoxColor?: string
  TheadBackgroundColor?: string
  boxRounded?: string
  borderBoxWidth?: string
  boxSize?: string
}

export const AcsDatagrid: React.FC<Iprops> = ({
  columns,
  data,
  selectedColumn,
  sortByAcs,
  setSortByAcs,
  selected,
  paginate,
  setPaginate,
  total,
  boxSize = "16px",
  size = "md",
  columnTitleFontSize = "xs",
  columnFontSize = "2xs",
  isLoading = false,
  borderHeaderWidth = "",
  borderColumnWidth = "",
  variant = "striped",
  backgroundBoxColor = "",
  borderBoxColor = "",
  borderBoxWidth = "",
  boxRounded = "",
  TheadBackgroundColor = "white",
}: Iprops) => {
  const handleSort = (id: string) => {
    selectedColumn(id)
    setSortByAcs(!sortByAcs)
  }
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  const screenSize = useBreakpointValue({ base: "base", md: "md", lg: "lg" })

  const SortByAsc = (column: any) => {
    if (selected === column.id && sortByAcs) {
      return (
        <HStack spacing={2}>
          <AisChevronUp
            ml={5}
            boxSize={boxSize}
            onClick={() => handleSort(column.id)}
            cursor={"pointer"}
          />
          <AisClose
            boxSize={boxSize}
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
            boxSize={boxSize}
            onClick={() => handleSort(column.id)}
            cursor={"pointer"}
          />
          <AisClose
            boxSize={boxSize}
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
            boxSize={boxSize}
            onClick={() => handleSort(column.id)}
            cursor={"pointer"}
          />
          <Box w={boxSize} />
        </HStack>
      )
    }
  }

  return isLoading ? (
    <Spinner alignSelf={"center"} />
  ) : (
    <>
      <Box
        w={"full"}
        bg={backgroundBoxColor}
        borderColor={borderBoxColor}
        borderWidth={borderBoxWidth}
        rounded={boxRounded}
        h={"full"}
        overflow={"auto"}
        sx={{
          "&::-webkit-scrollbar-thumb": {
            rounded: "10px",
          },
          "&::-webkit-scrollbar": {},
        }}
      >
        <Table
          size={size}
          width={"full"}
          variant={variant}
          {...getTableProps()}
        >
          <Thead
            zIndex={1}
            position={"sticky"}
            top={0}
            bg={TheadBackgroundColor}
          >
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th
                    fontSize={columnTitleFontSize}
                    borderWidth={borderHeaderWidth}
                    {...column.getHeaderProps()}
                  >
                    <Flex
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      {column.render("Header")}
                      {/*// @ts-ignore*/}
                      {!(column.withSort === false) && SortByAsc(column)}
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
                        fontSize={columnFontSize}
                        wordBreak={"break-word"}
                        whiteSpace={"normal"}
                        borderWidth={borderColumnWidth}
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
      </Box>
      {total > 1 && (
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
      )}
    </>
  )
}

export default AcsDatagrid
