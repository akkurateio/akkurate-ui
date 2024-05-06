import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisTableMergeCell: FunctionComponent<IProps> = ({
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
      <path d="M2.005 3.898A1 1 0 0 1 3 3h7a1 1 0 1 1 0 2H4v22h6a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V4c0-.035.002-.069.005-.102Z" />
      <path d="M9.293 18.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 1.414L10.586 15H7a1 1 0 1 0 0 2h3.586l-1.293 1.293ZM22.707 13.707a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L21.414 17H25a1 1 0 1 0 0-2h-3.586l1.293-1.293Z" />
      <path d="M22 3a1 1 0 1 0 0 2h6v22h-6a1 1 0 1 0 0 2h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-7Z" />
    </svg>
  )
}
