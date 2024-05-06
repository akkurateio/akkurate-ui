import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGoLeft: FunctionComponent<IProps> = ({
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
      <path d="M11.91 17.79a2 2 0 0 1 0-3.354l6.329-4.11c1.33-.864 3.09.09 3.09 1.677v8.221c0 1.587-1.76 2.541-3.09 1.677l-6.328-4.11Z" />
    </svg>
  )
}
