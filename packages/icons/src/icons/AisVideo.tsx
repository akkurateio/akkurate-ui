import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisVideo: FunctionComponent<IProps> = ({
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
      <path d="M20 24H6c-1.103 0-2-.897-2-2V10c0-1.103.897-2 2-2h14c1.103 0 2 .897 2 2v2.612l4.684-1.561a1 1 0 0 1 1.317.949v8a1 1 0 0 1-1.317.949L22 19.388V22c0 1.103-.897 2-2 2ZM6 10v12.001h14V18a1 1 0 0 1 1.317-.949l4.684 1.561v-5.225l-4.684 1.561A1 1 0 0 1 20 13.999v-4H6V10Z" />
    </svg>
  )
}
