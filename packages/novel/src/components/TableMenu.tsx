import { useState, useEffect } from "react"
import {
  AisMagicHand,
  AisTableAddColumnAfter,
  AisTableAddRowAfter,
  AisTableMergeCell,
  AisTableRemoveColumn,
  AisTableRemoveRow,
  AisTrash,
} from "@akkurateio/icons"
import React from "react"
import { Box, Button } from "@chakra-ui/react"
interface TableMenuItem {
  name: string
  command: () => void
  icon: typeof AisMagicHand
}

export const TableMenu = ({ editor }: { editor: any }) => {
  const [tableLocation, setTableLocation] = useState(0)
  const items: TableMenuItem[] = [
    // {
    //   name: "Fusionner des cellules",
    //   command: () => {
    //     editor?.chain().focus().mergeOrSplit().run()
    //   },
    //   icon: AisTableMergeCell,
    // },
    {
      name: "Ajouter une colonne",
      command: () => editor.chain().focus().addColumnAfter().run(),
      icon: AisTableAddColumnAfter,
    },
    {
      name: "Ajouter une ligne",
      command: () => editor.chain().focus().addRowAfter().run(),
      icon: AisTableAddRowAfter,
    },
    {
      name: "Supprimer une colonne",
      command: () => editor.chain().focus().deleteColumn().run(),
      icon: AisTableRemoveColumn,
    },
    {
      name: "Supprimer une ligne",
      command: () => editor.chain().focus().deleteRow().run(),
      icon: AisTableRemoveRow,
    },
    {
      name: "Supprimer le tableau",
      command: () => editor.chain().focus().deleteTable().run(),
      icon: AisTrash,
    },
  ]

  useEffect(() => {
    const handleWindowClick = () => {
      const selection: any = window.getSelection()
      console.log("selection", selection)
      const range = selection.getRangeAt(0)
      console.log("range", range)
      const tableNode = range.startContainer?.closest?.("table")
      console.log("tableNode", tableNode)
      if (tableNode) {
        const activeTable = tableNode.getBoundingClientRect() // get the currently active table position
        console.log("activeTable", activeTable)
        const scrollOffset = window.scrollY // calculating the current height of the site
        console.log("scrollOffset", scrollOffset)
        const tableTop = activeTable.top + scrollOffset
        tableLocation !== tableTop && setTableLocation(tableTop)
      }
    }

    // Call the function if user click on the table
    window.addEventListener("click", handleWindowClick)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("click", handleWindowClick)
    }
  }, [tableLocation])

  return (
    <Box
      position={"absolute"}
      display={"flex"}
      overflow={"hidden"}
      rounded={"md"}
      border={"1px"}
      borderColor={"gray.200"}
      bg={"white"}
      transform={"translate(-50%,0)"}
      shadow={"xl"}
      zIndex={800}
      left={"50%"}
      style={{
        top: `${tableLocation - 220}px`,
      }}
    >
      {items.map((item, index) => (
        <Button
          key={index}
          onClick={item.command}
          p={2}
          rounded={0}
          bg={"white"}
          color={"gray.600"}
          _hover={{ bg: "#F5F5F4" }}
          _active={{ bg: "gray.200" }}
          title={item.name}
        >
          <item.icon
            fill={item.name.includes("Supprimer") ? "red" : "currentColor"}
          />
        </Button>
      ))}
    </Box>
  )
}
