import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisNimiscientIcon: FunctionComponent<IProps> = ({
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
      <path d="m9.93 12.26 14.92-5.33-2.06 6.16-11.25 4.02-1.61-4.85ZM10.11 31.97V32H5v-.03c0-6.35 5.15-11.5 11.5-11.5S28 25.62 28 31.97V32h-5.11v-.03c0-3.52-2.87-6.39-6.39-6.39-3.52 0-6.39 2.87-6.39 6.39Z" />
    </svg>
  )
}
