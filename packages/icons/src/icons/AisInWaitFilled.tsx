import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisInWaitFilled: FunctionComponent<IProps> = ({
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
      <path d="M11 2a2 2 0 0 0-2 2v5.24a6 6 0 0 0 2.095 4.556L13.667 16l-2.572 2.204A6 6 0 0 0 9 22.76V28a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5.24a6 6 0 0 0-2.095-4.556L18.333 16l2.572-2.204A6 6 0 0 0 23 9.24V4a2 2 0 0 0-2-2H11Z" />
    </svg>
  )
}
