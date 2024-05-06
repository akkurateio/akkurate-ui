import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisChevronDown: FunctionComponent<IProps> = ({
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
      <path d="M16 23a.997.997 0 0 1-.707-.293l-11-11a.999.999 0 1 1 1.414-1.414L16 20.586l10.293-10.293a.999.999 0 1 1 1.414 1.414l-11 11A.997.997 0 0 1 16 23Z" />
    </svg>
  )
}
