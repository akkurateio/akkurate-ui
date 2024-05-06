import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisInWaitEnded: FunctionComponent<IProps> = ({
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
        d="M9 22.76a6 6 0 0 1 2.095-4.556L13.667 16l-2.572-2.204A6 6 0 0 1 9 9.24V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5.24a6 6 0 0 1-2.095 4.556L18.333 16l2.572 2.204A6 6 0 0 1 23 22.76V28a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-5.24Zm10.603-10.483L16 15.366l-3.603-3.089A4 4 0 0 1 11 9.24V4h10v5.24a4 4 0 0 1-1.397 3.037Z"
      />
    </svg>
  )
}
