import { Editor } from "@tiptap/core"
import cx from "classnames"
import React, { Dispatch, FC, SetStateAction } from "react"

import { BubbleMenuItem } from "./EditorBubbleMenu"
import {
  AisBlockquote,
  AisBurger,
  AisCheckbox,
  AisCheckboxChecked,
  AisChevronDown,
  AisCode,
  AisListOrdered,
  AisListUnordered,
  AisMagicHand,
  AisParagraph,
} from "@akkurateio/icons"
import { Box, Button } from "@chakra-ui/react"

interface NodeSelectorProps {
  editor: Editor
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const NodeSelector: FC<NodeSelectorProps> = ({
  editor,
  isOpen,
  setIsOpen,
}) => {
  const items: BubbleMenuItem[] = [
    {
      name: "Texte",
      icon: AisParagraph,
      command: () =>
        editor.chain().focus().toggleNode("paragraph", "paragraph").run(),
      // I feel like there has to be a more efficient way to do this – feel free to PR if you know how!
      isActive: () =>
        editor.isActive("paragraph") &&
        !editor.isActive("bulletList") &&
        !editor.isActive("orderedList"),
    },
    {
      name: "Titre 1",
      icon: AisMagicHand,
      command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    {
      name: "Titre 2",
      icon: AisMagicHand,
      command: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    {
      name: "Titre 3",
      icon: AisMagicHand,
      command: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.isActive("heading", { level: 3 }),
    },
    {
      name: "Liste de tâches",
      icon: AisCheckboxChecked,
      command: () => editor.chain().focus().toggleTaskList().run(),
      isActive: () => editor.isActive("taskItem"),
    },
    {
      name: "Liste à puces",
      icon: AisListUnordered,
      command: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    {
      name: "Liste numérotée",
      icon: AisListOrdered,
      command: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },
    {
      name: "Citation",
      icon: AisBlockquote,
      command: () =>
        editor
          .chain()
          .focus()
          .toggleNode("paragraph", "paragraph")
          .toggleBlockquote()
          .run(),
      isActive: () => editor.isActive("blockquote"),
    },
    {
      name: "Code",
      icon: AisCode,
      command: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive("codeBlock"),
    },
  ]

  const activeItem = items.filter((item) => item.isActive()).pop() ?? {
    name: "Multiple",
  }

  return (
    <Box display={"relative"} w={"full"}>
      <Button
        bg={"white"}
        display={"flex"}
        h={"full"}
        alignItems={"center"}
        rounded={0}
        gap={1}
        p={3}
        fontSize={"sm"}
        fontWeight={"medium"}
        color={"gray.600"}
        _hover={{ bg: "#F5F5F4" }}
        _active={{ bg: "gray.200" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{activeItem?.name}</span>

        <AisChevronDown boxSize={4} />
      </Button>

      {isOpen && (
        <Box
          position={"fixed"}
          top={"full"}
          zIndex={99999}
          mt={1}
          display={"flex"}
          w={"48"}
          flexDirection={"column"}
          overflow={"hidden"}
          rounded={"md"}
          border={"1px"}
          borderColor={"gray.200"}
          bg={"white"}
          p={1}
          shadow={"xl"}
          animation={"fade-in slide-in-from-top-1"}
        >
          {items.map((item, index) => (
            <Button
              key={index}
              onClick={() => {
                item.command()
                setIsOpen(false)
              }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              rounded={"sm"}
              gap={1}
              px={2}
              py={1}
              bg={"white"}
              fontSize={"sm"}
              fontWeight={"medium"}
              _hover={{ bg: "gray.100" }}
            >
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                gap={2}
                color={item.isActive() ? "blue.600" : "gray.600"}
              >
                <Box rounded={"sm"} p={1}>
                  <item.icon className="h-3 w-3" />
                </Box>
                <span>{item.name}</span>
              </Box>
            </Button>
          ))}
        </Box>
      )}
    </Box>
  )
}
