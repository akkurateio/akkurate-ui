import { Editor } from "@tiptap/core"
import cx from "classnames"
import { Dispatch, FC, SetStateAction, useState } from "react"
import {
  AisCheckbox,
  AisCheckboxChecked,
  AisChevronDown,
} from "@akkurateio/icons"
import React from "react"
import { Box, Button } from "@chakra-ui/react"

export interface BubbleColorMenuItem {
  name: string
  color: string
}

interface ColorSelectorProps {
  editor: Editor
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const ColorSelector: FC<ColorSelectorProps> = ({
  editor,
  isOpen,
  setIsOpen,
}) => {
  const [isBlack, setIsBlack] = useState(true)
  const items: BubbleColorMenuItem[] = [
    {
      name: "Noir",
      color: "#1f1f1f",
    },
    {
      name: "Violet",
      color: "#9333EA",
    },
    {
      name: "Rouge",
      color: "#E00000",
    },
    {
      name: "Bleue",
      color: "#2563EB",
    },
    {
      name: "Vert",
      color: "#008A00",
    },
    {
      name: "Orange",
      color: "#FFA500",
    },
    {
      name: "Rose",
      color: "#BA4081",
    },
    {
      name: "Gris",
      color: "#8a8887",
    },
  ]

  const activeItem = items.find(({ color }) =>
    editor.isActive("textStyle", { color }),
  )

  return (
    <Box display={"relative"} w={"full"}>
      <Button
        bg={"white"}
        display={"flex"}
        h={"full"}
        alignItems={"center"}
        gap={1}
        p={3}
        rounded={0}
        fontSize={"sm"}
        fontWeight={"medium"}
        color={"gray.600"}
        _hover={{ bg: "#F5F5F4" }}
        _active={{ bg: "gray.200" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={{ color: activeItem?.color || "#1f1f1f" }}>A</span>

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
          {items.map(({ name, color }, index) => (
            <Button
              key={index}
              onClick={() => {
                editor.chain().focus().setColor(color).run()
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
              color={"gray.600"}
            >
              <Box display={"flex"} alignItems={"center"} gap={2}>
                <Box rounded={"sm"} px={1} fontSize={"md"} style={{ color }}>
                  A
                </Box>
                <span>{name}</span>
              </Box>

              {(editor.isActive("textStyle", { color }) ||
                (!activeItem && name === "Noir")) && (
                <AisCheckboxChecked className="h-4 w-4" />
              )}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  )
}
