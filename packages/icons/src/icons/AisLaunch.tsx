import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisLaunch: FunctionComponent<IProps> = ({
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
      <path d="M26 5h-6a1 1 0 0 0 0 2h3.586l-6.293 6.293a.999.999 0 1 0 1.414 1.414L25 8.414V12a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1Z" />
      <path d="M23 16a1 1 0 0 0-1 1v7H8V10h7a1 1 0 0 0 0-2H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z" />
    </svg>
  )
}
