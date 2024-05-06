import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisChevronLeft: FunctionComponent<IProps> = ({
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
      <path d="M21 28a.997.997 0 0 1-.707-.293l-11-11a.999.999 0 0 1 0-1.414l11-11a.999.999 0 1 1 1.414 1.414L11.414 16l10.293 10.293A.999.999 0 0 1 21 28Z" />
    </svg>
  )
}
