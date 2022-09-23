import { Flex, Switch, Text, useColorMode } from "@chakra-ui/react"
import React from "react"

const ToggleColorMode: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex alignItems={"center"} mx={5} experimental_spaceX={2}>
      <Text>Dark</Text>
      <Switch isChecked={colorMode === "light"} onChange={toggleColorMode} />
      <Text>Light</Text>
    </Flex>
  )
}

export default ToggleColorMode
