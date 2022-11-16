import {
  AcsInputColor,
  AcsInputDate,
} from "@akkurateio/forms"
import {
  Box, Button,
  Container,
  Flex,
  Heading, HStack,
  Text,
  useTheme,
} from "@chakra-ui/react"
import Head from "next/head"
import { useEffect, useState } from "react"
import ToggleColorMode from "../components/ToggleColorMode"
import {AcsPaginate, Tree} from "@akkurateio/components";

function App() {
  const tree = [
    {
      id: 1,
      name: "Dashboard",
      children: [
        {
          id: 2,
          name: "Subvitamine",
          children: [
            {
              id: 3,
              name: "jean",
              children: [
                {
                  id: 4,
                  name: "thibaut",
                  children: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 5,
      name: "laurent",
      children: [
      ]

    },
    {
      id: 6,
      name: "vincent",
      children: [
        { id: 7, name: "je sais pas", children: [] },
        { id: 8, name: "toujours pas", children: [] },
        { id: 9, name: "j'arrete la", children: [
            { id: 10, name: "je sais pas", children: [] },
          ] },
      ]
    }
  ]
  const theme = useTheme()

  const [text, setText] = useState("Salut à tous")
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
    <Container maxW={"container.xl"}>
      <Head>
        <title>Akkurate UI - Testing</title>
      </Head>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading fontSize={"3xl"} fontWeight={600} py={2}>
          Test components
        </Heading>

        <ToggleColorMode />
      </Flex>
      <AcsInputDate value={date} handleChange={ setDate } />

     <AcsInputColor handleChange={ setColor } value={ color }  />
      <AcsPaginate max={100 } current={1} handleChangePage={ setPage } />
      <Tree tree={tree} />
    </Container>
  )
}

export default App
