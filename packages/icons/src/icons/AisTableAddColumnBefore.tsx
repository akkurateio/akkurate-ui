import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisTableAddColumnBefore: FunctionComponent<IProps> = ({
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
      <path d="M3.707 2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L6 4.586 3.707 2.293Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4Zm-6 24h4V4h-4v24ZM29 4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4Zm-6 24h4V4h-4v24Z"
      />
      <path d="M7 13a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM7 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM7 21a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 22a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM7 25a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 26a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM7 29a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 30a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
    </svg>
  )
}
