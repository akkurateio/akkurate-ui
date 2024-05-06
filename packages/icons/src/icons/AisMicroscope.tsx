import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisMicroscope: FunctionComponent<IProps> = ({
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
      <path d="M25.394 24a7.878 7.878 0 0 0-1.67-8.568 3.918 3.918 0 0 0-1.085-4.414l2.776-2.776a2.003 2.003 0 0 0 0-2.829l-2.828-2.828a2.002 2.002 0 0 0-2.829 0L6.586 15.757a2.003 2.003 0 0 0 0 2.829l2.828 2.828a2.003 2.003 0 0 0 2.829 0l4.775-4.775a3.933 3.933 0 0 0 5.514.432A5.945 5.945 0 0 1 23.177 24H17a1 1 0 0 0-1 1v3H5a1 1 0 1 0 0 2h22a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1.606Zm-14.566-4L8 17.171l1.879-1.878 2.828 2.828L10.828 20ZM16 14c.002.253.027.505.076.752l-1.955 1.955-2.828-2.828 9.88-9.88L24 6.827l-3.249 3.25A3.977 3.977 0 0 0 16 14Zm4 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6 12h-8v-2h8v2Z" />
    </svg>
  )
}
