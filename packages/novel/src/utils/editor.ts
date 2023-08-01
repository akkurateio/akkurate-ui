import { Editor } from "@tiptap/core"
import { EditorProps } from "@tiptap/pm/view"
import { startImageUpload } from "../plugins/UploadImages"
import TurndownService from "turndown"
// @ts-ignore
import { tables, gfm } from "turndown-plugin-gfm"

interface IProps {
  editor: Editor
  setValue: (value: string) => void
  mode: "html" | "json" | "markdown"
  value?: string
}
export const handleSetValue = ({ editor, setValue, mode, value }: IProps) => {
  if (mode === "html") {
    setValue(value ?? editor.getHTML())
  }

  if (mode === "json") {
    setValue(JSON.stringify(value ?? editor.getJSON()))
  }

  if (mode === "markdown") {
    var markdownParser = new TurndownService({
      headingStyle: "atx",
    })
    gfm(markdownParser)
    tables(markdownParser)

    value = value ?? editor.getHTML()
    value = value.replace(/<\/?p(?!>)[\s\S]*?>|<\/?p>/g, "")

    const markdown = markdownParser.turndown(value)
    setValue(markdown)
  }
}

export const TiptapEditorProps = (
  handleUpload: (file: File) => Promise<{
    url: string
  }>,
  maxFileSize: number,
  acceptedFileTypes: string[],
  toastPosition?:
    | "top"
    | "bottom"
    | "top-right"
    | "top-left"
    | "bottom-left"
    | "bottom-right",
): EditorProps => {
  return {
    attributes: {
      class: `prose-lg prose-stone dark:prose-invert prose-headings:font-display font-default focus:outline-none max-w-full`,
      style: "max-width: 100vw",
    },
    handleDOMEvents: {
      keydown: (_view, event) => {
        // prevent default event listeners from firing when slash command is active
        if (["ArrowUp", "ArrowDown", "Enter"].includes(event.key)) {
          const slashCommand = document.querySelector("#slash-command")
          if (slashCommand) {
            return true
          }
        }
      },
    },
    handlePaste: (view, event) => {
      if (
        event.clipboardData &&
        event.clipboardData.files &&
        event.clipboardData.files[0]
      ) {
        event.preventDefault()
        const pos = view.state.selection.from

        for (let i = 0; i < event.clipboardData.files.length; i++) {
          const file = event.clipboardData.files[i]
          startImageUpload(
            file,
            view,
            pos,
            handleUpload,
            maxFileSize,
            acceptedFileTypes,
            toastPosition,
          )
        }

        const { schema } = view.state
        const addEmptyLine = view.state.tr.insert(
          pos,
          schema.nodes.paragraph.create(),
        )
        view.dispatch(addEmptyLine)
        return true
      }
      return false
    },
    handleDrop: (view, event, _slice, moved) => {
      if (
        !moved &&
        event.dataTransfer &&
        event.dataTransfer.files &&
        event.dataTransfer.files[0]
      ) {
        event.preventDefault()
        const coordinates = view.posAtCoords({
          left: event.clientX,
          top: event.clientY,
        })

        for (let i = 0; i < event.dataTransfer.files.length; i++) {
          const file = event.dataTransfer.files[i]
          startImageUpload(
            file,
            view,
            coordinates!.pos,
            handleUpload,
            maxFileSize,
            acceptedFileTypes,
            toastPosition,
          )
        }

        const { schema } = view.state
        const addEmptyLine = view.state.tr.insert(
          coordinates!.pos,
          schema.nodes.paragraph.create(),
        )
        view.dispatch(addEmptyLine)

        return true
      }
      return false
    },
  }
}
