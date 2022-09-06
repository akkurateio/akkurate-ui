import {
  AcsCarousel,
  AcsDrawer,
  AcsDropzone,
  AcsModal,
  AcsModalAlert,
  AcsPaginate,
  AcsPaginateSecondary,
  AcsPopover,
  AcsTabs,
} from "@akkurateio/components"
import {
  AcsRadioGroup,
  AcsSelect,
  InputAutocomplete,
  InputColor,
  InputDate,
  InputFile,
  InputNumber,
  InputPassword,
  InputPin,
  InputSearch,
  InputText,
  InputTextArea,
  InputTime,
} from "@akkurateio/forms"
import {
  Box,
  Button,
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

  const [textarea, setTextarea] = useState("Lorem ipsum dolor")

  const [pin, setPin] = useState("1234567")

  const [number, setNumber] = useState<string | number>(0)

  const [modal, setModal] = useState(false)

  const [drawer, setDrawer] = useState(false)

  const [alert, setAlert] = useState(false)

  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState<string[]>([])

  const [time, setTime] = useState("00:00")

  const [date, setDate] = useState("2022-09-01")

  const [page, setPage] = useState(1)

  const [file, setFile] = useState<FileList | null>(null)

  file && file.length > 0 && console.log(file[0])

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
        <InputText
          isRequired
          label={"Input Text"}
          defaultValue={text}
          handleChange={setText}
          hint={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ut sequi esse laborum ipsam dolorem aspernatur cupiditate. Earum, id!"
          }
          error={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          isInvalid={text.length < 18}
        />

        <InputPassword
          label={"Mot de passe"}
          hint={"Ici tu dois rentrer ton mot de passe."}
          error={"Ah bah non c'est trop court."}
          value={password}
          handleChange={(pw: string) => setPassword(pw)}
          isInvalid={password.length < 8}
        />

        <InputColor
          label={"Couleur"}
          hint={"Ici tu dois rentrer ta couleur préférée."}
          error={"Ah bah non c'est trop court."}
          value={color}
          handleChange={setColor}
          isInvalid={color.length < 3}
        />

        <InputTextArea
          label={"Input Text Area"}
          value={textarea}
          handleChange={setTextarea}
          hint={
            "Lorem ipsum dolor sit amet consectetur adipisicing elitae maiores ut sequi esse laborum ipsam dolorem aspernatur cupiditate. Earum, id!"
          }
          error={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          autoResize={true}
        />

        <InputPin
          hint={"Ici tu dois rentrer ton mot de passe."}
          error={"Ah bah non c'est trop court."}
          value={pin}
          handleChange={setPin}
          pinNumber={7}
        />

        <Box width={"200px"}>
          <InputNumber
            label={"Input Number"}
            hint={"Ici tu dois rentrer ton mot de passe."}
            error={"Ah bah non c'est trop court."}
            value={number}
            handleChange={setNumber}
            isInvalid={number < 8}
            min={-100}
            max={100}
            allowMouseWheel={true}
          />

          <Button onClick={() => setModal(true)}>open modal</Button>

          <AcsModal
            title={"Modal"}
            isOpen={modal}
            onClose={() => setModal(false)}
            hasCloseBtn={true}
            bg={"primary.500"}
            body={
              <Box>
                <Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quisquam, perspiciatis consequatur vero itaque ducimus aliquam
                  hic illum voluptates quas a et dignissimos quia repellat iste
                  sequi non ipsum minima sint! Perferendis delectus nesciunt
                  ratione sit quasi sunt consequatur error itaque, possimus
                  architecto illo cum maiores minima quia dolor. Eaque ut ea
                  saepe voluptates odio rem ipsam, veritatis non animi.
                  Repellat? Voluptatem, minus aliquid sed vel neque natus omnis
                  placeat, quo possimus repellendus voluptate aut blanditiis
                  debitis odio enim, nulla deserunt. Beatae repellat alias
                  quidem laborum odit dolore corporis tenetur autem.
                  Reprehenderit consequatur nihil mollitia, vitae tenetur nulla
                  architecto esse itaque eum? Eaque fuga similique commodi
                  blanditiis eius animi molestiae facere quasi quibusdam saepe
                  possimus, consequatur beatae, nam tenetur tempore ipsa! Sunt
                  praesentium explicabo repellat, possimus tempore ut similique,
                  quaerat necessitatibus culpa sapiente quas cupiditate optio.
                  Asperiores, ea omnis! Cum, eaque. Ratione fugit doloribus
                  dignissimos quisquam nihil et similique at totam! Maiores
                  nobis quidem deserunt ipsam culpa delectus consectetur
                  recusandae illo harum eum similique accusamus veritatis
                  quisquam eligendi quis iste eaque dolorum est, dolores
                  laudantium sapiente? Laudantium quae excepturi quasi sequi!
                </Text>
              </Box>
            }
            footer={
              <Flex justifyContent={"space-between"} width={"full"}>
                <Button onClick={() => setModal(false)}>Close</Button>
                <Button onClick={() => console.log(false)}>Truc</Button>
              </Flex>
            }
            size={"lg"}
          />

          <Button onClick={() => setDrawer(true)}>open drawer</Button>

          <AcsDrawer
            title={"Drawer"}
            isOpen={drawer}
            onClose={() => setDrawer(false)}
            body={
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                incidunt maxime aspernatur tenetur distinctio nobis in
                recusandae? Repellat nihil placeat possimus provident ex sint
                fugiat, nam esse, perferendis tempora ipsam! Possimus, sint ea
                assumenda similique esse perferendis libero sed, molestiae nobis
                molestias veritatis beatae maxime! Autem sed impedit tempora
                harum, quasi aspernatur hic deserunt earum sapiente, placeat a
                error quibusdam? Accusantium, ut, quasi maxime expedita
                quisquam, nesciunt odio maiores iste vero nulla quos at neque
                sunt magni saepe ex hic consequuntur sapiente soluta dolorum
                numquam a dicta iure. Repellendus, dolor! Asperiores voluptatum
                nam laborum neque minima, eligendi molestias nulla blanditiis,
                aspernatur explicabo hic corporis modi. Repudiandae, at tempora
                optio aliquam quae harum voluptatum tenetur eius numquam
                necessitatibus saepe, molestiae id.
              </Text>
            }
            footer={
              <Flex justifyContent={"space-between"} width={"full"}>
                <Button onClick={() => setDrawer(false)}>Close</Button>
                <Button onClick={() => console.log("coucou from drawer")}>
                  Truc
                </Button>
              </Flex>
            }
          />

          <Button onClick={() => setAlert(!alert)}>Open Alert Dialog</Button>

          <AcsModalAlert
            isOpen={alert}
            onClose={() => setAlert(false)}
            action={() => console.log("coucou from alert")}
            body={
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus nulla nobis deserunt inventore placeat asperiores
                nihil error dolores distinctio laudantium ipsum, assumenda iure
                numquam. Totam dolorum id ullam eaque reiciendis.
              </Text>
            }
            bg={"red.100"}
            size={"4xl"}
          />

          <AcsPopover
            body={<Text>Coucou</Text>}
            triggerBtnClosed={<Button>Ouvre</Button>}
            triggerBtnOpened={<Button>Ferme</Button>}
            action={() => console.log("coucou from popover")}
          />
        </Box>
        <InputAutocomplete
          label={"Input Autocomplete"}
          hint={
            "you can type something in and you will be proposed a set of words to choose from."
          }
          value={search}
          handleChange={setSearch}
          resultsArray={searchResults}
        />

        <AcsTabs
          tabNameArray={["Coucou", "Hola", "Hey"]}
          tabContentArray={[
            <Text key={0}>Hello 1</Text>,
            <Text key={1}>Hello 2</Text>,
            <Text key={2}>Hello 3</Text>,
          ]}
        />
        <Box width={"400px"}>
          <AcsCarousel
            cardsArray={[
              <Flex
                key={0}
                bg={"gray.100"}
                shadow={"inner"}
                h={"200px"}
                w={"120px"}
                rounded={"sm"}
                p={2}
              >
                <Text>Hello 1</Text>
              </Flex>,
              <Flex
                key={1}
                bg={"gray.100"}
                shadow={"inner"}
                h={"200px"}
                w={"120px"}
                rounded={"sm"}
                p={2}
              >
                <Text>Hello 2</Text>
              </Flex>,
              <Flex
                key={2}
                bg={"gray.100"}
                shadow={"inner"}
                h={"200px"}
                w={"120px"}
                rounded={"sm"}
                p={2}
              >
                <Text>Hello 3</Text>
              </Flex>,
            ]}
          />
        </Box>

        <Box width={"400px"}>
          <InputTime
            label={"Input Time"}
            value={time}
            handleChange={setTime}
            disabledHours={[1, 2, 3, 4, 5, 6, 7, 8, 18, 19, 20, 21, 22, 23]}
            minuteStep={15}
            min={"09:00"}
            max={"17:00"}
          />

          <InputDate
            label={"Input Date"}
            handleChange={setDate}
            value={date}
            // minDate={"2022-08-15"}
            maxDate={"2022-10-15"}
            disabledDays={[0, 3, 6]}
            // disabledDates={["2022-09-05", "2022-09-15", "2022-09-22"]}
          />

          <InputSearch
            label={"Input Search"}
            value={search}
            handleChange={setSearch}
          />

          <AcsRadioGroup
            label={"Input Search"}
            value={search}
            handleChange={setSearch}
            valuesArray={[
              { value: "1", label: "Hello 1" },
              { value: "2", label: "Hello 2" },
              { value: "3", label: "Hello 3" },
              { value: "4", label: "Hello 4" },
            ]}
            direction={"horizontal"}
          />

          <AcsSelect
            label={"Input Select"}
            placeholder={"Select"}
            handleChange={setSearch}
            valuesArray={[
              { value: "1", label: "Hello 1" },
              { value: "2", label: "Hello 2" },
              { value: "3", label: "Hello 3" },
              { value: "4", label: "Hello 4" },
            ]}
            variant={"flushed"}
          />
        </Box>

        <Box bg={"white"} p={10} experimental_spaceY={20}>
          <AcsPaginate max={150} current={page} handleChangePage={setPage} />

          <AcsPaginateSecondary
            max={57}
            current={page}
            handleChangePage={setPage}
          />

          <InputFile
            label={"Input File"}
            value={file}
            handleChange={setFile}
            accept={"image/jpg"}
          />
        </Box>

        <AcsDropzone />
      </VStack>
    </Container>
  )
}

export default App
