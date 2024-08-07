import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisConnected: FunctionComponent<IProps> = ({
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
      <path d="M23 26H8c-3.309 0-6-2.691-6-6a6.01 6.01 0 0 1 5-5.917V14c0-4.411 3.589-8 8-8 3.676 0 6.847 2.521 7.742 6.005C26.719 11.847 30 15.054 30 19c0 3.86-3.14 7-7 7ZM7.952 16A4.004 4.004 0 0 0 4 20c0 2.206 1.794 4 4 4h15c2.757 0 5-2.243 5-5s-2.243-5-5-5a4.95 4.95 0 0 0-.888.084.998.998 0 0 1-1.168-.857A6.005 6.005 0 0 0 15 8c-3.309 0-6 2.691-6 6 0 .256.022.531.07.866a1 1 0 0 1-.24.804.923.923 0 0 1-.768.338c-.028 0-.071-.004-.11-.008Z" />
    </svg>
  )
}
