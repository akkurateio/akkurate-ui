import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisBurger: FunctionComponent<IProps> = ({
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
      <path d="M7 8h18a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM25 12H7a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2ZM25 18H7a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2ZM25 24H7a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z" />
    </svg>
  )
}
