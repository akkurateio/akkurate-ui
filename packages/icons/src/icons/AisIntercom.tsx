import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisIntercom: FunctionComponent<IProps> = ({
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
      <path d="M27.25 1H4.75A3.75 3.75 0 0 0 1 4.75v22.5A3.749 3.749 0 0 0 4.75 31h22.5A3.748 3.748 0 0 0 31 27.25V4.75A3.749 3.749 0 0 0 27.25 1Zm-7.251 5.499c0-.55.45-1 1.002-1 .55 0 1 .45 1 1v13.36a1.002 1.002 0 0 1-2.003 0V6.499ZM15 5.993a1 1 0 0 1 2 0v14.502a1 1 0 0 1-2 0V5.992Zm-5 .506c0-.55.449-1 .999-1 .553 0 1.002.45 1.002 1v13.36a1.001 1.001 0 0 1-2.001 0V6.499ZM4.999 8.5A1.002 1.002 0 0 1 7 8.5v8.994a1.001 1.001 0 0 1-2.001 0V8.5ZM26.65 23.753c-.154.13-3.857 3.24-10.65 3.24-6.791 0-10.496-3.107-10.651-3.24a1 1 0 0 1 1.299-1.523c.058.051 3.366 2.764 9.35 2.764 6.06 0 9.32-2.733 9.35-2.759a.998.998 0 0 1 1.41.108.998.998 0 0 1-.108 1.41Zm.351-6.26a1.002 1.002 0 0 1-2.002 0V8.5A1.002 1.002 0 0 1 27 8.5v8.994Z" />
    </svg>
  )
}
