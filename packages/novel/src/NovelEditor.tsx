import React, { useEffect, useState } from "react"
import { EditorContent, generateJSON, useEditor } from "@tiptap/react"
import { TiptapExtensions } from "./extensions"
import { Box, BoxProps, useToast } from "@chakra-ui/react"
import { handleSetValue, TiptapEditorProps } from "./utils/editor"
import { EditorBubbleMenu, TableMenu } from "./components"
import { prosemirror } from "./styles/prosemirror"
import { Pseudos, pseudoSelectors } from "@chakra-ui/styled-system"
import { marked } from "marked"

interface IProps extends Omit<BoxProps, "onChange" | "css" | "fontSize"> {
  value: string
  setValue: (val: string) => void
  /** This must return an objet with key url (for the img src), if function is not provided it will diplay a toast message error */
  handleUpload?: (file: File) =>
    | {
        url: string
      }
    | Promise<{ url: string }>
  /** The max filesize allowed for upload in mo, default at 10mo */
  maxFileSize?: number
  /** By default accept all images, can be fulfilled with partial mime (ex: ['image/']) */
  acceptedFileTypes?: string[]
  errorToastPosition?:
    | "top"
    | "bottom"
    | "top-right"
    | "top-left"
    | "bottom-left"
    | "bottom-right"
  /** The value return type that this wysiwyg will output */
  mode?: "html" | "json" | "markdown"
}
export const NovelEditor: React.FC<IProps> = ({
  value,
  setValue,
  handleUpload,
  maxFileSize = 10,
  acceptedFileTypes = ["image", "pdf"],
  errorToastPosition = "bottom",
  mode = "html",
  ...rest
}) => {
  const [hydrated, setHydrated] = useState(false)

  const editor = useEditor({
    extensions: TiptapExtensions(
      maxFileSize,
      mode,
      handleUpload,
      acceptedFileTypes,
      rest?.placeholder,
      errorToastPosition,
    ),
    editorProps: TiptapEditorProps(
      maxFileSize,
      acceptedFileTypes,
      handleUpload,
      errorToastPosition,
    ),
    autofocus: "end",
    onUpdate: ({ editor }) => {
      handleSetValue({ editor, setValue, mode })
    },
  })
  const toast = useToast()

  // Hydrate the editor with the content from localStorage.
  useEffect(() => {
    if (editor && value && !hydrated) {
      if (mode === "html")
        editor.commands.setContent(
          generateJSON(
            value,
            TiptapExtensions(
              maxFileSize,
              mode,
              handleUpload,
              acceptedFileTypes,
              rest?.placeholder,
              errorToastPosition,
            ),
          ),
          false,
          {
            preserveWhitespace: true,
          },
        )

      if (mode === "json") {
        try {
          editor.commands.setContent(JSON.parse(value), false, {
            preserveWhitespace: true,
          })
        } catch (e) {
          toast({
            title: "Erreur",
            description: "L'éditeur a été initialisé avec un contenue invalide",
            status: "error",
            duration: 9000,
            isClosable: true,
            position: errorToastPosition,
          })
        }
      }

      if (mode === "markdown")
        editor.commands.setContent(
          generateJSON(
            marked(value),
            TiptapExtensions(
              maxFileSize,
              mode,
              handleUpload,
              acceptedFileTypes,
              rest?.placeholder,
              errorToastPosition,
            ),
          ),
          false,
          {
            preserveWhitespace: true,
          },
        )

      setHydrated(true)
      editor.chain().focus(1).run()
    }
  }, [editor, value, hydrated])

  return (
    <Box
      position={"relative"}
      w={"full"}
      bg={"white"}
      p={8}
      onClick={() => {
        editor?.chain().focus().run()
      }}
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
