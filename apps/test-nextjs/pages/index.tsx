import { AcsDatagrid_v2 } from "@akkurateio/datagrid"
import { Heading, VStack } from "@chakra-ui/react"
import { useState } from "react"

function App() {
  const [htmlValue, setHtmlValue] = useState<string>("")

  const dateStyles = {
    arrowColor: "teal.400",
    hoverBg: "green.300",
    hoverColor: "green.900",
    selectedBg: "green.800",
    selectedColor: "green.100",
    otherMonthBg: "transparent",
    otherMonthColor: "green.700",
    currentMonthBg: "green.100",
    currentMonthColor: "green.700",
    disabledBg: "gray.200",
    disabledColor: "gray.700",
    //
    isResetable: false,
    isOtherMonthVisible: true,
    isCloseOnSelect: true,
  }

  const [column, setColumn] = useState("")
  const [page, setPage] = useState(1)

  return (
    <VStack width={"full"} spacing={20} p={10} h={"100vh"} overflow={"hidden"}>
      <Heading>Hello</Heading>

      <AcsDatagrid_v2
        total={10000}
        paginate={page}
        setPaginate={setPage}
        selectedColumn={column}
        setSelectedColumn={setColumn}
        isHeaderSticky
        tableStyle={{
          variant: "striped",
          colorScheme: "gray",
          size: "sm",
          bg: "white",
        }}
        headers={[
          {
            label: "Colonne 1",
            code: "code1",
            withSort: true,
            headerStyle: {
              w: 64,
            },
          },
          {
            label: "Colonne 2",
            code: "code2",
            withSort: true,
            headerStyle: {
              w: 64,
            },
          },
          {
            label: "Colonne 3",
            code: "code3",
            withSort: true,
          },
          {
            label: "Colonne 4",
            code: "code4",
            withSort: true,
          },
          {
            label: "Colonne 5",
            code: "code5",
            withSort: true,
          },
          {
            label: "Colonne 6",
            code: "code6",
            withSort: true,
          },
        ]}
        rows={[
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
          [
            {
              label: "label 1",
            },
            {
              label: "label 2",
            },
            {
              label: "label 3",
            },
            {
              label: "label 4",
            },
            {
              label: "label 5",
            },
            {
              label: "label 6",
            },
          ],
        ]}
      />
    </VStack>
  )
}

export default App
