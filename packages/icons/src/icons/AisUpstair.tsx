import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisUpstair: FunctionComponent<IProps> = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 8a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2h-5v4a2 2 0 0 1-2 2h-5v4a2 2 0 0 1-2 2h-5v4a2 2 0 0 1-2 2H3a1 1 0 1 1 0-2h5v-4a2 2 0 0 1 2-2h5v-4a2 2 0 0 1 2-2h5V8Z"
      />
    </svg>
  )
}
