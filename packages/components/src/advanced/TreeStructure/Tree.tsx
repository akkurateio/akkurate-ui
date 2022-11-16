import React from "react"
import { InterfaceTree } from "./InterfaceTree"
import TreeSecond from "./TreeSecond"
import FormControlLayout from "@akkurateio/forms/src/FormControlLayout"

interface TreeOptions {
  tree: InterfaceTree[]
}

export const AcsTree: React.FC<TreeOptions> = ({ tree, ...props }) => {
  return (
    <FormControlLayout {...props}>
      <TreeSecond tree={tree} />
    </FormControlLayout>
  )
}

export default AcsTree
