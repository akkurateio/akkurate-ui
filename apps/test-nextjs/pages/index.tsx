import { AcsInputTextArea } from "@akkurateio/forms"
import { Heading, Text, VStack } from "@chakra-ui/react"
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      message: "",
      password: "",
    }, // initial form values (optional)
  })

  return (
    <VStack width={"full"} spacing={20} p={10}>
      <Heading>Hello</Heading>

      <Text>hello world</Text>

      <AcsInputTextArea
        value={getValues("message")}
        handleChange={(value: any) =>
          setValue("message", value, { shouldValidate: true })
        }
        placeholder={"Un petit exemple"}
        autoResize={true}
      />
    </VStack>
  )
}

export default App
