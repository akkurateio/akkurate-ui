import {
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
  AisTable,
  AisTableAddColumnAfter,
  AisTableAddColumnBefore,
  AisTableAddRowAfter,
  AisTableAddRowBefore,
  AisTableRemove,
  AisTableRemoveColumn,
  AisTableRemoveRow,
  AisUnlink,
} from "@akkurateio/icons"
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
  bgColor?: string
  colorScheme?: string
  actionButtons?: JSX.Element
  isSimple?: boolean
  isHtml?: boolean
}

export const CustomTipTapMenuBar: FunctionComponent<IProps> = ({
  editor,
  bgColor,
  colorScheme,
  actionButtons,
  isSimple = undefined,
  isHtml = false,
}) => {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState<boolean>(false)

  const iconSize = "16px"

  const buttons: {
    onClick: () => void
    disabled: boolean
    variant: string
    icon: JSX.Element
    label: string
    isSimple: boolean
    needsHtml?: boolean
  }[][] = [
    [
      {
        onClick: () => editor.chain().focus().toggleBold().run(),
        disabled: !editor.can().chain().focus().toggleBold().run(),
        variant: editor.isActive("bold") ? "solid" : "outline",
        icon: <AisBold boxSize={iconSize} />,
        label: "Gras",
        isSimple: true,
        needsHtml: false,
      },
      {
        onClick: () => editor.chain().focus().toggleItalic().run(),
        disabled: !editor.can().chain().focus().toggleItalic().run(),
        variant: editor.isActive("italic") ? "solid" : "outline",
        icon: <AisItalic boxSize={iconSize} />,
        label: "Italique",
        isSimple: true,
        needsHtml: false,
      },
    ],
    [
      {
        onClick: () => editor.chain().focus().toggleBulletList().run(),
        disabled: !editor.can().chain().focus().toggleBulletList().run(),
        variant: editor.isActive("bulletList") ? "solid" : "outline",
        icon: <AisListUnordered boxSize={iconSize} />,
        label: "Liste à puces",
        isSimple: true,
        needsHtml: false,
      },
      {
        onClick: () => editor.chain().focus().toggleOrderedList().run(),
        disabled: !editor.can().chain().focus().toggleOrderedList().run(),
        variant: editor.isActive("orderedList") ? "solid" : "outline",
        icon: <AisListOrdered boxSize={iconSize} />,
        label: "Liste numérotée",
        isSimple: true,
        needsHtml: false,
      },
    ],
    [
      {
        onClick: () =>
          editor
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run(),
        disabled: !editor
          .can()
          .chain()
          .focus()
          .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
          .run(),
        variant: "outline",
        icon: <AisTable boxSize={iconSize} />,
        label: "Tableau",
        isSimple: false,
        needsHtml: true,
      },
      {
        onClick: () => editor.chain().focus().addColumnBefore().run(),
        disabled: !editor.can().chain().focus().addColumnBefore().run(),
        variant: "outline",
        icon: <AisTableAddColumnBefore boxSize={iconSize} />,
        label: "Ajouter une colonne à gauche",
        isSimple: false,
        needsHtml: true,
      },
      {
        onClick: () => editor.chain().focus().addColumnAfter().run(),
        disabled: !editor.can().chain().focus().addColumnAfter().run(),
        variant: "outline",
        icon: <AisTableAddColumnAfter boxSize={iconSize} />,
        label: "Ajouter une colonne à droite",
        isSimple: false,
        needsHtml: true,
      },
      {
        onClick: () => editor.chain().focus().deleteColumn().run(),
        disabled: !editor.can().chain().focus().deleteColumn().run(),
        variant: "outline",
        icon: <AisTableRemoveColumn boxSize={iconSize} />,
        label: "Supprimer la colonne",
        isSimple: false,
        needsHtml: true,
      },
      {
        onClick: () => editor.chain().focus().addRowBefore().run(),
        disabled: !editor.can().chain().focus().addRowBefore().run(),
        variant: "outline",
        icon: <AisTableAddRowBefore boxSize={iconSize} />,
        label: "Ajouter une ligne au dessus",
        isSimple: false,
        needsHtml: true,
      },
      {
        onClick: () => editor.chain().focus().addRowAfter().run(),
        disabled: !editor.can().chain().focus().addRowAfter().run(),
        variant: "outline",
        icon: <AisTableAddRowAfter boxSize={iconSize} />,
        label: "Ajouter une ligne en dessous",
        isSimple: false,
        needsHtml: true,
      },
      {
        onClick: () => editor.chain().focus().deleteRow().run(),
        disabled: !editor.can().chain().focus().deleteRow().run(),
        variant: "outline",
        icon: <AisTableRemoveRow boxSize={iconSize} />,
        label: "Supprimer la ligne",
        isSimple: false,
        needsHtml: true,
      },
      {
        onClick: () => editor.chain().focus().deleteTable().run(),
        disabled: !editor.can().chain().focus().deleteTable().run(),
        variant: "outline",
        icon: <AisTableRemove boxSize={iconSize} />,
        label: "Supprimer le tableau",
        isSimple: false,
        needsHtml: true,
      },
    ],
    [
      {
        onClick: () => editor.chain().focus().setParagraph().run(),
        disabled: !editor.can().chain().focus().setParagraph().run(),
        variant: editor.isActive("paragraph") ? "solid" : "outline",
        icon: <AisParagraph boxSize={iconSize} />,
        label: "Paragraphe",
        isSimple: true,
        needsHtml: false,
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
        isSimple: false,
        needsHtml: false,
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
        isSimple: false,
        needsHtml: false,
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
        isSimple: false,
        needsHtml: false,
      },
      {
        onClick: () => editor.chain().focus().toggleCodeBlock().run(),
        disabled: !editor.can().chain().focus().toggleCodeBlock().run(),
        variant: editor.isActive("codeBlock") ? "solid" : "outline",
        icon: <AisCode boxSize={iconSize} />,
        label: "Code",
        isSimple: true,
        needsHtml: false,
      },
      {
        onClick: () => editor.chain().focus().toggleBlockquote().run(),
        disabled: !editor.can().chain().focus().toggleBlockquote().run(),
        variant: editor.isActive("blockquote") ? "solid" : "outline",
        icon: <AisBlockquote boxSize={iconSize} />,
        label: "Citation",
        isSimple: true,
        needsHtml: false,
      },
    ],
    [
      {
        onClick: () => editor.chain().focus().undo().run(),
        disabled: !editor.can().chain().focus().undo().run(),
        variant: "outline",
        icon: <AisBackward boxSize={iconSize} />,
        label: "Annuler",
        isSimple: false,
        needsHtml: false,
      },
      {
        onClick: () => editor.chain().focus().redo().run(),
        disabled: !editor.can().chain().focus().redo().run(),
        variant: "outline",
        icon: <AisForward boxSize={iconSize} />,
        label: "Rétablir",
        isSimple: false,
        needsHtml: false,
      },
    ],
    [
      {
        onClick: () => setIsLinkModalOpen(!isLinkModalOpen),
        disabled: false,
        variant: "outline",
        icon: <AisLink boxSize={iconSize} />,
        label: "Ajouter un lien",
        isSimple: false,
        needsHtml: false,
      },
      {
        onClick: () => editor.chain().focus().unsetLink().run(),
        disabled: !editor.isActive("link"),
        variant: editor.isActive("link") ? "solid" : "outline",
        icon: <AisUnlink boxSize={iconSize} />,
        label: "Supprimer le lien",
        isSimple: false,
        needsHtml: false,
      },
    ],
  ]

  return (
    <Box width={"full"}>
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
              {arrayOfBtn
                .filter((btn) => (!isHtml ? btn.needsHtml === false : true))
                .filter((btn) => (!!isSimple ? btn.isSimple === true : true))
                .map((button, index) => (
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
                      isDisabled={button.disabled}
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
    </Box>
  )
}
