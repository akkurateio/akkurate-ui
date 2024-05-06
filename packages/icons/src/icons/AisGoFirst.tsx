import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGoFirst: FunctionComponent<IProps> = ({
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
      <path d="M12.91 14.436a2 2 0 0 0 0 3.355l6.329 4.11c1.33.864 3.09-.09 3.09-1.677v-8.22c0-1.587-1.76-2.542-3.09-1.678l-6.328 4.11ZM10 11a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0V11Z" />
    </svg>
  )
}
