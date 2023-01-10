import { AcsCarousel, AcsDrawer, AcsDropzone } from "@akkurateio/components"
import { AcsSelect } from "@akkurateio/forms"
import { AcsWysiwyg } from "@akkurateio/wysiwyg"
import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import type { NextPage } from "next"
import { useState } from "react"

const Pages: NextPage = () => {
  const [text, setText] = useState("")
  const [modalDrawer, setModalDrawer] = useState<boolean>(false)

  const options = [
    { value: "1", label: "Option 1", isDisabled: true },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ]
  const [selected, setSelected] = useState<string | number>("2")

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
              colorScheme={"primary"}
              variant={"outline"}
              onClick={() => setModalDrawer(false)}
            >
              Bidule
            </Button>
            <Button colorScheme={"primary"} onClick={() => console.log("jojo")}>
              Vue
            </Button>
          </Flex>
        }
      />

      <AcsSelect
        options={options}
        handleChange={setSelected}
        value={selected}
        label={"Select"}
      />

      <AcsDropzone handleChange={console.log} maxFiles={5} />

      <AcsCarousel
        cardsArray={[
          <Flex
            key={0}
            bg={"gray.500"}
            shadow={"inner"}
            h={"200px"}
            w={"120px"}
            rounded={"sm"}
            p={2}
          >
            <Text>Hello 1</Text>
          </Flex>,
          <Flex
            key={1}
            bg={"gray.500"}
            shadow={"inner"}
            h={"200px"}
            w={"120px"}
            rounded={"sm"}
            p={2}
          >
            <Text>Hello 2</Text>
          </Flex>,
          <Flex
            key={2}
            bg={"gray.500"}
            shadow={"inner"}
            h={"200px"}
            w={"120px"}
            rounded={"sm"}
            p={2}
          >
            <Text>Hello 3</Text>
          </Flex>,
          <Flex
            key={0}
            bg={"gray.500"}
            shadow={"inner"}
            h={"200px"}
            w={"120px"}
            rounded={"sm"}
            p={2}
          >
            <Text>Hello 1</Text>
          </Flex>,
          <Flex
            key={1}
            bg={"gray.500"}
            shadow={"inner"}
            h={"200px"}
            w={"120px"}
            rounded={"sm"}
            p={2}
          >
            <Text>Hello 2</Text>
          </Flex>,
          <Flex
            key={2}
            bg={"gray.500"}
            shadow={"inner"}
            h={"200px"}
            w={"120px"}
            rounded={"sm"}
            p={2}
          >
            <Text>Hello 3</Text>
          </Flex>,
          <Flex
            key={0}
            bg={"gray.500"}
            shadow={"inner"}
            h={"200px"}
            w={"120px"}
            rounded={"sm"}
            p={2}
          >
            <Text>Hello 1</Text>
          </Flex>,
          <Flex
            key={1}
            bg={"gray.500"}
            shadow={"inner"}
            h={"200px"}
            w={"120px"}
            rounded={"sm"}
            p={2}
          >
            <Text>Hello 2</Text>
          </Flex>,
          <Flex
            key={2}
            bg={"gray.500"}
            shadow={"inner"}
            h={"200px"}
            w={"120px"}
            rounded={"sm"}
            p={2}
          >
            <Text>Hello 3</Text>
          </Flex>,
        ]}
      />
    </Flex>
  )
}

export default Pages
