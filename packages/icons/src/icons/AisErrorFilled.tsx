import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisErrorFilled: FunctionComponent<IProps> = ({
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
        d="M21.044 4c1.037 0 2.004.575 2.522 1.5l5.045 9a3.088 3.088 0 0 1 0 3l-5.044 9a2.908 2.908 0 0 1-2.522 1.5h-10.09a2.906 2.906 0 0 1-2.521-1.5l-5.045-9a3.088 3.088 0 0 1 0-3l5.044-9A2.908 2.908 0 0 1 10.955 4h10.09ZM15 11a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0v-6Zm2 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  )
}
