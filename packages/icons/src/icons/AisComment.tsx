import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisComment: FunctionComponent<IProps> = ({
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
      <path d="M25 4H7C4.243 4 2 6.243 2 9v10a5.008 5.008 0 0 0 4 4.899V27a1.002 1.002 0 0 0 1.707.707L11.414 24H25c2.757 0 5-2.243 5-5V9c0-2.757-2.243-5-5-5Zm3 15c0 1.654-1.346 3-3 3H11a.997.997 0 0 0-.707.293L8 24.586V23a1 1 0 0 0-1-1c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3h18c1.654 0 3 1.346 3 3v10Z" />
      <path d="M23 10H9a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM17 14H9a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z" />
    </svg>
  )
}
