import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisStormly: FunctionComponent<IProps> = ({
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
      <path d="M23.5 22a6.5 6.5 0 0 0 1.3-12.86 9 9 0 0 0-17.6 0A6.5 6.5 0 0 0 8.5 22H9a1 1 0 1 0 0-2h-.5a4.504 4.504 0 0 1-.36-9H9l.02-.82a7 7 0 0 1 13.88 0l.1.82h.86a4.503 4.503 0 1 1-.36 9H23a1 1 0 1 0 0 2" />
      <path d="M17.364 17.504a1 1 0 0 0-1.728-1.008l-3.5 6A1 1 0 0 0 13 24h4.326l-2.707 5.026a1 1 0 0 0 1.762.948l3.5-6.5A1 1 0 0 0 19 22h-4.259l2.623-4.496Z" />
    </svg>
  )
}
