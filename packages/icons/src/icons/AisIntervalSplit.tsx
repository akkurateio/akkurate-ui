import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisIntervalSplit: FunctionComponent<IProps> = ({
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
      <rect x="5" y="9" width="2" height="14" rx="1" />
      <circle cx="6" cy="6" r="3" stroke="#000" strokeWidth="2" />
      <circle cx="26" cy="6" r="3" stroke="#000" strokeWidth="2" />
      <circle cx="6" cy="26" r="3" stroke="#000" strokeWidth="2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 25v2A18 18 0 0 0 27 9h-2A16 16 0 0 1 9 25Z"
      />
    </svg>
  )
}
