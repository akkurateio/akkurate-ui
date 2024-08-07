import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisNimiscient: FunctionComponent<IProps> = ({
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
      <path d="m22.53 2-1.6 4.82-8.81 3.15-1.26-3.8L22.53 2Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 21a9 9 0 1 1 18.001.001A9 9 0 0 1 7 21Zm4 0c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5Z"
      />
    </svg>
  )
}
