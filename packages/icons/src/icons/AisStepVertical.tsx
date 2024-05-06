import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisStepVertical: FunctionComponent<IProps> = ({
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
        d="M15 3a1 1 0 1 1 2 0v7c0 .028-.001.055-.003.082a6.002 6.002 0 0 1 0 11.836c.002.027.003.054.003.082v7a1 1 0 1 1-2 0v-7c0-.028.001-.055.003-.082a6.002 6.002 0 0 1 0-11.836A1.022 1.022 0 0 1 15 10V3Zm-3 13a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
      />
    </svg>
  )
}
