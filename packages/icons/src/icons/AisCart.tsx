import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisCart: FunctionComponent<IProps> = ({
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
      <path d="M10 28a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 28a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM27.344 8.708A1.998 1.998 0 0 0 25.816 8H8.581l-.292-1.557A2.999 2.999 0 0 0 5.345 4h-.344a1 1 0 1 0 0 2h.344c.479 0 .891.342.979.812l2.388 12.741A3 3 0 0 0 11.659 22h11.648a2.988 2.988 0 0 0 2.958-2.505l1.527-9.163a1.997 1.997 0 0 0-.448-1.624Zm-3.052 10.458a.995.995 0 0 1-.985.834H11.659a.998.998 0 0 1-.981-.814L8.956 10l16.864.003-1.527 9.163h-.001Z" />
    </svg>
  )
}
