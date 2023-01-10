import { AcsDrawer } from "@akkurateio/components"
import { AcsWysiwyg } from "@akkurateio/wysiwyg"
import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import type { NextPage } from "next"
import { useState } from "react"

const Pages: NextPage = () => {
  const [text, setText] = useState("")
  const [modalDrawer, setModalDrawer] = useState<boolean>(false)

  return (
    <Flex p={4} flexDirection={"column"} gap={4}>
      <Heading>Pages</Heading>

      <AcsWysiwyg
        value={text}
        setValue={setText}
        menuBgColor={"#ebebeb25"}
        menuColorScheme={"success"}
        isInvalid
      />

      <Button onClick={() => setModalDrawer(!modalDrawer)}>
        {modalDrawer ? "Fermer" : "Ouvrir"} un drawer
      </Button>
      <AcsDrawer
        title={"Drawer"}
        isOpen={modalDrawer}
        onClose={() => setModalDrawer(false)}
        placement={"right"}
        hasCloseBtn={true}
        body={
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            incidunt maxime aspernatur tenetur distinctio nobis in recusandae?
            Repellat nihil placeat possimus provident ex sint fugiat, nam esse
          </Text>
        }
        footer={
          <Flex justifyContent={"space-between"} width={"full"}>
            <Button
              backgroundColor={"neutral.400"}
              color={"white"}
              onClick={() => setModalDrawer(false)}
            >
              Close
            </Button>
            <Button
              backgroundColor={"primary.500"}
              color={"white"}
              onClick={() => console.log("jojo")}
            >
              Vue
            </Button>
          </Flex>
        }
      />
    </Flex>
  )
}

export default Pages
