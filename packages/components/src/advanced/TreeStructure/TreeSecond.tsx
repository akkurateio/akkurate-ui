import React from "react"
import { InterfaceTree } from "./InterfaceTree"
import TreeChild from "./TreeChild"

interface IProps {
  tree: InterfaceTree[]
  item: {
    id: string | number | null
    name: string | null
  }
  setItem: (item: { id: string | number | null; name: string | null }) => void
}

const TreeSecond: React.FC<IProps> = ({ tree, item, setItem }) => {
  return (
    <>
      {tree.map((child) => (
        <TreeChild child={child} key={child.id} item={item} setItem={setItem} />
      ))}
    </>
  )
}

export default TreeSecond
