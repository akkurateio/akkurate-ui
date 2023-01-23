import {
  AisAttachement,
  AisBackward,
  AisBlockquote,
  AisBold,
  AisCode,
  AisForward,
  AisItalic,
  AisLink,
  AisListOrdered,
  AisListUnordered,
  AisParagraph,
  AisUnlink,
} from "@akkurateio/ds"
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Text,
  Tooltip,
} from "@chakra-ui/react"
import { Editor } from "@tiptap/react"
import React, { FunctionComponent, useState } from "react"
import UrlLinkEditModal from "./UrlLinkEditModal"

interface IProps {
  editor: Editor
  hasDropzone: boolean
  isDropzoneOpen: boolean
  setIsDropzoneOpen: (val: boolean) => void
  bgColor?: string
  colorScheme?: string
  simpleBar?: boolean
  actionButtons?: JSX.Element
}

const CustomTipTapMenuBar: FunctionComponent<IProps> = ({
  editor,
  hasDropzone,
  isDropzoneOpen,
  setIsDropzoneOpen,
  bgColor,
  colorScheme,
  simpleBar,
  actionButtons,
}) => {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState<boolean>(false)

  const iconSize = "16px"

  const dropzoneBtn = {
    onClick: () => setIsDropzoneOpen(!isDropzoneOpen),
    disabled: !hasDropzone,
    variant: isDropzoneOpen ? "solid" : "outline",
    icon: <AisAttachement boxSize={iconSize} />,
    label: `${isDropzoneOpen ? "Fermer" : "Ouvrir"} la zone de dépôt`,
  }

  const buttons: {
    onClick: () => void
    disabled: boolean
    variant: string
    icon: JSX.Element
    label: string
  }[][] = [
    [
      {
        onClick: () => editor.chain().focus().toggleBold().run(),
        disabled: !editor.can().chain().focus().toggleBold().run(),
        variant: editor.isActive("bold") ? "solid" : "outline",
        icon: <AisBold boxSize={iconSize} />,
        label: "Gras",
      },
      {
        onClick: () => editor.chain().focus().toggleItalic().run(),
        disabled: !editor.can().chain().focus().toggleItalic().run(),
        variant: editor.isActive("italic") ? "solid" : "outline",
        icon: <AisItalic boxSize={iconSize} />,
        label: "Italique",
      },
    ],
    [
      {
        onClick: () => editor.chain().focus().toggleBulletList().run(),
        disabled: !editor.can().chain().focus().toggleBulletList().run(),
        variant: editor.isActive("bulletList") ? "solid" : "outline",
        icon: <AisListUnordered boxSize={iconSize} />,
        label: "Liste à puces",
      },
      {
        onClick: () => editor.chain().focus().toggleOrderedList().run(),
        disabled: !editor.can().chain().focus().toggleOrderedList().run(),
        variant: editor.isActive("orderedList") ? "solid" : "outline",
        icon: <AisListOrdered boxSize={iconSize} />,
        label: "Liste numérotée",
      },
      // {
      // 	onClick: () => editor.chain().focus().toggleTaskList().run(),
      // 	disabled: !editor.can().chain().focus().unsetLink().run(),
      // 	variant: editor.isActive('taskList') ? 'solid' : 'outline',
      // 	icon: <AisListTask boxSize={iconSize} />,
      // 	label: 'Liste de tâches',
      // },
    ],
    [
      {
        onClick: () => editor.chain().focus().setParagraph().run(),
        disabled: !editor.can().chain().focus().setParagraph().run(),
        variant: editor.isActive("paragraph") ? "solid" : "outline",
        icon: <AisParagraph boxSize={iconSize} />,
        label: "Paragraphe",
      },
      {
        onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
        disabled: !editor
          .can()
          .chain()
          .focus()
          .toggleHeading({ level: 2 })
          .run(),
        variant: editor.isActive("heading", { level: 2 }) ? "solid" : "outline",
        icon: <Text fontSize={"sm"}>H2</Text>,
        label: "Titre 2",
      },
      {
        onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
        disabled: !editor
          .can()
          .chain()
          .focus()
          .toggleHeading({ level: 3 })
          .run(),
        variant: editor.isActive("heading", { level: 3 }) ? "solid" : "outline",
        icon: <Text fontSize={"sm"}>H3</Text>,
        label: "Titre 3",
      },
      {
        onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
        disabled: !editor
          .can()
          .chain()
          .focus()
          .toggleHeading({ level: 4 })
          .run(),
        variant: editor.isActive("heading", { level: 4 }) ? "solid" : "outline",
        icon: <Text fontSize={"sm"}>H4</Text>,
        label: "Titre 4",
      },
      {
        onClick: () => editor.chain().focus().toggleCodeBlock().run(),
        disabled: !editor.can().chain().focus().toggleCodeBlock().run(),
        variant: editor.isActive("codeBlock") ? "solid" : "outline",
        icon: <AisCode boxSize={iconSize} />,
        label: "Code",
      },
      {
        onClick: () => editor.chain().focus().toggleBlockquote().run(),
        disabled: !editor.can().chain().focus().toggleBlockquote().run(),
        variant: editor.isActive("blockquote") ? "solid" : "outline",
        icon: <AisBlockquote boxSize={iconSize} />,
        label: "Citation",
      },
    ],
    [
      {
        onClick: () => editor.chain().focus().undo().run(),
        disabled: !editor.can().chain().focus().undo().run(),
        variant: "outline",
        icon: <AisBackward boxSize={iconSize} />,
        label: "Annuler",
      },
      {
        onClick: () => editor.chain().focus().redo().run(),
        disabled: !editor.can().chain().focus().redo().run(),
        variant: "outline",
        icon: <AisForward boxSize={iconSize} />,
        label: "Rétablir",
      },
    ],
    [
      {
        onClick: () => setIsLinkModalOpen(!isLinkModalOpen),
        disabled: false,
        variant: "outline",
        icon: <AisLink boxSize={iconSize} />,
        label: "Ajouter un lien",
      },
      {
        onClick: () => editor.chain().focus().unsetLink().run(),
        disabled: !editor.isActive("link"),
        variant: editor.isActive("link") ? "solid" : "outline",
        icon: <AisUnlink boxSize={iconSize} />,
        label: "Supprimer le lien",
      },
    ],
  ]

  //map on button but with only two first button in each array
  const buttons2 = buttons.slice(0, 2)

  return (
    <Box width={"full"}>
      {!simpleBar ? (
        <>
          <HStack
            w={"full"}
            rounded={"sm"}
            p={1}
            flexWrap={"wrap"}
            spacing={2}
            bg={bgColor}
            justifyContent={"space-between"}
          >
            <HStack>
              {buttons.map((arrayOfBtn, index) => (
                <ButtonGroup
                  key={index}
                  size={"xs"}
                  isAttached
                  colorScheme={colorScheme}
                >
                  {arrayOfBtn.map((button, index) => (
                    <Tooltip
                      key={index + button.label}
                      label={button.label}
                      fontSize="2xs"
                      openDelay={800}
                    >
                      <Button
                        fontWeight={"normal"}
                        borderRadius={"2px"}
                        onClick={button.onClick}
                        disabled={button.disabled}
                        variant={button.variant}
                        aria-label={button.label}
                        h={7}
                      >
                        {button.icon}
                      </Button>
                    </Tooltip>
                  ))}
                </ButtonGroup>
              ))}
            </HStack>
            {!actionButtons && !!hasDropzone && (
              <Tooltip
                key={dropzoneBtn.label}
                label={dropzoneBtn.label}
                fontSize="2xs"
                openDelay={800}
              >
                <Button
                  colorScheme={colorScheme}
                  onClick={dropzoneBtn.onClick}
                  disabled={dropzoneBtn.disabled}
                  variant={"ghost"}
                  px={2}
                  aria-label={dropzoneBtn.label}
                  h={7}
                >
                  <HStack>
                    <Text fontSize={"xs"} fontWeight={"normal"}>
                      Joindre un fichier
                    </Text>
                    <Box>{dropzoneBtn.icon}</Box>
                  </HStack>
                </Button>
              </Tooltip>
            )}

            {actionButtons && actionButtons}
          </HStack>

          {isLinkModalOpen && (
            <UrlLinkEditModal
              link={""}
              handleValidate={(val) =>
                editor
                  .chain()
                  .focus()
                  .extendMarkRange("link")
                  .setLink({ href: val, target: "_blank" })
                  .run()
              }
              isOpen={isLinkModalOpen}
              setIsOpen={setIsLinkModalOpen}
              onClose={() => setIsLinkModalOpen(false)}
            />
          )}
        </>
      ) : (
        <HStack justifyContent={"space-between"}>
          <HStack>
            {buttons2.map((arrayOfBtn, index) => (
              <ButtonGroup
                key={index}
                size={"xs"}
                isAttached
                colorScheme={colorScheme}
              >
                {arrayOfBtn.map((button, index) => (
                  <Tooltip
                    key={index + button.label}
                    label={button.label}
                    fontSize="2xs"
                    openDelay={800}
                  >
                    <Button
                      fontWeight={"normal"}
                      borderRadius={"2px"}
                      onClick={button.onClick}
                      disabled={button.disabled}
                      variant={button.variant}
                      aria-label={button.label}
                      h={7}
                    >
                      {button.icon}
                    </Button>
                  </Tooltip>
                ))}
              </ButtonGroup>
            ))}
          </HStack>
          {!actionButtons && !!hasDropzone && (
            <Tooltip
              key={dropzoneBtn.label}
              label={dropzoneBtn.label}
              fontSize="2xs"
              openDelay={800}
            >
              <Button
                colorScheme={colorScheme}
                onClick={dropzoneBtn.onClick}
                disabled={dropzoneBtn.disabled}
                variant={"ghost"}
                px={2}
                aria-label={dropzoneBtn.label}
                h={7}
              >
                <HStack>
                  <Text fontSize={"xs"} fontWeight={"normal"}>
                    Joindre un fichier
                  </Text>
                  <Box>{dropzoneBtn.icon}</Box>
                </HStack>
              </Button>
            </Tooltip>
          )}

          {actionButtons && actionButtons}
        </HStack>
      )}
    </Box>
  )
}

export default CustomTipTapMenuBar
