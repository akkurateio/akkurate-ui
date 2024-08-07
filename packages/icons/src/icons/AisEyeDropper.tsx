import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisEyeDropper: FunctionComponent<IProps> = ({
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
      <path d="M27.707 4.293a3.834 3.834 0 0 0-5.414 0L20.5 6.086l-.793-.793a.999.999 0 1 0-1.414 1.414l.793.793-8.793 8.793A.997.997 0 0 0 10 17v1.586l-1.707 1.707a.999.999 0 0 0 0 1.414l2 2a.997.997 0 0 0 1.414 0L13.414 22H15c.266 0 .52-.105.707-.293l8.793-8.793.793.793a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-.793-.793 1.793-1.793a3.832 3.832 0 0 0 0-5.414ZM14.586 20H13a.996.996 0 0 0-.707.293L11 21.586 10.414 21l1.293-1.293A.997.997 0 0 0 12 19v-1.586l8.5-8.5 2.586 2.586-8.5 8.5ZM26.293 8.293 24.5 10.086 21.914 7.5l1.793-1.793a1.83 1.83 0 0 1 2.586 0 1.83 1.83 0 0 1 0 2.586ZM5 29a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  )
}
