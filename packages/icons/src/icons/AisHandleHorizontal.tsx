import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisHandleHorizontal: FunctionComponent<IProps> = ({
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
      <path d="M13 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM25 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM25 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  )
}
