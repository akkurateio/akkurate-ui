import {
  AcsInputNumber,
  AcsInputPassword,
  AcsInputPhone,
  AcsInputSearch,
  AcsInputText,
  AcsInputTextArea,
} from "@akkurateio/forms"
import { VStack } from "@chakra-ui/react"

const Pages = () => {
  return (
    <VStack spacing={10} width={"full"}>
       <AcsInputText label={"Text"} handleChange={console.log} />

      <AcsInputPassword
        label={"Password"}
        handleChange={console.log}
        value={"aezazeaze"}
      />

      <AcsInputPhone label={"Phone"} handleChange={console.log} />

      <AcsInputSearch label={"Search"} handleChange={console.log} />

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
