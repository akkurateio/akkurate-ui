import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisChevronUp: FunctionComponent<IProps> = ({
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
      <path d="M27 22a.997.997 0 0 1-.707-.293L16 11.414 5.707 21.707a.999.999 0 1 1-1.414-1.414l11-11a.999.999 0 0 1 1.414 0l11 11A.999.999 0 0 1 27 22Z" />
    </svg>
  )
}
