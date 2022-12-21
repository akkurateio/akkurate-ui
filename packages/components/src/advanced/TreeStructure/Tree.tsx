import FormControlLayout from "@akkurateio/forms/src/FormControlLayout"
import React from "react"
import { InterfaceTree } from "./InterfaceTree"
import TreeSecond from "./TreeSecond"

interface TreeOptions {
  tree: InterfaceTree[]
  item: {
    id: string | number | null
    name: string | null
  }
  setItem: (item: { id: string | number | null; name: string | null }) => void
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
