import React, { useEffect, useState } from "react"
import { InterfaceTree } from "./InterfaceTree"
import TreeSecond from "./TreeSecond"
import FormControlLayout from "@akkurateio/forms/src/FormControlLayout"

interface TreeOptions {
  tree: InterfaceTree[]
  item: {
    id: string | number
    name: string
  }
  setItem: (item: { id: string | number; name: string }) => void
}

export const AcsTree: React.FC<TreeOptions> = ({
  tree,
  item,
  setItem,
  ...props
}) => {
  return (
    <FormControlLayout {...props}>
      <TreeSecond tree={tree} item={item} setItem={setItem} />
    </FormControlLayout>
  )
}

export default AcsTree
