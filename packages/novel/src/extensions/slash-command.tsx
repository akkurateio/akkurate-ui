import React, {
  useState,
  useEffect,
  useCallback,
  ReactNode,
  useRef,
  useLayoutEffect,
} from "react"
import { Editor, Range, Extension } from "@tiptap/core"
import Suggestion from "@tiptap/suggestion"
import { ReactRenderer } from "@tiptap/react"
import tippy from "tippy.js"
import {
  AisBlockquote,
  AisCode,
  AisDownloadCloud,
  AisImage,
  AisLink,
  AisList,
  AisListCheck,
  AisListOrdered,
  AisListUnordered,
  AisMagicHand,
  AisParagraph,
  AisPencil,
  AisTable,
} from "@akkurateio/icons"
import { startImageUpload } from "../plugins/UploadImages"
import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react"

interface CommandItemProps {
  title: string
  description: string
  icon: ReactNode
}

interface CommandProps {
  editor: Editor
  range: Range
}

const Command = Extension.create({
  name: "slash-command",
  addOptions() {
    return {
      suggestion: {
        char: "/",
        command: ({
          editor,
          range,
          props,
        }: {
          editor: Editor
          range: Range
          props: any
        }) => {
          props.command({ editor, range })
        },
      },
    }
  },
  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
      }),
    ]
  },
})

const getSuggestionItems = (
  {
    query,
  }: {
    query: string
  },
  handleUpload: (file: File) => Promise<{ url: string }>,
  maxFileSize: number,
  acceptedFileTypes?: string[],
  toastPosition?:
    | "top"
    | "bottom"
    | "top-right"
    | "top-left"
    | "bottom-left"
    | "bottom-right",
) => {
  return [
    {
      title: "Texte",
      description: "Juste du texte.",
      searchTerms: ["p", "paragraphe"],
      icon: <AisParagraph width={18} />,
      command: ({ editor, range }: CommandProps) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .toggleNode("paragraph", "paragraph")
          .run()
      },
    },
    {
      title: "Titre 1",
      description: "Gros titre de section.",
      searchTerms: ["titre", "gros", "large"],
      icon: <AisMagicHand width={18} />,
      command: ({ editor, range }: CommandProps) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 1 })
          .run()
      },
    },
    {
      title: "Titre 2",
      description: "Sous-titre de section.",
      searchTerms: ["titre", "moyen"],
      icon: <AisMagicHand width={18} />,
      command: ({ editor, range }: CommandProps) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 2 })
          .run()
      },
    },
    {
      title: "Titre 3",
      description: "Petit sous-titre de section.",
      searchTerms: ["titre", "petit"],
      icon: <AisMagicHand width={18} />,
      command: ({ editor, range }: CommandProps) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 3 })
          .run()
      },
    },
    // {
    //   title: "Lien",
    //   description: "Ajoute un lien vers un site",
    //   searchTerms: ["link", "lien"],
    //   icon: <AisLink width={18} />,
    //   command: ({ editor, range }: CommandProps) => {
    //     console.log(editor.state.selection.$from.parent.textContent)
    //     editor
    //       .chain()
    //       .focus()
    //       .deleteRange(range)
    //       .setLink({
    //         href: editor.state.selection.$from.parent.textContent
    //           .split(" ")
    //           .find((word: string) => word.includes("http")) as string,
    //         target: "_blank",
    //       })
    //       .run()
    //   },
    // },
    {
      title: "Liste à puce",
      description: "Créer une liste à puces.",
      searchTerms: ["unordered", "point", "list"],
      icon: <AisListUnordered width={18} />,
      command: ({ editor, range }: CommandProps) => {
        editor.chain().focus().deleteRange(range).toggleBulletList().run()
      },
    },
    {
      title: "Liste numérotée",
      description: "Créer une liste numérotée.",
      searchTerms: ["ordered", "list"],
      icon: <AisListOrdered width={18} />,
      command: ({ editor, range }: CommandProps) => {
        editor.chain().focus().deleteRange(range).toggleOrderedList().run()
      },
    },
    {
      title: "Liste de tâches",
      description: "Traque les tâches à faire !",
      searchTerms: ["todo", "task", "list", "check", "checkbox"],
      icon: <AisListCheck width={18} />,
      command: ({ editor, range }: CommandProps) => {
        editor.chain().focus().deleteRange(range).toggleTaskList().run()
      },
    },
    {
      title: "Citation",
      description: "Citation d'un texte.",
      searchTerms: ["blockquote", "quote", "guillemet"],
      icon: <AisBlockquote width={18} />,
      command: ({ editor, range }: CommandProps) =>
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .toggleNode("paragraph", "paragraph")
          .toggleBlockquote()
          .run(),
    },
    {
      title: "Code",
      description: "Ajoute un bloc de code.",
      searchTerms: ["codeblock"],
      icon: <AisCode width={18} />,
      command: ({ editor, range }: CommandProps) =>
        editor.chain().focus().deleteRange(range).toggleCodeBlock().run(),
    },
    {
      title: "Image",
      description: "Ajoute une image.",
      searchTerms: ["photo", "picture", "media"],
      icon: <AisImage width={18} />,
      command: ({ editor, range }: CommandProps) => {
        editor
          .chain()
          .focus()
          .insertContentAt(range.to, [
            {
              type: "paragraph",
              content: "",
            },
          ])
          .run()
        editor.chain().focus(range.to).deleteRange(range).run()
        // upload image
        const input = document.createElement("input")
        input.type = "file"
        input.accept = "image/*"
        input.onchange = async () => {
          if (input.files?.length) {
            const file = input.files[0]
            const pos = editor.view.state.selection.from
            startImageUpload(
              file,
              editor.view,
              pos,
              handleUpload,
              maxFileSize,
              acceptedFileTypes,
              toastPosition,
            )
          }
        }
        input.click()
      },
    },
    {
      title: "Table",
      description: "Ajoute une table.",
      icon: <AisTable />,
      command: ({ editor, range }: CommandProps) => {
        editor
          .chain()
          .focus()
          .insertContentAt(range.to, [
            {
              type: "paragraph",
              content: "",
            },
          ])
          .run()

        editor
          .chain()
          .focus(range.to)
          .deleteRange(range)
          .insertTable({
            rows: 3,
            cols: 3,
            withHeaderRow: true,
          })
          .run()
      },
    },
  ].filter((item) => {
    if (typeof query === "string" && query.length > 0) {
      const search = query.toLowerCase()
      return (
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        (item.searchTerms &&
          item.searchTerms.some((term: string) => term.includes(search)))
      )
    }
    return true
  })
}

export const updateScrollView = (container: HTMLElement, item: HTMLElement) => {
  const containerHeight = container.offsetHeight
  const itemHeight = item ? item.offsetHeight : 0

  const top = item.offsetTop
  const bottom = top + itemHeight

  if (top < container.scrollTop) {
    container.scrollTop -= container.scrollTop - top + 5
  } else if (bottom > containerHeight + container.scrollTop) {
    container.scrollTop += bottom - containerHeight - container.scrollTop + 5
  }
}

const CommandList = ({
  items,
  command,
  editor,
  range,
}: {
  items: CommandItemProps[]
  command: any
  editor: any
  range: any
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const toast = useToast()

  const selectItem = useCallback(
    (index: number) => {
      const item = items[index]
      if (item) {
        command(item)
      }
    },
    [command, editor, items],
  )

  useEffect(() => {
    const navigationKeys = ["ArrowUp", "ArrowDown", "Enter"]
    const onKeyDown = (e: KeyboardEvent) => {
      if (navigationKeys.includes(e.key)) {
        e.preventDefault()
        if (e.key === "ArrowUp") {
          setSelectedIndex((selectedIndex + items.length - 1) % items.length)
          return true
        }
        if (e.key === "ArrowDown") {
          setSelectedIndex((selectedIndex + 1) % items.length)
          return true
        }
        if (e.key === "Enter") {
          selectItem(selectedIndex)
          return true
        }
        return false
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [items, selectedIndex, setSelectedIndex, selectItem])

  useEffect(() => {
    setSelectedIndex(0)
  }, [items])

  const commandListContainer = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const container = commandListContainer?.current

    const item = container?.children[selectedIndex] as HTMLElement

    if (item && container) updateScrollView(container, item)
  }, [selectedIndex])

  return items.length > 0 ? (
    <Flex
      flexDir={"column"}
      gap={"1px"}
      id="slash-command"
      ref={commandListContainer}
      zIndex={999}
      h={"auto"}
      maxH={"330px"}
      w={"72"}
      overflowY={"scroll"}
      overflowX={"hidden"}
      rounded={"md"}
      border={"1px"}
      borderColor={"#E2E8F0"}
      bg={"white"}
      p={2}
      // shadow={"0px 4px 4px rgba(0, 0, 0, 0.05)"}
      scrollBehavior={"smooth"}
    >
      {items.map((item: CommandItemProps, index: number) => {
        return (
          <Button
            pos={"relative"}
            display={"flex"}
            w={"full"}
            textAlign={"left"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            rounded={"md"}
            p={1}
            fontSize={"sm"}
            color={"#1C1917"}
            gap={2}
            _hover={{
              bg: "#F5F5F4",
            }}
            _focus={{
              zIndex: 1,
            }}
            bg={index === selectedIndex ? "#F5F5F4" : "white"}
            key={index}
            onClick={() => selectItem(index)}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              rounded={"md"}
              border={"1px"}
              borderColor={"#E2E8F0"}
              bg={"white"}
              p={1}
              boxSize={8}
            >
              {item.icon}
            </Box>
            <Flex flex={1} flexDirection={"column"}>
              <Text fontSize={"xs"}>{item.title}</Text>
              <Text fontSize={"2xs"} fontWeight={"normal"} opacity={0.5}>
                {item.description}
              </Text>
            </Flex>
          </Button>
        )
      })}
    </Flex>
  ) : null
}

const renderItems = (mode: "html" | "json" | "markdown") => {
  let component: ReactRenderer | null = null
  let popup: any | null = null

  return {
    onStart: (props: { editor: Editor; clientRect: DOMRect }) => {
      component = new ReactRenderer(CommandList, {
        props,
        editor: props.editor,
      })

      //@ts-ignore
      if (
        mode === "markdown" &&
        props.editor.state.selection.$head?.path.some((p: any) => {
          return (
            p?.type?.name === "table" ||
            p?.type?.name === "listItem" ||
            p?.type?.name === "taskItem"
          )
        })
      )
        return

      // @ts-ignore
      popup = tippy("body", {
        getReferenceClientRect: props.clientRect,
        appendTo: () => document.body,
        content: component.element,
        showOnCreate: true,
        interactive: true,
        trigger: "manual",
        placement: "bottom-start",
      })
    },
    onUpdate: (props: { editor: Editor; clientRect: DOMRect }) => {
      component?.updateProps(props)

      console.log("editor", props.editor)

      popup &&
        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        })
    },
    onKeyDown: (props: { event: KeyboardEvent }) => {
      if (props.event.key === "Escape") {
        popup?.[0].hide()

        return true
      }

      // @ts-ignore
      return component?.ref?.onKeyDown(props)
    },
    onExit: () => {
      popup?.[0].destroy()
      component?.destroy()
    },
  }
}

const SlashCommand = (
  handleUpload: (file: File) => Promise<{ url: string }>,
  maxFileSize: number,
  mode: "html" | "json" | "markdown",
  acceptedFileTypes?: string[],
  toastPosition?:
    | "top"
    | "bottom"
    | "top-right"
    | "top-left"
    | "bottom-left"
    | "bottom-right",
) =>
  Command.configure({
    suggestion: {
      items: (query: any) =>
        getSuggestionItems(
          query,
          handleUpload,
          maxFileSize,
          acceptedFileTypes,
          toastPosition,
        ),
      render: () => renderItems(mode),
    },
  })

export default SlashCommand
