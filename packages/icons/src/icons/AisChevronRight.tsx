import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisChevronRight: FunctionComponent<IProps> = ({
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
      <path d="M11 28a.999.999 0 0 1-.707-1.707L20.586 16 10.293 5.707a.999.999 0 1 1 1.414-1.414l11 11a.999.999 0 0 1 0 1.414l-11 11A.997.997 0 0 1 11 28Z" />
    </svg>
  )
}
