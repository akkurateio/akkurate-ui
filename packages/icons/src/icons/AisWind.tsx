import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisWind: FunctionComponent<IProps> = ({
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
      <path d="M21.466 23.534A5 5 0 1 0 25 15H3a1 1 0 1 0 0 2h22a3 3 0 1 1-2.835 3.981C21.985 20.46 21.552 20 21 20c-.553 0-1.01.453-.9.994.195.955.666 1.84 1.365 2.54ZM6 11a1 1 0 0 0 1 1h14a5 5 0 1 0-4.9-5.993c-.11.54.348.993.9.993s.984-.46 1.165-.982a3.003 3.003 0 0 1 3.42-1.96A3 3 0 0 1 21 10H7a1 1 0 0 0-1 1Z" />
      <path d="M9.466 28.534A5 5 0 1 0 13 20H5a1 1 0 1 0 0 2h8a3 3 0 1 1-2.835 3.981C9.985 25.46 9.553 25 9 25c-.553 0-1.01.453-.9.994.194.955.666 1.84 1.365 2.54Z" />
    </svg>
  )
}
