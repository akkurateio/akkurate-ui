import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisEye: FunctionComponent<IProps> = ({
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
      <path d="M27.852 15.476C27.639 15.13 22.559 7 16 7S4.361 15.13 4.148 15.476a1 1 0 0 0 0 1.049c.213.346 5.293 8.476 11.852 8.476s11.639-8.13 11.852-8.476a1 1 0 0 0 0-1.049ZM16 23c-4.584 0-8.617-5.291-9.799-7C7.384 14.291 11.416 9 16 9s8.617 5.291 9.799 7c-1.183 1.709-5.215 7-9.799 7Z" />
      <path d="M16 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  )
}
