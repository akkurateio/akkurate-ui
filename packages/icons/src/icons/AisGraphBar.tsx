import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGraphBar: FunctionComponent<IProps> = ({
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
      <path d="M29 26h-1V15a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11h-2v-7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7h-2V9a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v17H4V5a1 1 0 0 0-2 0v22a1 1 0 0 0 1 1h26a1 1 0 0 0 0-2ZM8 26V10h2v16H8Zm8 0v-6h2v6h-2Zm8 0V16h2v10h-2Z" />
    </svg>
  )
}
