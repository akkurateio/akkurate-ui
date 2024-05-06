import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisHandleVertical: FunctionComponent<IProps> = ({
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
      <path d="M14 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM14 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM14 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM14 26a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 26a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  )
}
