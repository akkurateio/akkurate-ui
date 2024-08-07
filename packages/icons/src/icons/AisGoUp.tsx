import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGoUp: FunctionComponent<IProps> = ({
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
      <path d="M14.658 10.582a2 2 0 0 1 3.354 0l4.11 6.329c.864 1.33-.09 3.089-1.677 3.089h-8.22c-1.587 0-2.542-1.759-1.678-3.09l4.11-6.328Z" />
    </svg>
  )
}
