import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisCalculation: FunctionComponent<IProps> = ({
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
      <path d="M14 8h-4V4a1 1 0 0 0-2 0v4H4a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2ZM27.707 18.293a.999.999 0 0 0-1.414 0L23 21.586l-3.293-3.293a.999.999 0 1 0-1.414 1.414L21.586 23l-3.293 3.293a.999.999 0 1 0 1.414 1.414L23 24.414l3.293 3.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L24.414 23l3.293-3.293a.999.999 0 0 0 0-1.414ZM13 19H5a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2ZM13 25H5a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2ZM19 10h8a1 1 0 0 0 0-2h-8a1 1 0 0 0 0 2Z" />
    </svg>
  )
}
