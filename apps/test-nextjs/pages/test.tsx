import { AcsWysiwyg } from "@akkurateio/wysiwyg"
import { Heading, VStack } from "@chakra-ui/react"
import type { NextPage } from "next"
import { useState } from "react"

const Pages: NextPage = () => {
  const [htmlValue, setHtmlValue] = useState<string>("")

  return (
    <VStack w={"100vw"} bg={"blue.100"}>
      <Heading>Pages</Heading>

      <AcsWysiwyg value={htmlValue} setValue={setHtmlValue} />
    </VStack>
  )
}

export default Pages
