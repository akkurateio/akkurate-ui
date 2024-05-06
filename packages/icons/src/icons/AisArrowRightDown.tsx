import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisArrowRightDown: FunctionComponent<IProps> = ({
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
      <path d="M23 13a1 1 0 0 0-1 1v6.586L8.707 7.293a.999.999 0 1 0-1.414 1.414L20.586 22H14a1 1 0 1 0 0 2h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Z" />
    </svg>
  )
}
