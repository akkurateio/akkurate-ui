import {
  InputColor,
  InputNumber,
  InputPassword,
  InputPin,
  InputText,
  InputTextArea,
} from "@akkurateio/forms"
import { Container, Flex, Heading, useTheme, VStack } from "@chakra-ui/react"
import { useState } from "react"
import ToggleColorMode from "./components/ToggleColorMode"
// import { Paginate } from "@akkurateio/components"

function App() {
  const theme = useTheme()

  const [text, setText] = useState(
    "trucbiduletrucbiduletrucbiduletrucbiduletrucbiduletrucbidule",
  )
  const [password, setPassword] = useState("trucbidule")
  const [color, setColor] = useState(theme.colors.primary[500])

  const [textarea, setTextarea] = useState(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  )

  const [pin, setPin] = useState("1234567")

  const [number, setNumber] = useState<string | number>(0)

  return (
    <Container maxW={"container.xl"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading fontSize={"3xl"} fontWeight={600} py={2}>
          Test components
        </Heading>

        <ToggleColorMode />
      </Flex>
      {/* <Paginate
          current={4}
          totalItems={100}
          max={200}
          handleChangePage={() => console.log("okk")}
        /> */}

      <VStack mt={10} spacing={10} p={4}>
        <InputText
          isRequired
          label={"Input Text"}
          defaultValue={text}
          onTextChange={setText}
          hint={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui soluta sint voluptatibus similique alias doloremque impedit recusandae, repudiandae maiores ut sequi esse laborum ipsam dolorem aspernatur cupiditate. Earum, id!"
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
          isInvalid={color.length <3}
        />

        <InputTextArea
          label={"Input Text Area"}
          value={textarea}
          onTextChange={setTextarea}
          hint={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui soluta sint voluptatibus similique alias doloremque impedit recusandae, repudiandae maiores ut sequi esse laborum ipsam dolorem aspernatur cupiditate. Earum, id!"
          }
          error={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          autoResize={true}
        />

        <InputPin
          label={"Pin"}
          type={"alphanumeric"}
          hint={"Ici tu dois rentrer ton mot de passe."}
          error={"Ah bah non c'est trop court."}
          value={pin}
          onPinChange={setPin}
          pinNumber={7}
        />

        <InputNumber
          label={"Input Number"}
          hint={"Ici tu dois rentrer ton mot de passe."}
          error={"Ah bah non c'est trop court."}
          value={number}
          onNumberChange={setNumber}
        />
      </VStack>
    </Container>
  )
}

export default App
