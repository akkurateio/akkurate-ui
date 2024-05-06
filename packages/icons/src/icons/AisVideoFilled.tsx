import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisVideoFilled: FunctionComponent<IProps> = ({
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
      <path d="M6 24h14c1.103 0 2-.897 2-2v-2.612l4.684 1.561A1 1 0 0 0 28.001 20v-8a1 1 0 0 0-1.317-.949L22 12.612V10c0-1.103-.897-2-2-2H6c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2Z" />
    </svg>
  )
}
