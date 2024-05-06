import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisArrowDown: FunctionComponent<IProps> = ({
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
      <path d="M23.707 18.293a.999.999 0 0 0-1.414 0L18 22.586V7a1 1 0 0 0-2 0v15.586l-4.293-4.293a.999.999 0 1 0-1.414 1.414l6 6A1.01 1.01 0 0 0 17 26a1.01 1.01 0 0 0 .707-.293l6-6a.999.999 0 0 0 0-1.414Z" />
    </svg>
  )
}
