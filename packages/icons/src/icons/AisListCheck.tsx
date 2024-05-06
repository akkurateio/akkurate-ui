import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisListCheck: FunctionComponent<IProps> = ({
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
      <path d="M16 8h14v2H16V8ZM6 10.59 3.41 8 2 9.41l4 4 8-8L12.59 4 6 10.59ZM16 22h14v2H16v-2ZM6 24.59 3.41 22 2 23.41l4 4 8-8L12.59 18 6 24.59Z" />
    </svg>
  )
}
