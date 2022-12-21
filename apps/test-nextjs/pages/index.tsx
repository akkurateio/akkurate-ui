import { Heading, useTheme, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"

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

  const [page, setPage] = useState<(number | string)[]>(["1"])

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

  const tree = [
    {
      id: 1,
      name: "Node 1",
      children: [
        {
          id: 2,
          name: "Node 1.1",
          children: [
            {
              id: 3,
              name: "Node 1.1.1",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Node 2",
      children: [
        {
          id: 5,
          name: "Node 2.1",
          children: [],
        },
      ],
    },
  ]

  const [currentItem, setCurrentItem] = useState<{
    id: string | number | null
    name: string | null
  }>({
    id: null,
    name: null,
  })

  return (
    <VStack width={"full"} spacing={20}>
      <Heading>Hello</Heading>
    </VStack>
  )
}

export default App
