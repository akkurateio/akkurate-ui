import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisClose: FunctionComponent<IProps> = ({
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
      <path d="m17.414 16 7.293-7.293a.999.999 0 1 0-1.414-1.414L16 14.586 8.707 7.293a.999.999 0 1 0-1.414 1.414L14.586 16l-7.293 7.293a.999.999 0 1 0 1.414 1.414L16 17.414l7.293 7.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L17.414 16Z" />
    </svg>
  )
}
