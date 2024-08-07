import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisUserGroup: FunctionComponent<IProps> = ({
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
      <path d="M15.875 19c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4Zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2ZM16 21c-3.309 0-6 2.691-6 6v2a1 1 0 1 0 2 0v-2c0-2.206 1.794-4 4-4s4 1.794 4 4v2a1 1 0 1 0 2 0v-2c0-3.309-2.691-6-6-6ZM9 11c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4Zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2ZM23 11c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4Zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2ZM9 13c-3.309 0-6 2.691-6 6v2a1 1 0 1 0 2 0v-2c0-2.206 1.794-4 4-4a1 1 0 1 0 0-2ZM23 13a1 1 0 1 0 0 2c2.206 0 4 1.794 4 4v2a1 1 0 1 0 2 0v-2c0-3.309-2.691-6-6-6Z" />
    </svg>
  )
}
