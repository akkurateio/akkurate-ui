import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisNotebook: FunctionComponent<IProps> = ({
  size = IconSize.md,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={"0 0 32 32"}
      fill={"currentColor"}
      className={className}
      xmlns={"http://www.w3.org/2000/svg"}
    >
      <path d="M28 5H4c-1.103 0-2 .897-2 2v18c0 1.103.897 2 2 2h24c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2ZM4 7h11v18H4V7Zm13 18V7h11v18H17Z" />
      <path d="M25 9h-5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2ZM25 13h-5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2ZM25 17h-5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2ZM25 21h-5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2Z" />
    </svg>
  )
}
