import {
  AcsInputNumber,
  AcsInputPassword,
  AcsInputText,
  AcsInputTextArea,
  AcsInputSearch,
  AcsRadioSelectCard,
} from "@akkurateio/forms"
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  useTheme,
} from "@chakra-ui/react"
import Head from "next/head"
import { useEffect, useState } from "react"
import ToggleColorMode from "../components/ToggleColorMode"
import { AcsPaginate, AcsPdfViewer, AcsTree } from "@akkurateio/components"

function App() {
  const theme = useTheme()

  const [text, setText] = useState("")
  const [password, setPassword] = useState("trucbidule")
  const [color, setColor] = useState(theme.colors.primary[500])
  const [value, setValue] = useState(0)

  const [textarea, setTextarea] = useState("Lorem ipsum dolor")

  const [pin, setPin] = useState("1234567")

  const [number, setNumber] = useState<number>(0)

  const [modal, setModal] = useState(false)

  const [drawer, setDrawer] = useState(false)

  const [alert, setAlert] = useState(false)

  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState<string[]>([])

  const [time, setTime] = useState("00:00")

  const [date, setDate] = useState("2022-09-01")

  const [page, setPage] = useState<number | string>("1")

  const [file, setFile] = useState<FileList | File[] | null>(null)

  const [phone, setPhone] = useState("")

  useEffect(() => {
    if (search.length >= 3) {
      fetch(
        encodeURI(
          `https://api-adresse.data.gouv.fr/search/?q=${search}&limit=10`,
        ),
      )
        .then((res) => res.json())
        .then((data) =>
          setSearchResults(
            data.features.map((feature: any) => feature.properties.label),
          ),
        )
    }
  }, [search])

  console.log(page)

  return (
    <Box height={"600px"} width={"80%"} paddingTop={20} m={10}>
      {/*<Head>*/}
      {/*  <title>Akkurate UI - Testing</title>*/}
      {/*</Head>*/}
      {/*<Flex justifyContent={"space-between"} alignItems={"center"}>*/}
      {/*  <Heading fontSize={"3xl"} fontWeight={600} py={2}>*/}
      {/*    Test components*/}
      {/*  </Heading>*/}
      {/*  <ToggleColorMode />*/}
      {/*</Flex>*/}
      {/*<AcsInputDate value={date} handleChange={setDate} />*/}
      <AcsInputPassword />

      <Box height={"40px"} />

      <AcsRadioSelectCard
        contentArray={[
          {
            id: "1",
            body: (
              <Box width={"200px"} height={"auto"}>
                <Heading>Coucou</Heading>
                <Text>
                  il etait une fois dans une galaxie lointaine, très
                  lointaine....
                </Text>
                <Text fontSize={"sm"}>Taaan taaan tan tan tan tan taaaaan</Text>
              </Box>
            ),
          },
          {
            id: "2",
            body: (
              <Box width={"200px"} height={"auto"}>
                <Heading>Coucou</Heading>
              </Box>
            ),
          },
        ]}
        selectedCardId={page}
        setSelectedCardId={(id: number | string) => setPage(id)}
        justifyContent={"space-evenly"}
      />
      {/*<AcsInputColor handleChange={setColor} value={color} />*/}
      {/*<AcsPaginate max={100} current={1} handleChangePage={setPage} />*/}
      {/*<AcsTree tree={tree} />*/}
    </Box>
  )
}

export default App
