import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisMoreVertical: FunctionComponent<IProps> = ({
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
      <path d="M16 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  )
}
