import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisCode: FunctionComponent<IProps> = ({
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
      <path d="m17.64 6-5.22 19.483 1.931.518 5.22-19.483-1.931-.517ZM24 23l7-7-7-7-1.41 1.41L28.17 16l-5.58 5.59L24 23ZM8 9l-7 7 7 7 1.41-1.41L3.83 16l5.58-5.59L8 9Z" />
    </svg>
  )
}
