import { AcsDrawer, AcsInputText } from "@akkurateio/ds"
import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import CustomWysiwyg from "./CustomWysiwyg"

interface IProps {
  isOpen: boolean
  onClose: () => void
  initial_project_id?: string
}

const DrawerAddTicket: React.FC<IProps> = ({
  isOpen,
  onClose,
  initial_project_id = "",
}) => {
  const [errors, setErrors] = useState<string[]>([])
  const [name, setName] = useState<string>("")
  const [files, setFiles] = useState([])
  const [description, setDescription] = useState<string>("")
  const [is_private, setIs_private] = useState<boolean>(true)

  const [project_id, setProject_id] = useState<string>(initial_project_id)
  const [ticket_state_id, setTicket_state_id] = useState<string>("1")
  const [ticket_origin_id, setTicket_origin_id] = useState<string>("4")
  const [ticket_priority_id, setTicket_priority_id] = useState<string>("2")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  // const handleSetProject = async (project: string) => {
  //   setProject_id(project)
  //   mutateUserOfProctOrganization(project)
  // }
  //
  // const { mutate: mutateUserOfProctOrganization, isLoading: loadUsers } =
  //   useMutation(
  //     (project: string) => getUserOfOrganizationThrougthProject(project),
  //     {
  //       onSuccess: (res) => {
  //         const clients = res.data.map((user: any) => {
  //           return {
  //             id: user.id,
  //             isSelected: user.id === authUser?.id,
  //             firstname: user.first_name,
  //             lastname: user.last_name,
  //           }
  //         })
  //
  //         setUsersIdArray({
  //           ...usersIdArray,
  //           clients: clients,
  //         })
  //       },
  //       onError: (err) => {
  //         console.log(err)
  //       },
  //     },
  //   )
  //
  // const { mutate, isLoading } = useMutation(createTicket, {
  //   onSuccess: async (res) => {
  //     resetEveryField()
  //     setIsSubmitting(false)
  //
  //     queryClient
  //       .invalidateQueries(["tickets"], { exact: false })
  //       .then(() => onClose())
  //     queryClient.invalidateQueries(["projectTickets"])
  //   },
  //   onError: (err) => {
  //     console.log(err)
  //     setIsSubmitting(false)
  //     errorToast()
  //   },
  // })
  //
  // const handleSubmit = async () => {
  //   const ticketPayload = {
  //     name,
  //     description,
  //     is_private,
  //     users: [...usersIdArray.clients, ...usersIdArray.platform]
  //       .filter((user) => user.isSelected)
  //       .map((user) => user.id),
  //     project_id,
  //     ticket_state_id,
  //     ticket_origin_id,
  //     ticket_priority_id,
  //   }
  //
  //   let myFiles: any[] = []
  //
  //   if (files) {
  //     setIsSubmitting(true)
  //
  //     myFiles = await Promise.all(
  //       files.map(async (file: any) => {
  //         return await handleUpload(file)
  //       }),
  //     )
  //   }
  //
  //   await createTicketPayload
  //     .validate(ticketPayload, { abortEarly: false })
  //     .then(() => {
  //       setErrors([])
  //       mutate({ ...ticketPayload, medias: myFiles })
  //     })
  //     .catch((err) => {
  //       if (err.name === "ValidationError") {
  //         const errs = err.inner.flatMap((e) => e.path)
  //         setErrors(errs)
  //       }
  //       setIsSubmitting(false)
  //       errorToast()
  //     })
  // }
  //
  // const resetEveryField = () => {
  //   setName("")
  //   setDescription("")
  //   setIs_private(true)
  //   setUsersIdArray({ clients: [], platform: [] })
  //   setProject_id("")
  //   setTicket_state_id("")
  //   setTicket_origin_id("")
  //   setTicket_priority_id("")
  //   setIsSubmitting(false)
  // }
  //
  // const handleClose = () => {
  //   resetEveryField()
  //   onClose()
  // }

  return (
    <AcsDrawer
      onClose={onClose}
      size={"lg"}
      placement={"right"}
      hasCloseBtn
      onKeyDown={(e) => {
        if (!isOpen) return

        if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
          // handleSubmit()
        }
        if (e.key === "Escape") {
          onClose()
        }
      }}
      body={
        <Flex flexDir={"column"} gap={3} py={3} h={"full"}>
          <AcsInputText
            handleChange={setName}
            value={name}
            label={"Nom du ticket"}
            // isInvalid={contains(errors, "name")}
          />

          <HStack justifyContent={"space-between"} width={"full"} pt={2}>
            <HStack>
              <Box
                px={2}
                borderTopWidth={2}
                borderBottomWidth={2}
                borderTopColor={"transparent"}
                borderBottomColor={!is_private ? "primary.500" : "transparent"}
                color={!is_private ? "primary.500" : "gray.500"}
                cursor={"pointer"}
                onClick={() => setIs_private(false)}
              >
                <Text fontSize={"sm"}>Message Public</Text>
              </Box>
              <Box
                px={2}
                borderTopWidth={2}
                borderBottomWidth={2}
                borderTopColor={"transparent"}
                borderBottomColor={is_private ? "primary.500" : "transparent"}
                color={is_private ? "primary.500" : "gray.500"}
                cursor={"pointer"}
                onClick={() => setIs_private(true)}
              >
                <Text fontSize={"sm"}>Note Interne</Text>
              </Box>
            </HStack>
          </HStack>

          <CustomWysiwyg
            bgSecondary={is_private}
            value={description}
            setValue={setDescription}
            // isInvalid={contains(errors, "description")}
            setFiles={setFiles}
          />
        </Flex>
      }
      isOpen={isOpen}
      footer={
        <Flex justifyContent={"space-between"} width={"full"}>
          <Button
            // onClick={handleClose}
            variant={"outline"}
            colorScheme={"primary"}
          >
            Annuler
          </Button>
          <Button
            // onClick={() => handleSubmit()}
            variant={"solid"}
            colorScheme={"primary"}
            isLoading={isSubmitting}
          >
            Ajouter un ticket
          </Button>
        </Flex>
      }
      // onClose={handleClose}
      title={"Créer un ticket"}
      closeOnOverlayClick={false}
    />
  )
}

export default DrawerAddTicket
