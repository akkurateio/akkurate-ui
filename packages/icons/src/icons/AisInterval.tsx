import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisInterval: FunctionComponent<IProps> = ({
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
      <rect x="15" y="9" width="2" height="14" rx="1" />
      <circle cx="16" cy="6" r="3" stroke="#000" strokeWidth="2" />
      <circle cx="16" cy="26" r="3" stroke="#000" strokeWidth="2" />
    </svg>
  )
}
