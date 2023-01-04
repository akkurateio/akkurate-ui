import { AcsWysiwyg } from "@akkurateio/wysiwyg"
import { Flex, Heading } from "@chakra-ui/react"
import type { NextPage } from "next"
import { useState } from "react"

const Pages: NextPage = () => {
  const [text, setText] = useState("")

  return (
    <Flex p={4} flexDirection={"column"} gap={4}>
      <Heading>Pages</Heading>

      <AcsWysiwyg
        value={text}
        setValue={setText}
        menuBgColor={"red.500"}
        menuColorScheme={"blue"}
      />
    </Flex>
  )
}

export default Pages
