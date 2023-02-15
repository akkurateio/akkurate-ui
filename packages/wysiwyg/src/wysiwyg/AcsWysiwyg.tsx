import { AcsDropzone, AisClose } from "@akkurateio/ds"
import InputGroupWithShadow from "@akkurateio/forms/src/InputGroupWithShadow"
import Label from "@akkurateio/forms/src/Label"
import { HStack, IconButton, Text, useTheme, VStack } from "@chakra-ui/react"
import Link from "@tiptap/extension-link"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { marked } from "marked"
import React, { FunctionComponent, useEffect, useState } from "react"
import TurndownService from "turndown"
import CustomTipTapMenuBar from "./CustomTipTapMenuBar"

interface IProps {
  value: string | undefined // this is markdown
  setValue: (val: string) => void // the val is returned as markdown
  setFiles?: (val: any) => void
  bgSecondary?: boolean
  bgPrimaryColor?: string
  bgSecondaryColor?: string
  minHeight?: string
  height?: string
  withMenuBar?: boolean
  closeDropzone?: boolean
  menuBgColor?: string
  menuColorScheme?: string
  maxFiles?: number
  isInvalid?: boolean
  label?: string
  menueBarPlacement?: "top" | "bottom"
  simpleBar?: boolean
  actionButtons?: JSX.Element
}

// Pour que le composant marche bien il faut ajouter le style dans le theme de chakra,
// Notamment les classes .markdown et .ProseMirror et .ProseMirror-focused
// Autrement le rendu du wysiwyg ne sera pas très joli
// !TODO: Ajouter dans la doc

export const AcsWysiwyg: FunctionComponent<IProps> = ({
  value = "",
  setValue,
  setFiles,
  bgSecondary = false,
  bgPrimaryColor,
  bgSecondaryColor,
  minHeight = "100px",
  height = "auto",
  withMenuBar = true,
  closeDropzone,
  menuBgColor = "gray.100",
  menuColorScheme = "primary",
  maxFiles = 5,
  isInvalid = false,
  actionButtons,
  label,
  menueBarPlacement = "bottom",
  simpleBar = false,
}) => {
  const [isDropzoneOpen, setIsDropzoneOpen] = useState<boolean>(false)

  const editor = useEditor({
    extensions: [
      StarterKit,
      /* It's adding a keyboard shortcut to the editor. */
      // HardBreak.extend({
      // 	addKeyboardShortcuts() {
      // 		return {
      // 			Enter: () => this.editor.commands.setHardBreak(),
      // 		}
      // 	},
      // }),
      TaskList,
      TaskItem.configure({
        nested: true,
        HTMLAttributes: {
          class: "task-list-item",
        },
      }),
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: marked(value),
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()

      const turndownService = new TurndownService()
      const markdown = turndownService.turndown(html)

      setValue(markdown)
    },
  })

  useEffect(() => {
    if (editor && value === "") {
      editor.commands.clearContent()
    }
  }, [value])

  useEffect(() => {
    if (editor && closeDropzone && isDropzoneOpen) {
      setIsDropzoneOpen(false)
    }
  }, [closeDropzone])

  const theme = useTheme()

  return (
    <VStack spacing={1} alignItems={"flex-start"} w={"full"} h={"full"}>
      {label && <Label label={label} />}
      {withMenuBar && menueBarPlacement === "top" && editor && (
        <CustomTipTapMenuBar
          editor={editor}
          hasDropzone={!!setFiles}
          isDropzoneOpen={isDropzoneOpen}
          setIsDropzoneOpen={setIsDropzoneOpen}
          bgColor={menuBgColor}
          colorScheme={menuColorScheme}
          simpleBar={simpleBar}
        />
      )}
      <InputGroupWithShadow
        width={"full"}
        height={height}
        isInvalid={isInvalid}
      >
        <EditorContent
          className="markdown"
          editor={editor}
          style={{
            minHeight,
            height: "100%",
            width: "100%",
            overflow: "auto",
            borderRadius: "4px",
            backgroundColor: isInvalid
              ? theme.colors.red[50] ?? "red"
              : bgSecondary
              ? bgSecondaryColor ?? theme.colors.yellow[50]
              : bgPrimaryColor ?? "white",
          }}
        />
      </InputGroupWithShadow>

      {withMenuBar && menueBarPlacement === "bottom" && editor && (
        <CustomTipTapMenuBar
          editor={editor}
          hasDropzone={!!setFiles}
          isDropzoneOpen={isDropzoneOpen}
          setIsDropzoneOpen={setIsDropzoneOpen}
          bgColor={menuBgColor}
          colorScheme={menuColorScheme}
          simpleBar={simpleBar}
          actionButtons={actionButtons}
        />
      )}

      {!!setFiles && isDropzoneOpen && (
        <VStack width={"full"}>
          <HStack width={"full"} justifyContent={"space-between"}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              Importez vos fichiers
            </Text>

            <IconButton
              rounded={"base"}
              aria-label={"close"}
              icon={
                <AisClose
                  boxSize={"16px"}
                  cursor={"pointer"}
                  rounded={"full"}
                  _hover={{ backgroundColor: "neutral.200" }}
                  color={"neutral.500"}
                />
              }
              size={"xs"}
              onClick={() => setIsDropzoneOpen(false)}
            />
          </HStack>
          <AcsDropzone handleChange={setFiles} maxFiles={maxFiles} />
        </VStack>
      )}
    </VStack>
  )
}
