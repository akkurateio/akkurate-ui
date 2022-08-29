// @ts-ignore
import { AcsDrawer, AcsModal, AcsModalAlert } from "@akkurateio/components"
import {
  InputColor,
  InputNumber,
  InputPassword,
  InputPin,
  InputText,
  InputTextArea,
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
import { useState } from "react"
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

      <VStack mt={10} spacing={10} p={4}>
        <InputText
          isRequired
          label={"Input Text"}
          defaultValue={text}
          onTextChange={setText}
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
          onPasswordChange={setPassword}
          isInvalid={password.length < 8}
        />

        <InputColor
          label={"Couleur"}
          hint={"Ici tu dois rentrer ta couleur préférée."}
          error={"Ah bah non c'est trop court."}
          value={color}
          onColorChange={setColor}
          isInvalid={color.length < 3}
        />

        <InputTextArea
          label={"Input Text Area"}
          value={textarea}
          onTextChange={setTextarea}
          hint={
            "Lorem ipsum dolor sit amet consectetur adipisicing elitae maiores ut sequi esse laborum ipsam dolorem aspernatur cupiditate. Earum, id!"
          }
          error={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          autoResize={true}
        />

        <InputPin
          label={"Pin"}
          hint={"Ici tu dois rentrer ton mot de passe."}
          error={"Ah bah non c'est trop court."}
          value={pin}
          onPinChange={setPin}
          pinNumber={7}
        />

        <Box width={"200px"}>
          <InputNumber
            label={"Input Number"}
            hint={"Ici tu dois rentrer ton mot de passe."}
            error={"Ah bah non c'est trop court."}
            value={number}
            onNumberChange={setNumber}
            isInvalid={number < 8}
            min={-100}
            max={100}
            step={2}
            // precision={2}
            // allowMouseWheel={true}
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
                <Button onClick={() => console.log(false)}>Truc</Button>
              </Flex>
            }
          />

          <AcsModalAlert />
        </Box>
      </VStack>
    </Container>
  )
}

export default App
