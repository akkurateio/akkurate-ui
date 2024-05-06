import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisRainy: FunctionComponent<IProps> = ({
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
      <path d="M23.5 22h-15A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22ZM16 4a7 7 0 0 0-6.94 6.14L9 11h-.86a4.503 4.503 0 1 0 .36 9h15a4.504 4.504 0 0 0 .36-9H23l-.1-.82A7 7 0 0 0 16 4Zm-2 26a.93.93 0 0 1-.45-.11 1 1 0 0 1-.44-1.34l2-4a.999.999 0 1 1 1.78.9l-2 4A1 1 0 0 1 14 30Zm6 0a.93.93 0 0 1-.45-.11 1 1 0 0 1-.44-1.34l2-4a.999.999 0 1 1 1.78.9l-2 4A1 1 0 0 1 20 30ZM8 30a.93.93 0 0 1-.45-.11 1 1 0 0 1-.44-1.34l2-4a1 1 0 1 1 1.78.9l-2 4A1 1 0 0 1 8 30Z" />
    </svg>
  )
}
