import { AcsInputFile, AcsInputNumber, AcsInputPhone } from "@akkurateio/forms"
import {
  Container,
  Flex,
  Heading,
  Text,
  useTheme,
  VStack,
} from "@chakra-ui/react"
import Head from "next/head"
import { useEffect, useState } from "react"
import ToggleColorMode from "../components/ToggleColorMode"

function App() {
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

  console.log(file)

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

      <VStack mt={10} spacing={10} p={4} mb={4000}>
        <Text>Hello you</Text>

        <AcsInputNumber value={number} handleChange={setNumber} />

        <AcsInputPhone value={phone} handleChange={setPhone} />

        <AcsInputFile value={file} multiple handleChange={setFile} />
      </VStack>
    </Container>
  )
}

export default App
