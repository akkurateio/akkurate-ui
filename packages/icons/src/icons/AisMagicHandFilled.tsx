import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisMagicHandFilled: FunctionComponent<IProps> = ({
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
      <path d="m28.707 24.293-19-19a.999.999 0 0 0-1.414 0l-3 3a.999.999 0 0 0 0 1.414l19 19a.997.997 0 0 0 1.414 0l3-3a.999.999 0 0 0 0-1.414ZM9 7.414l3.293 3.293-1.586 1.586L7.414 9 9 7.414ZM4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  )
}
