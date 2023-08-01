import { BubbleMenu, BubbleMenuProps } from "@tiptap/react"
import cx from "classnames"
import { FC, useState } from "react"
import React from "react"

import { NodeSelector } from "./node-selector"
import { ColorSelector } from "./color-selector"
import { AisBold, AisCode, AisItalic, AisUnderline } from "@akkurateio/icons"
import { Box, Button, Flex } from "@chakra-ui/react"
import Highlight from "@tiptap/extension-highlight"
import { HighlightSelector } from "./highlight-selector"

export interface BubbleMenuItem {
  name: string
  isActive: () => boolean
  command: () => void
  icon: typeof AisBold
  mode?: "html" | "json" | "markdown"
}

type EditorBubbleMenuProps = Omit<BubbleMenuProps, "children">

export const EditorBubbleMenu: FC<EditorBubbleMenuProps> = (props) => {
  const items: BubbleMenuItem[] = [
    {
      name: "gras",
      isActive: () => props.editor.isActive("bold"),
      command: () => props.editor.chain().focus().toggleBold().run(),
      icon: AisBold,
    },
    {
      name: "italique",
      isActive: () => props.editor.isActive("italic"),
      command: () => props.editor.chain().focus().toggleItalic().run(),
      icon: AisItalic,
    },
    {
      name: "souligner",
      isActive: () => props.editor.isActive("underline"),
      command: () => props.editor.chain().focus().toggleUnderline().run(),
      icon: AisUnderline,
    },
    // {
    //   name: "strike",
    //   isActive: () => props.editor.isActive("strike"),
    //   command: () => props.editor.chain().focus().toggleStrike().run(),
    //   icon: AisS,
    // },
    {
      name: "code",
      isActive: () => props.editor.isActive("code"),
      command: () => props.editor.chain().focus().toggleCode().run(),
      icon: AisCode,
    },
  ]

  const bubbleMenuProps: EditorBubbleMenuProps = {
    ...props,
    shouldShow: ({ editor }) => {
      // don't show if image is selected
      if (editor.isActive("image")) {
        return false
      }
      return editor.view.state.selection.content().size > 0
    },
    tippyOptions: {
      onHidden: () => {
        setIsNodeSelectorOpen(false)
        setIsColorSelectorOpen(false)
      },
    },
  }

  const [isNodeSelectorOpen, setIsNodeSelectorOpen] = useState(false)
  const [isColorSelectorOpen, setIsColorSelectorOpen] = useState(false)
  const [isColorHighlightSelectorOpen, setIsColorHighlightSelectorOpen] =
    useState(false)

  return (
    <BubbleMenu {...bubbleMenuProps}>
      <Flex
        direction={"row"}
        align={"center"}
        overflow={"hidden"}
        border={"1px"}
        rounded={"md"}
        borderColor={"gray.200"}
        bg={"white"}
        boxShadow={"xl"}
        zIndex={700}
      >
        {/*@ts-ignore*/}
        {props?.mode !== "markdown" ||
          // @ts-ignore
          (!props.editor.state.selection.$head?.path.some((p: any) => {
            return (
              p?.type?.name === "table" ||
              p?.type?.name === "listItem" ||
              p?.type?.name === "taskItem"
            )
          }) && (
            <NodeSelector
              editor={props.editor}
              isOpen={isNodeSelectorOpen}
              setIsOpen={() => {
                setIsNodeSelectorOpen(!isNodeSelectorOpen)
                setIsColorSelectorOpen(false)
                setIsColorHighlightSelectorOpen(false)
              }}
              // @ts-ignore
              mode={props?.mode}
            />
          ))}

        {items.map((item, index) => {
          // @ts-ignore
          if (item.name === "souligner" && props?.mode === "markdown")
            return null

          return (
            <Button
              key={index}
              onClick={item.command}
              p={2}
              rounded={0}
              bg={"white"}
              color={item.isActive() ? "blue.500" : "gray.600"}
              _hover={{ bg: "#F5F5F4" }}
            >
              <item.icon h={4} w={4} _active={{ color: "blue.500" }} />
            </Button>
          )
        })}

        {/*@ts-ignore*/}
        {props?.mode !== "markdown" && (
          <ColorSelector
            editor={props.editor}
            isOpen={isColorSelectorOpen}
            setIsOpen={() => {
              setIsColorSelectorOpen(!isColorSelectorOpen)
              setIsNodeSelectorOpen(false)
              setIsColorHighlightSelectorOpen(false)
            }}
          />
        )}
        {/*<HighlightSelector*/}
        {/*  editor={props.editor}*/}
        {/*  isOpen={isColorHighlightSelectorOpen}*/}
        {/*  setIsOpen={() => {*/}
        {/*    setIsColorHighlightSelectorOpen(!isColorHighlightSelectorOpen)*/}
        {/*    setIsColorSelectorOpen(false)*/}
        {/*    setIsNodeSelectorOpen(false)*/}
        {/*  }}*/}
        {/*/>*/}
      </Flex>
    </BubbleMenu>
  )
}
