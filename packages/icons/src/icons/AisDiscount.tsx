import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisDiscount: FunctionComponent<IProps> = ({
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
      <path d="M22.707 10.707a1 1 0 0 0-1.414-1.414l-12 12a1 1 0 1 0 1.414 1.414l12-12Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM23 20a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 14C2 7.373 7.373 2 14 2h4c6.627 0 12 5.373 12 12v4c0 6.627-5.373 12-12 12h-4C7.373 30 2 24.627 2 18v-4ZM14 4h4c5.523 0 10 4.477 10 10v4c0 5.523-4.477 10-10 10h-4C8.477 28 4 23.523 4 18v-4C4 8.477 8.477 4 14 4Z"
      />
    </svg>
  )
}
