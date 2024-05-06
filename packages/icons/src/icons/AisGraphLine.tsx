import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGraphLine: FunctionComponent<IProps> = ({
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
      <path d="M29 26H4V5a1 1 0 0 0-2 0v22a1 1 0 0 0 1 1h26a1 1 0 0 0 0-2Z" />
      <path d="M6.47 23.848a1.001 1.001 0 0 0 1.378-.318l4.333-6.934 4.111 4.111a1.002 1.002 0 0 0 1.581-.221l4.913-8.843L29.65 5.76a1 1 0 1 0-1.302-1.518l-7 6a.994.994 0 0 0-.223.273l-4.356 7.841-4.062-4.062a1.001 1.001 0 0 0-1.555.177l-5 8a1.001 1.001 0 0 0 .318 1.378v-.001Z" />
    </svg>
  )
}
