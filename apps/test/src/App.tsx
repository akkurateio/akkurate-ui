import { InputText } from "@akkurateio/forms"
import { AisAdd } from "@akkurateio/icons"
import { Box, Container, Text } from "@chakra-ui/react"
// import { Paginate } from "@akkurateio/components"

function App() {
  return (
    <Container maxW={"container.xl"}>
      <Box>
        <Text fontSize={"3xl"} fontWeight={600}>
          Test components
        </Text>
        <AisAdd w={64} h={64} />
        {/* <Paginate
          current={4}
          totalItems={100}
          max={200}
          handleChangePage={() => console.log("okk")}
        /> */}
        <InputText />
      </Box>
    </Container>
  )
}

export default App
