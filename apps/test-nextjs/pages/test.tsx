import {
  AcsInputNumber,
  AcsInputPassword,
  AcsInputPhone,
  AcsInputSearch,
  AcsInputText,
  AcsInputTextArea,
  AcsSelect
} from "@akkurateio/forms"
import { VStack } from "@chakra-ui/react"
import { useState } from "react"

const Pages = () => {
  const [text, setText] = useState("")

  return (
    <VStack spacing={10} width={"full"} p={10}>
      <AcsInputText
        label={"Password"}
        handleChange={console.log}
        value={"aezazeaze"}
      />

      <AcsInputPassword
        label={"Password"}
        handleChange={console.log}
        value={"aezazeaze"}
        isInvalid
      />

      <AcsSelect />

      <AcsInputPhone label={"Phone"} handleChange={console.log} />

      <AcsInputSearch value={text} label={"Search"} handleChange={setText} />

      <AcsInputNumber label={"Number"} handleChange={console.log} />

      <AcsInputTextArea
        label={"TextArea"}
        handleChange={console.log}
        value={"zrezrzer"}
      />
    </VStack>
  )
}

export default Pages
