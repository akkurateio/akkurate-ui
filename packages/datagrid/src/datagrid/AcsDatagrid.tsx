import React, { useState } from "react"
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

interface Iprops {
  headers: { id: string | number; column: string }[]
  lines: any[]
}

export const AcsDatagrid: React.FC<Iprops> = ({ headers, lines }) => {
  // const [columns, setColums] = useState<any>([])

  // faire une boucle pour récupérer les colonnes de la ligne
  const indexLine = (lines: any[]) => {
    const columns: any = []
    lines.map((line) => {
      columns.push(Object.keys(line))
    })
    return columns
    //find the index of the column whre startwith column
  }

  console.log(indexLine(lines))

  return (
    <FormControlLayout>
      <TableContainer w={"full"}>
        <Table w={"full"} variant={"unstyled"}>
          <Thead>
            <Tr>
              {headers.map((header, idx) => (
                <Th textAlign={"center"} borderWidth={"1px"} key={idx}>
                  {header.column}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody w={"full"}>
            {/*{lines.map((line, idx) => (*/}
            {/*  <Tr key={idx}>*/}
            {/*    <Td textAlign={"center"} borderWidth={"1px"}>*/}
            {/*      {line.column1}*/}
            {/*    </Td>*/}
            {/*<Td textAlign={"center"} borderWidth={"1px"}>*/}
            {/*  {line.nom}*/}
            {/*</Td>*/}
            {/*<Td textAlign={"center"} borderWidth={"1px"}>*/}
            {/*  {line.age}*/}
            {/*</Td>*/}
            {/*<Td textAlign={"center"} borderWidth={"1px"}>*/}
            {/*  {line.sexe}*/}
            {/*</Td>*/}
            {/*</Tr>*/}
            {/*))}*/}
          </Tbody>
        </Table>
      </TableContainer>
    </FormControlLayout>
  )
}

export default AcsDatagrid
