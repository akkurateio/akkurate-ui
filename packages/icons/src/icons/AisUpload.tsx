import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisUpload: FunctionComponent<IProps> = ({
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
      <path d="M10.707 13.707 15 9.414V21a1 1 0 1 0 2 0V9.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-5.999-5.999a1.001 1.001 0 0 0-1.416 0l-5.999 5.999a.999.999 0 1 0 1.414 1.414ZM23 24H9a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2Z" />
    </svg>
  )
}
