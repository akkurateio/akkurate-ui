import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisArrowLeftDown: FunctionComponent<IProps> = ({
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
      <path d="M24.707 7.293a.999.999 0 0 0-1.414 0L10 20.586V14a1 1 0 1 0-2 0v9a1 1 0 0 0 1 1h9a1 1 0 1 0 0-2h-6.586L24.707 8.707a.999.999 0 0 0 0-1.414Z" />
    </svg>
  )
}
