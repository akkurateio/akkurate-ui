import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisNotificationDotFilled: FunctionComponent<IProps> = ({
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
        d="M17.461 3.134A8.012 8.012 0 0 0 16 3c-4.411 0-8 3.589-8 8v6.338c0 .906-.247 1.796-.712 2.572l-2.145 3.575A1.001 1.001 0 0 0 6 25h6.007A4.001 4.001 0 0 0 16 28.933 4 4 0 0 0 19.993 25H26a.998.998 0 0 0 .857-1.515l-2.145-3.575A4.998 4.998 0 0 1 24 17.338V11a7.958 7.958 0 0 0-.527-2.856 4 4 0 0 1-6.012-5.01Zm-3.454 21.865A1.998 1.998 0 0 0 16 26.932c1.08 0 1.957-.862 1.993-1.933h-3.986Z"
      />
      <path d="M23 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </svg>
  )
}
