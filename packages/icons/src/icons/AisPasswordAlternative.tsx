import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisPasswordAlternative: FunctionComponent<IProps> = ({
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
      <path d="M7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM15 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 4a1 1 0 1 0 0 2h1v4H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h20v4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4h4a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-4V6h1a1 1 0 1 0 0-2h-4ZM3 12h20v8H3v-8Zm22 0h4v8h-4v-8Z"
      />
    </svg>
  )
}
