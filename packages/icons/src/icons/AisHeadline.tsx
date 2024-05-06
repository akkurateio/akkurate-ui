import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisHeadline: FunctionComponent<IProps> = ({
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
      <path d="M22 5a1 1 0 0 0-1 1v9H9V6a1 1 0 1 0-2 0v20a1 1 0 1 0 2 0v-9h12v9a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Z" />
    </svg>
  )
}
