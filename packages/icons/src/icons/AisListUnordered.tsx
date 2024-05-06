import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisListUnordered: FunctionComponent<IProps> = ({
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
      <path d="M7 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 26a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM30 22H16v2h14v-2ZM30 8H16v2h14V8Z" />
    </svg>
  )
}
