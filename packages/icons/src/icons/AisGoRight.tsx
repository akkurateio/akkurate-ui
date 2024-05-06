import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGoRight: FunctionComponent<IProps> = ({
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
      <path d="M21.752 17.677a2 2 0 0 0 0-3.354l-6.328-4.11c-1.33-.865-3.09.09-3.09 1.677v8.22c0 1.587 1.76 2.542 3.09 1.678l6.328-4.11Z" />
    </svg>
  )
}
