import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisArrowRightUp: FunctionComponent<IProps> = ({
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
      <path d="M23 8h-9a1 1 0 1 0 0 2h6.586L7.293 23.293a.999.999 0 1 0 1.414 1.414L22 11.414V18a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z" />
    </svg>
  )
}
