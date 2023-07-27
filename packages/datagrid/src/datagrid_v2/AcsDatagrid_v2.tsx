// @ts-ignore
import { AcsPaginate, AcsPaginateSecondary } from "@akkurateio/components"
import {
  Box,
  Flex,
  HStack,
  Spinner,
  Table,
  TableProps,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react"
import React from "react"
import { ITableDataProps, TableData } from "./TableData"
import { ITableHeadProps, TableHead } from "./TableHead"

interface IProps {
  headers: ITableHeadProps[] | undefined
  rows: ITableDataProps[][] | undefined
  tableStyle?: TableProps
  isHeaderSticky?: boolean
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  selectedColumn?: string
  setSelectedColumn?: (code: string) => void
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  isLoading?: boolean
  total?: number
  paginate?: number
  setPaginate?: (value: number) => void
}

export const AcsDatagrid_v2: React.FC<IProps> = ({
  headers,
  rows,
  tableStyle,
  isHeaderSticky,
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  selectedColumn,
  setSelectedColumn,
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  isLoading,
  total,
  paginate,
  setPaginate,
}) => {
  return (
    <Flex flexDir={"column"} gap={2} w={"full"} h={"full"} overflow={"hidden"}>
      <Box flex={1} w={"full"} h={"full"} overflow={"auto"}>
        <Table {...tableStyle}>
          <Thead
            {...(isHeaderSticky
              ? {
                  position: "sticky",
                  top: 0,
                  zIndex: 1,
                  backgroundColor: "white",
                }
              : {})}
          >
            <Tr>
              {headers?.map((header, idx) => (
                <TableHead
                  {...header}
                  key={idx + header.code}
                  selectedColumn={selectedColumn}
                  setSelectedColumn={setSelectedColumn}
                />
              ))}
            </Tr>
          </Thead>

          <Tbody>
            {isLoading ? (
              <Tr>
                <Td colSpan={6}>
                  <Flex
                    flex={1}
                    w={"full"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Spinner alignSelf={"center"} />
                  </Flex>
                </Td>
              </Tr>
            ) : (
              rows?.map((row, index) => (
                <Tr key={`${index}-row`}>
                  {row?.map((data, idx) => (
                    <TableData {...data} key={`${index}-${idx}-data`} />
                  ))}
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </Box>
      {total && paginate && setPaginate && total > 1 && (
        <HStack width={"full"} justifyContent={"space-between"} flexShrink={0}>
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
      )}
    </Flex>
  )
}

export default AcsDatagrid_v2
