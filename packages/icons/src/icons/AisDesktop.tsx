import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisDesktop: FunctionComponent<IProps> = ({
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
      <path d="M27 2H5C3.346 2 2 3.346 2 5v16c0 1.654 1.346 3 3 3h4v5a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5h3c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3Zm-5 24H11v-2h11v2Zm6-5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v16Z" />
    </svg>
  )
}
