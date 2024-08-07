import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisLike: FunctionComponent<IProps> = ({
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
        d="M12 14.191V14a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1h10a6 6 0 0 0 6-6v-5a4 4 0 0 0-4-4h-2a1 1 0 0 1-1-1V7a4 4 0 0 0-4-4h-1a1 1 0 0 0-1 1v4.86c0 2.216-1.17 4.22-3 5.331ZM26 16v5a4 4 0 0 1-4 4H12v-8.566a8.237 8.237 0 0 0 5-7.574V5a2 2 0 0 1 2 2v4a3 3 0 0 0 3 3h2a2 2 0 0 1 2 2Zm-16-1H6v12h4V15Z"
      />
    </svg>
  )
}
