import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisArrowLeftUp: FunctionComponent<IProps> = ({
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
      <path d="M24.707 23.293 11.414 10H18a1 1 0 1 0 0-2H9a1 1 0 0 0-1 1v9a1 1 0 1 0 2 0v-6.586l13.293 13.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z" />
    </svg>
  )
}
