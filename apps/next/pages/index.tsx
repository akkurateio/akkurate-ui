import { AcsTree } from "@akkurateio/components"
import { AcsInputDate } from "@akkurateio/forms"
import { AcsWysiwyg } from "@akkurateio/wysiwyg"
import { Flex, Heading } from "@chakra-ui/react"
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

  const tree = [
    {
      id: 1,
      name: "root",
      children: [
        {
          id: 2,
          name: "child1",
          children: [
            {
              id: 3,
              name: "child1.1",
              children: [],
            },
          ],
        },
      ],
    },
  ]

  const [treeItem, setTreeItem] = useState<{
    id: string | number | null
    name: string | null
  }>({ id: null, name: null })

  const [date, setDate] = useState("2023-01-10")

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

      <AcsInputDate value={date} handleChange={setDate} />
      <AcsInputDate value={date} handleChange={setDate} />
      <AcsInputDate value={date} handleChange={setDate} />

      <AcsTree tree={tree} item={treeItem} setItem={setTreeItem} />

      <AcsWysiwyg
        value={text}
        setValue={setText}
        menuBgColor={"#ebebeb25"}
        menuColorScheme={"success"}
        isInvalid
      />
    </Flex>
  )
}

export default Pages
