import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisSortDown: FunctionComponent<IProps> = ({
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
      <path d="M7 26a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2H7ZM13 20a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H13ZM18 13a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2h-6a1 1 0 0 0-1 1ZM23 8a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2h-2Z" />
    </svg>
  )
}
