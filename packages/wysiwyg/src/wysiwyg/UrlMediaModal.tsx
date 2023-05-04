import { AcsInputText } from "@akkurateio/ds"
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"
import React, { FunctionComponent, useState } from "react"

interface IProps {
  link: string
  handleValidate: (val: string) => void
  isOpen: boolean
  setIsOpen: (val: boolean) => void
  onClose: (val: boolean) => void
}

const UrlMediaModal: FunctionComponent<IProps> = ({
  link,
  handleValidate,
  isOpen,
  setIsOpen,
}: IProps): React.ReactElement => {
  const [linkState, setLinkState] = useState<string>(link)

  const save = () => {
    handleValidate(linkState)
    setLinkState("")
    setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Média</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <AcsInputText
              label={"Url du lien"}
              placeholder={"https://..."}
              name={"urlLink"}
              type={"text"}
              value={linkState}
              handleChange={setLinkState}
            />
          </Box>
        </ModalBody>
        <ModalFooter display={"flex"} justifyContent={"space-between"}>
          <Button
            colorScheme={"primary"}
            variant={"outline"}
            onClick={() => setIsOpen(false)}
          >
            Annuler
          </Button>
          <Button onClick={save} colorScheme={"primary"}>
            Valider
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default UrlMediaModal
