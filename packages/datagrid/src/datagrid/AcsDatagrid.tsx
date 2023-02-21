import React from "react"
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
} from "@chakra-ui/react"
import { useTable } from "react-table"
import {
  AisChevronDown,
  AisChevronSort,
  AisChevronUp,
  AisClose,
} from "@akkurateio/icons"
import { AcsPaginate, AcsPaginateSecondary } from "@akkurateio/components"
import { AcsInputSearch } from "@akkurateio/forms"

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
  isOpen: boolean
  setIsOpen: (value: boolean) => void
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
  isOpen,
  setIsOpen,
}: Iprops) => {
  const handleSort = (id: string) => {
    selectedColonne(id)
    setSortByAcs(!sortByAcs)
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  const screenSize = useBreakpointValue({ base: "base", md: "md", lg: "lg" })

  return (
    <Box w={"full"} position={"relative"}>
      {/*{isOpen && (*/}
      {/*  <Flex*/}
      {/*    zIndex={1}*/}
      {/*    position={"absolute"}*/}
      {/*    top={0}*/}
      {/*    left={0}*/}
      {/*    right={0}*/}
      {/*    bottom={0}*/}
      {/*    alignItems={"center"}*/}
      {/*    justifyContent={"center"}*/}
      {/*  >*/}
      {/*    <HStack*/}
      {/*      maxW={"md"}*/}
      {/*      spacing={3}*/}
      {/*      p={3}*/}
      {/*      rounded={"md"}*/}
      {/*      bg={"gray.700"}*/}
      {/*      color={"white"}*/}
      {/*      boxShadow={"lg"}*/}
      {/*      alignItems={"center"}*/}
      {/*    >*/}
      {/*      <AisSearch boxSize={"24px"} />*/}
      {/*      <AcsInputSearch*/}
      {/*        colorScheme={"whiteAlpha"}*/}
      {/*        variant={"solid"}*/}
      {/*        placeholder={"Rechercher par mot-clé"}*/}
      {/*        // onChange={(e) => handleChange(e.target.value)}*/}
      {/*        handleChange={handleChange}*/}
      {/*      ></AcsInputSearch>*/}
      {/*      <Button variant={"unstyled"} size={"none"} type={"button"}>*/}
      {/*        <AisClose boxSize={"24px"} onClick={() => setIsOpen(!isOpen)} />*/}
      {/*      </Button>*/}
      {/*    </HStack>*/}
      {/*  </Flex>*/}
      {/*)}*/}
      <VStack spacing={3}>
        <TableContainer width={"full"}>
          <Table width={"full"} variant={"unstyled"} {...getTableProps()}>
            <Thead position={"sticky"} top={0} width={"full"}>
              {headerGroups.map((headerGroup) => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <Th borderWidth={"1px"} {...column.getHeaderProps()}>
                      <Flex
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        {column.render("Header")}
                        {selected === column.id && sortByAcs ? (
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
                        ) : selected === column.id && !sortByAcs ? (
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
                        ) : (
                          <AisChevronSort
                            ml={5}
                            boxSize={"16px"}
                            onClick={() => handleSort(column.id)}
                            cursor={"pointer"}
                          />
                        )}
                      </Flex>
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            {isOpen && (
              <Tbody p={0} width={"full"}>
                <Tr>
                  <Td
                    borderWidth={"1px"}
                    p={0}
                    backgroundColor={"red.200"}
                    colSpan={4}
                  >
                    <HStack
                      spacing={3}
                      p={3}
                      bg={"gray.700"}
                      color={"white"}
                      boxShadow={"lg"}
                      alignItems={"center"}
                    >
                      <AcsInputSearch
                        w={"full"}
                        colorScheme={"whiteAlpha"}
                        variant={"solid"}
                        placeholder={"Rechercher par mot-clé"}
                        handleChange={handleChange}
                        boxShadow={"none"}
                      />

                      <Button
                        variant={"unstyled"}
                        size={"none"}
                        type={"button"}
                      >
                        <AisClose
                          boxSize={"24px"}
                          onClick={() => setIsOpen(!isOpen)}
                        />
                      </Button>
                    </HStack>
                  </Td>
                </Tr>
              </Tbody>
            )}
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
                          wordBreak={"break-word"}
                          whiteSpace={"normal"}
                          borderWidth={"1px"}
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
