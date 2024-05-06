import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisStarHalfFilled: FunctionComponent<IProps> = ({
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
      <path d="M28.948 12.85a1.002 1.002 0 0 0-.797-.671l-7.764-1.187-3.481-7.417a1 1 0 0 0-1.81 0l-3.481 7.417-7.764 1.187a.999.999 0 0 0-.565 1.687l5.647 5.788-1.335 8.186a1 1 0 0 0 1.471 1.037l6.933-3.832 6.933 3.832a.995.995 0 0 0 1.06-.058 1 1 0 0 0 .411-.979l-1.335-8.186 5.647-5.788a.998.998 0 0 0 .232-1.016h-.002Zm-7.664 5.769a1 1 0 0 0-.271.859l1.085 6.651-5.614-3.104A1 1 0 0 0 16 22.9V6.353l2.803 5.972a.997.997 0 0 0 .754.563l6.368.973-4.641 4.757v.001Z" />
    </svg>
  )
}
