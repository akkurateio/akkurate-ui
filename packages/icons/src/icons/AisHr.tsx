import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisHr: FunctionComponent<IProps> = ({
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
      <path d="M29 19H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1ZM4 17h24v-2H4v2Z" />
    </svg>
  )
}
