import React, { useEffect, useState } from "react"
import { EditorContent, useEditor } from "@tiptap/react"
import { TiptapExtensions } from "./extensions"
import { Box, BoxProps } from "@chakra-ui/react"
import { handleSetValue, TiptapEditorProps } from "./utils/editor"
import { EditorBubbleMenu, TableMenu } from "./components"
import { prosemirror } from "./styles/prosemirror"
import { Pseudos, pseudoSelectors } from "@chakra-ui/styled-system"

interface IProps extends BoxProps {
  value: string
  setValue: (val: string) => void
  /** This must return a Promise containing an object with key url (for the img src) */
  handleUpload: (file: File) => Promise<{
    url: string
  }>
  /** The max filesize allowed for upload in mo, default at 10mo */
  maxFileSize?: number
  /** By default accept all images, can be fulfilled with partial mime (ex: ['image/']) */
  acceptedFileTypes?: string[]
  toastPosition?:
    | "top"
    | "bottom"
    | "top-right"
    | "top-left"
    | "bottom-left"
    | "bottom-right"
  mode?: "html" | "json" | "markdown"
}
export const NovelEditor: React.FC<IProps> = ({
  value,
  setValue,
  handleUpload,
  maxFileSize = 10,
  acceptedFileTypes = ["image", "pdf"],
  toastPosition = "bottom",
  mode = "html",
  ...rest
}) => {
  const [hydrated, setHydrated] = useState(false)

  const editor = useEditor({
    extensions: TiptapExtensions(
      handleUpload,
      maxFileSize,
      mode,
      acceptedFileTypes,
      rest?.placeholder,
      toastPosition,
    ),
    editorProps: TiptapEditorProps(
      handleUpload,
      maxFileSize,
      acceptedFileTypes,
      toastPosition,
    ),
    autofocus: "end",
    onUpdate: ({ editor }) => {
      handleSetValue({ editor, setValue, mode })
    },
  })

  // Hydrate the editor with the content from localStorage.
  useEffect(() => {
    if (editor && value && !hydrated) {
      // if (mode === "markdown") editor.commands.setContent(value)
      editor.commands.setContent(value)
      // handleSetValue({ editor, setValue, mode, value })
      setHydrated(true)
    }
  }, [editor, value, hydrated])

  return (
    <Box
      position={"relative"}
      w="full"
      bg={"white"}
      p={8}
      onClick={() => {
        editor?.chain().focus().run()
      }}
      minH={"500px"}
      maxWidth={"screen-lg"}
      rounded={"lg"}
      shadow={"lg"}
      css={prosemirror}
      {...rest}
    >
      {/*@ts-ignore*/}
      {editor && <EditorBubbleMenu editor={editor} mode={mode} />}
      {editor?.isActive("table") && <TableMenu editor={editor} />}
      <EditorContent style={{ height: "100%" }} editor={editor} />
    </Box>
  )
}
