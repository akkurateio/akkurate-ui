import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisFileTable: FunctionComponent<IProps> = ({
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
        d="M10 12h12v10H10V12Zm10 8v-2h-3v2h3Zm0-4v-2h-3v2h3Zm-5 2v2h-3v-2h3Zm0-2v-2h-3v2h3Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4a2 2 0 0 1 2-2h11.172a2 2 0 0 1 1.414.586l4.828 4.828A2 2 0 0 1 26 8.828V28a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4Zm12 0H8v24h16V10h-5a1 1 0 0 1-1-1V4Zm5.172 4L20 4.828V8h3.172Z"
      />
    </svg>
  )
}
