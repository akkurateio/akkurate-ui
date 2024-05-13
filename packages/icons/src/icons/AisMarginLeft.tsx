import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisMarginLeft: FunctionComponent<IProps> = ({
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
      <path d="M5 2a1 1 0 0 1 1 1v26a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h8Zm0 2v14h-8V9h8Z"
      />
      <path d="M28 28a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM27 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM28 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM27 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM28 22a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
    </svg>
  )
}
