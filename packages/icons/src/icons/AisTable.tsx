import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisTable: FunctionComponent<IProps> = ({
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
      <path d="M28 4H4a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM13 18v-6h6v6h-6Zm6 2v6h-6v-6h6ZM5 12h6v6H5v-6Zm16 0h6v6h-6v-6Zm6-6v4H5V6h22ZM5 20h6v6H5v-6Zm16 6v-6h6v6h-6Z" />
    </svg>
  )
}
