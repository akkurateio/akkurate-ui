import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisDatabase: FunctionComponent<IProps> = ({
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
      <path d="M24 2H8c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2ZM8 8V4h16v4H8ZM24 12H8c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2ZM8 18v-4h16v4H8ZM24 22H8c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2ZM8 28v-4h16v4H8Z" />
      <path d="M10 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 27a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  )
}
