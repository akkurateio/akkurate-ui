import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisPageFirst: FunctionComponent<IProps> = ({
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
      <path d="m18.414 16 6.293-6.293a.999.999 0 1 0-1.414-1.414l-7 7a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L18.414 16ZM8 4a1 1 0 0 0-1 1v22a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1Z" />
    </svg>
  )
}
