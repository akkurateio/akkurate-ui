import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGroupPresentation: FunctionComponent<IProps> = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2 0h24v8H4V4Z"
      />
      <path d="M11 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM14 21a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM21 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM24 21a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM2 28a4 4 0 0 1 8 0v1a1 1 0 1 1-2 0v-1a2 2 0 1 0-4 0v1a1 1 0 1 1-2 0v-1ZM16 24a4 4 0 0 0-4 4v1a1 1 0 1 0 2 0v-1a2 2 0 1 1 4 0v1a1 1 0 1 0 2 0v-1a4 4 0 0 0-4-4ZM22 28a4 4 0 0 1 8 0v1a1 1 0 1 1-2 0v-1a2 2 0 1 0-4 0v1a1 1 0 1 1-2 0v-1Z" />
    </svg>
  )
}
