import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisCalculator: FunctionComponent<IProps> = ({
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
      <path d="M24 2H8C6.346 2 5 3.346 5 5v22c0 1.654 1.346 3 3 3h16c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3Zm1 25c0 .551-.449 1-1 1H8c-.551 0-1-.449-1-1V5c0-.551.449-1 1-1h16c.551 0 1 .449 1 1v22Z" />
      <path d="M10 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM14 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM22 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM14 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM22 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM14 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM22 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 26a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM14 26a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 26a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM22 26a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM23 6H9v4h14V6Z" />
    </svg>
  )
}
