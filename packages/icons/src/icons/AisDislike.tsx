import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisDislike: FunctionComponent<IProps> = ({
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
        d="M12 5V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-.191a6.238 6.238 0 0 1 3 5.331V28a1 1 0 0 0 1 1h1a4 4 0 0 0 4-4v-4a1 1 0 0 1 1-1h2a4 4 0 0 0 4-4v-5a6 6 0 0 0-6-6H12ZM6 5v12h4V5H6Zm6 2v8.566a8.237 8.237 0 0 1 5 7.574V27a2 2 0 0 0 2-2v-4a3 3 0 0 1 3-3h2a2 2 0 0 0 2-2v-5a4 4 0 0 0-4-4H12Z"
      />
    </svg>
  )
}
