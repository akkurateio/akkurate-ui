import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisInfo: FunctionComponent<IProps> = ({
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
      <path d="M16 3.5C9.107 3.5 3.5 9.107 3.5 16S9.107 28.5 16 28.5 28.5 22.893 28.5 16 22.893 3.5 16 3.5Zm0 23c-5.79 0-10.5-4.71-10.5-10.5S10.21 5.5 16 5.5 26.5 10.21 26.5 16 21.79 26.5 16 26.5Z" />
      <path d="M16 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 21h-1v-7a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h1v6h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2Z" />
    </svg>
  )
}
