import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGraphBarBasic: FunctionComponent<IProps> = ({
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
        d="M21 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6Zm2 0h2v20h-2V6ZM15 12a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2h-2Zm2 2h-2v12h2V14ZM7 16a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H7Zm2 2H7v8h2v-8Z"
      />
    </svg>
  )
}
