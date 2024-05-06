import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGoDown: FunctionComponent<IProps> = ({
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
      <path d="M18.012 21.418a2 2 0 0 1-3.354 0l-4.11-6.329c-.865-1.33.09-3.089 1.676-3.089h8.221c1.587 0 2.541 1.759 1.677 3.09l-4.11 6.328Z" />
    </svg>
  )
}
