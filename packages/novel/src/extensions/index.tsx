import StarterKit from "@tiptap/starter-kit"
import HorizontalRule from "@tiptap/extension-horizontal-rule"
import TiptapLink from "@tiptap/extension-link"
import TiptapImage from "@tiptap/extension-image"
import Placeholder from "@tiptap/extension-placeholder"
import TiptapUnderline from "@tiptap/extension-underline"
import TextStyle from "@tiptap/extension-text-style"
import { Color } from "@tiptap/extension-color"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"
import { Markdown } from "tiptap-markdown"
import Highlight from "@tiptap/extension-highlight"

import SlashCommand from "./slash-command"
import { InputRule } from "@tiptap/core"
import UploadImagesPlugin from "../plugins/UploadImages"
import Table from "@tiptap/extension-table"
import TableRow from "@tiptap/extension-table-row"
import TableCell from "@tiptap/extension-table-cell"
import TableHeader from "@tiptap/extension-table-header"

const CustomImage = TiptapImage.extend({
  addProseMirrorPlugins() {
    return [UploadImagesPlugin()]
  },
})

export const TiptapExtensions = (
  handleUpload: (file: File) => Promise<{
    url: string
  }>,
  maxFileSize: number,
  mode: "html" | "json" | "markdown",
  acceptedFileTypes?: string[],
  placeholder?: string,
  toastPosition?:
    | "top"
    | "bottom"
    | "top-right"
    | "top-left"
    | "bottom-left"
    | "bottom-right",
) => [
  StarterKit.configure({
    bulletList: {
      HTMLAttributes: {
        class: "list-disc list-outside leading-3 -mt-2",
      },
    },
    orderedList: {
      HTMLAttributes: {
        class: "list-decimal list-outside leading-3 -mt-2",
      },
    },
    listItem: {
      HTMLAttributes: {
        class: "leading-normal -mb-2",
      },
    },
    blockquote: {
      HTMLAttributes: {
        class: "border-l-4 border-stone-700",
      },
    },
    codeBlock: {
      HTMLAttributes: {
        class:
          "rounded-sm bg-stone-100 p-5 font-mono font-medium text-stone-800",
      },
    },
    code: {
      HTMLAttributes: {
        class:
          "rounded-md bg-stone-200 px-1.5 py-1 font-mono font-medium text-stone-900",
        spellcheck: "false",
      },
    },
    horizontalRule: false,
    dropcursor: {
      color: "#DBEAFE",
      width: 4,
    },
  }),
  // patch to fix horizontal rule bug: https://github.com/ueberdosis/tiptap/pull/3859#issuecomment-1536799740
  HorizontalRule.extend({
    addInputRules() {
      return [
        new InputRule({
          find: /^(?:---|—-|___\s|\*\*\*\s)$/,
          handler: ({ state, range }) => {
            const attributes = {}

            const { tr } = state
            const start = range.from
            let end = range.to

            tr.insert(start - 1, this.type.create(attributes)).delete(
              tr.mapping.map(start),
              tr.mapping.map(end),
            )
          },
        }),
      ]
    },
  }).configure({
    HTMLAttributes: {
      class: "mt-4 mb-6 border-t border-stone-300",
    },
  }),
  TiptapLink.configure({
    HTMLAttributes: {
      class:
        "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
    },
  }),
  CustomImage.configure({
    allowBase64: true,
    HTMLAttributes: {
      class: "rounded-lg border border-stone-200",
    },
  }),
  Placeholder.configure({
    placeholder: ({ node }) => {
      if (node.type.name === "heading") {
        return `Titre ${node.attrs.level}`
      }
      return placeholder ?? "Appuyez sur / pour lancer une commande"
    },
    includeChildren: true,
  }),
  Table.configure({
    HTMLAttributes: {
      class:
        "table-fixed m-0 overflow-hidden w-[98%] mx-auto my-3 border-collapse",
    },
    allowTableNodeSelection: true,
    resizable: true,
  }),
  TableRow.configure({
    HTMLAttributes: {
      class:
        "border box-border min-w-[1em] py-2 px-1 relative align-top text-start !py-1",
    },
  }),
  TableCell.configure({
    HTMLAttributes: {
      class:
        "border box-border min-w-[1em] py-2 px-1 relative align-top text-start !py-1",
    },
  }),
  TableHeader.configure({
    HTMLAttributes: {
      class:
        "bg-stone-100 border box-border min-w-[1em] py-2 px-1 relative align-top text-start !py-1",
    },
  }),
  SlashCommand(
    handleUpload,
    maxFileSize,
    mode,
    acceptedFileTypes,
    toastPosition,
  ),
  TiptapUnderline,
  TextStyle,
  Color,
  Highlight.configure({
    multicolor: true,
  }),
  TaskList.configure({
    HTMLAttributes: {
      class: "not-prose pl-2",
    },
  }),
  TaskItem.configure({
    HTMLAttributes: {
      class: "flex items-start my-4",
    },
    nested: true,
  }),
  Markdown.configure({
    html: false,
    transformCopiedText: true,
  }),
]
