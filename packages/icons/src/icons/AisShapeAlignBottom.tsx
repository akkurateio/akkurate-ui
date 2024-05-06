import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisShapeAlignBottom: FunctionComponent<IProps> = ({
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
      <path d="M30 26a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h26a1 1 0 0 1 1 1Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 15H9v6h2v-6Zm-2-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H9ZM23 7h-6v14h6V7Zm-6-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-6Z"
      />
    </svg>
  )
}
