import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisNotepad: FunctionComponent<IProps> = ({
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
        d="M11 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2h4a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4Zm2 0h6v2h-6V4Zm8 2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2H7v22h18V6h-4Z"
      />
    </svg>
  )
}
