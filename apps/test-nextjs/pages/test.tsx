import { AcsWysiwyg } from "@akkurateio/wysiwyg"
import { Heading, VStack } from "@chakra-ui/react"
import type { NextPage } from "next"
import { useState } from "react"

const Pages: NextPage = () => {
  const [htmlValue, setHtmlValue] = useState<string>(
    "<p>un super long texte et même qu edes foi quand c'est cool comme ça on fait des trucs</p>",
  )

  return (
    <VStack w={"100vw"} p={12}>
      <Heading>Pages</Heading>

      <AcsWysiwyg value={htmlValue} setValue={setHtmlValue} isHtml />

      <div dangerouslySetInnerHTML={{ __html: htmlValue }} />

      <button onClick={() => setHtmlValue('<p></p>')}>Vider</button>
    </VStack>
  )
}

export default Pages
