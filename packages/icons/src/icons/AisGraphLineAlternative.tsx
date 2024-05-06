import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGraphLineAlternative: FunctionComponent<IProps> = ({
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
      <path d="M4.999 24a.996.996 0 0 1-.53-.152v.001a1.001 1.001 0 0 1-.317-1.378l5-8a1.001 1.001 0 0 1 1.555-.177l4.062 4.062 4.356-7.841a.994.994 0 0 1 .223-.273l7-6A1 1 0 1 1 27.65 5.76l-6.864 5.883-4.913 8.843a1.002 1.002 0 0 1-1.58.221l-4.112-4.111-4.333 6.934c-.19.303-.516.47-.85.47ZM3 26a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2H3Z" />
    </svg>
  )
}
