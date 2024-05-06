import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisArrowSwitch: FunctionComponent<IProps> = ({
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
      <path d="M29.923 9.382a1.001 1.001 0 0 0-.216-1.089l-6-6a.999.999 0 1 0-1.414 1.414L26.586 8H11a1 1 0 0 0 0 2h15.586l-4.293 4.293a.999.999 0 1 0 1.414 1.414l6-6a1.01 1.01 0 0 0 .216-.325ZM2.076 22.618a1.001 1.001 0 0 0 .216 1.089l6 6a.999.999 0 1 0 1.414-1.414L5.413 24h15.586a1 1 0 0 0 0-2H5.413l4.293-4.293a.999.999 0 1 0-1.414-1.414l-6 6a1.01 1.01 0 0 0-.216.325Z" />
    </svg>
  )
}
