import React from "react"
import { Box, Container, Text } from "@chakra-ui/react"
import { AisAdd } from "@akkurateio/icons"
import { InputText } from "@akkurateio/forms"

function App() {
  return (
    <Container maxW={"container.xl"}>
      <Box>
        <Text fontSize={"3xl"} fontWeight={600}>
          Test components
        </Text>
        <AisAdd w={64} h={64} />
        <InputText />
      </Box>
    </Container>
  )
}

export default App
