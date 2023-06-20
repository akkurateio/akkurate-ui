import { Heading, Text, VStack } from "@chakra-ui/react"
import  { AcsSelect }  from "@akkurateio/forms"
import type { NextPage } from "next"
import { useState } from "react"

const Pages: NextPage = () => {
  const [htmlValue, setHtmlValue] = useState<any>("16")

  return (
    <VStack w={"100vw"} p={12}>
      <Heading>Pages</Heading>

      <AcsSelect />
    </VStack>
  )
}

export default Pages
