import InputGroupWithShadow from "@akkurateio/forms/src/InputGroupWithShadow"
import Label from "@akkurateio/forms/src/Label"
import { useTheme, VStack } from "@chakra-ui/react"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import Table from "@tiptap/extension-table"
import TableCell from "@tiptap/extension-table-cell"
import TableHeader from "@tiptap/extension-table-header"
import TableRow from "@tiptap/extension-table-row"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"
import StarterKit from "@tiptap/starter-kit"
import { Editor, EditorContent, useEditor } from "@tiptap/react"
import { marked } from "marked"
import React, { FunctionComponent, useEffect } from "react"
import TurndownService from "turndown"
import { CustomTipTapMenuBar } from "./CustomTipTapMenuBar"

interface IProps {
  value: string
  setValue: (val: string) => void
  isHtml?: boolean
  // -=-=-=-=-=-=-=-=-=-=-=-=
  minHeight?: string
  height?: string
  // -=-=-=-=-=-=-=-=-=-=-=-=
  bgPrimaryColor?: string
  bgSecondary?: boolean
  bgSecondaryColor?: string
  menuBgColor?: string
  menuColorScheme?: string
  // -=-=-=-=-=-=-=-=-=-=-=-=
  withMenuBar?: boolean
  menuBarPlacement?: "top" | "bottom"
  actionButtons?: JSX.Element
  isSimple?: boolean
  // -=-=-=-=-=-=-=-=-=-=-=-=
  isInvalid?: boolean
  label?: string
}

export const AcsWysiwyg: FunctionComponent<IProps> = ({
  value,
  setValue,
  isHtml = false,
  // -=-=-=-=-=-=-=-=-=-=-=-=
  minHeight = "100px",
  height = "auto",
  // -=-=-=-=-=-=-=-=-=-=-=-=
  bgPrimaryColor,
  bgSecondary,
  bgSecondaryColor,
  menuBgColor = "gray.100",
  menuColorScheme = "primary",
  // -=-=-=-=-=-=-=-=-=-=-=-=
  menuBarPlacement = "top",
  withMenuBar = true,
  actionButtons,
  isSimple,
  // -=-=-=-=-=-=-=-=-=-=-=-=
  isInvalid,
  label,
}) => {
  const theme = useTheme()

  const editor = useEditor({
    extensions: [
      StarterKit,
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
      Table.configure({
        resizable: false,
      }),
      Image.configure({
        allowBase64: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: isHtml ? value : marked(value),
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()

      if (isHtml) {
        setValue(html)
      } else {
        const turndownService = new TurndownService()
        const markdown = turndownService.turndown(html)

        setValue(markdown)
      }
    },
  })

  useEffect(() => {
    if (editor && editor.getText() !== "") {
      if (
        value === "" ||
        value === null ||
        value === undefined ||
        value === "<p></p>"
      ) {
        editor.commands.setContent("")
      }
    }
  }, [value, editor])

  if (!editor) return null

  return (
    <VStack spacing={1} alignItems={"flex-start"} w={"full"} h={"full"}>
      {label && <Label label={label} />}
      {withMenuBar && menuBarPlacement === "top" && (
        <CustomTipTapMenuBar
          editor={editor as Editor}
          isSimple={isSimple}
          bgColor={menuBgColor}
          colorScheme={menuColorScheme}
          actionButtons={actionButtons}
          isHtml={isHtml}
        />
      )}
      <InputGroupWithShadow
        width={"full"}
        height={height}
        isInvalid={isInvalid}
      >
        <EditorContent
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
      {withMenuBar && menuBarPlacement === "bottom" && (
        <CustomTipTapMenuBar
          editor={editor as Editor}
          isSimple={isSimple}
          bgColor={menuBgColor}
          colorScheme={menuColorScheme}
          actionButtons={actionButtons}
          isHtml={isHtml}
        />
      )}
    </VStack>
  )
}
