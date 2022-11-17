import {
  AcsInputAutocomplete,
  AcsInputColor,
  AcsInputDate,
  AcsInputNumber,
  AcsInputPassword,
  AcsInputSearch,
  AcsInputText,
  AcsInputTextArea,
  AcsInputTime,
  AcsSlider,
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

  const [page, setPage] = useState(1)

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

  console.log(search)

  return (
    <Box height={"600px"} width={"full"} paddingTop={20} paddingLeft={20}>
      {/*<Head>*/}
      {/*  <title>Akkurate UI - Testing</title>*/}
      {/*</Head>*/}
      {/*<Flex justifyContent={"space-between"} alignItems={"center"}>*/}
      {/*  <Heading fontSize={"3xl"} fontWeight={600} py={2}>*/}
      {/*    Test components*/}
      {/*  </Heading>*/}
      <AcsSlider key={"slider"} value={value} onChange={setValue} />
      {/*  <ToggleColorMode />*/}
      {/*</Flex>*/}
      {/*<AcsInputDate value={date} handleChange={setDate} />*/}

      {/*<AcsInputColor handleChange={setColor} value={color} />*/}
      {/*<AcsPaginate max={100} current={1} handleChangePage={setPage} />*/}
      {/*<AcsTree tree={tree} />*/}
    </Box>
  )
}

export default App
