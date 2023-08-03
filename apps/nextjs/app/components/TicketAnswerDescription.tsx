import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react"
import CustomWysiwyg from "./CustomWysiwyg"
import { FunctionComponent, useState } from "react"
const TicketAnswerDescription: FunctionComponent<any> = ({}) => {
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const [is_private, setIs_private] = useState(false)
  const [description, setDescription] = useState<string>("")

  const handleCancel = () => {
    setIsEditable(false)
  }

  return (
    <HStack w={"full"}>
      <VStack width={"full"} mb={1} alignItems={"flex-start"}>
        <HStack>
          <Box
            px={2}
            py={1}
            borderTopWidth={2}
            borderBottomWidth={2}
            borderTopColor={"transparent"}
            borderBottomColor={!is_private ? "primary.500" : "transparent"}
            color={!is_private ? "primary.500" : "gray.500"}
            cursor={"pointer"}
            onClick={() => setIs_private(false)}
          >
            <Text fontSize={"xs"}>Réponse publique</Text>
          </Box>
          <Box
            px={2}
            py={1}
            borderTopWidth={2}
            borderBottomWidth={2}
            borderTopColor={"transparent"}
            borderBottomColor={is_private ? "primary.500" : "transparent"}
            color={is_private ? "primary.500" : "gray.500"}
            cursor={"pointer"}
            onClick={() => setIs_private(true)}
          >
            <Text fontSize={"xs"}>Note Interne</Text>
          </Box>
        </HStack>

        <HStack width={"full"} alignItems={"flex-start"}>
          <CustomWysiwyg
            value={description}
            setValue={setDescription}
            withFileButton={false}
          />
        </HStack>

        <HStack spacing={4}>
          <Button
            aria-label="Confirm update"
            colorScheme={"primary"}
            size={"xs"}
            px={3}
            rounded={"sm"}
          >
            Enregistrer
          </Button>

          <Button
            aria-label="Cancel update"
            colorScheme={"primary"}
            variant={"outline"}
            size={"xs"}
            onClick={handleCancel}
            px={3}
            rounded={"sm"}
          >
            Annuler
          </Button>
        </HStack>
      </VStack>

      <Box minW={"500px"}></Box>
    </HStack>
  )
}

export default TicketAnswerDescription
