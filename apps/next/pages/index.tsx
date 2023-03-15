import {
  AcsTree,
  AcsDropzone,
  AcsDropzone2,
  AcsPaginate,
  AcsPaginateSecondary,
  AcsDrawer,
  AcsModal,
} from "@akkurateio/components"
import {
  AcsInputDate,
  AcsInputPhone,
  AcsInputFile,
  AcsSlider,
  AcsInputPin,
  AcsRadioSelectCard,
  AcsInputSearch,
  AcsInputText,
  AcsRadioGroup,
  AcsInputPassword,
  AcsInputNumber,
  AcsInputEmail,
  AcsInputTextArea,
  AcsInputColor,
  AcsInputTime,
  AcsSelect,
  AcsSelectCreate,
  AcsSelectMultiple,
  AcsCheckboxCard,
  AcsInputDateRange,
} from "@akkurateio/forms"
import { AcsWysiwyg } from "@akkurateio/wysiwyg"
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react"
import type { NextPage } from "next"
import { useState } from "react"
import {
  AisCheckmark,
  AisColorPalette,
  AisFilter,
  AisFlag,
} from "@akkurateio/icons"
import dayjs, { Dayjs } from "dayjs"
import { base } from "next/dist/build/webpack/config/blocks/base"
const Pages: NextPage = () => {
  const [text, setText] = useState<string>("")
  const [inputText, setInputText] = useState<string>("")
  const [inputPhone, setInputPhone] = useState<string>("")
  const [inputDate, setInputDate] = useState<string>("")
  const [inputTime, setInputTime] = useState<string>("")
  const [inputColor, setInputColor] = useState<string>("")
  const [inputEmail, setInputEmail] = useState<string>("")
  const [inputNumber, setInputNumber] = useState<number>(0)
  const [inputPassword, setInputPassword] = useState<string>("")
  const [inputSearch, setInputSearch] = useState<string>("")
  const [inputTextArea, setInputTextArea] = useState<string>("")
  const [selected, setSelected] = useState<string | number | undefined>()
  const [checked, setChecked] = useState<(number | string)[]>([2])
  const [paginate, setPaginate] = useState<number>(1)
  const [color, setColor] = useState<string>("#000000")
  const [dateRange, setDateRange] = useState<{
    startDate: Dayjs | null | string
    endDate: Dayjs | null | string
    currentDate: Dayjs | null | string
  }>({
    startDate: null,
    endDate: null,
    currentDate: dayjs(),
  })

  const options = [
    { value: "1", label: "Option 1", isDisabled: true },
    { value: "2", label: "Option 2", icon: <AisFlag color={"blue.200"} /> },
    { value: "3", label: "Option 3" },
    { value: "4", label: "Option 4" },
    { value: "5", label: "Option 5" },
    { value: "6", label: "Option 6" },
    { value: "7", label: "Option 7" },
    { value: "8", label: "Option 8" },
    { value: "9", label: "Option 9" },
    { value: "10", label: "Option 10" },
    { value: "11", label: "Option 11" },
  ]

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
  const [value, setValue] = useState<string | number>("")
  const values = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" },
  ]

  const [treeItem, setTreeItem] = useState<{
    id: string | number | null
    name: string | null
  }>({ id: null, name: null })
  const [drawer, setDrawer] = useState<boolean>(false)
  const validation = () => {
    alert("Vous allez validez le formulaire")
    setDrawer(false)
  }
  const [files, setFiles] = useState<FileList | File[] | null>(null)
  const [modal, setModal] = useState<boolean>(false)
  const [Message, setMessage] = useState<boolean>(false)
  const vueModal = () => {
    setMessage(true)
    setModal(false)
  }
  console.log(dateRange)

  const array = [
    {
      id: 1,
      body: (
        <Text width={"fit-content"} fontWeight={"bold"} fontSize={"sm"}>
          C est un exemple
        </Text>
      ),
    },
    {
      id: 2,
      body: (
        <>
          <Text width={"fit-content"} fontWeight={"bold"} fontSize={"sm"}>
            Un autre exemple
          </Text>
          <Text color={"neutral.400"} fontSize={"xs"}>
            Subtitle
          </Text>
        </>
      ),
    },
    {
      id: 3,
      body: (
        <Box>
          <Heading fontSize={"md"}>Coucou</Heading>
          <Text marginTop={"5px"} fontSize={"sm"}>
            il etait une fois dans une galaxie lointaine, très lointaine....
          </Text>
        </Box>
      ),
    },
  ]
  return (
    <div>
      <AcsInputDate value={inputDate} handleChange={setInputDate} />
    </div>
  )
}

export default Pages
