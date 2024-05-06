import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisTableRemoveColumn: FunctionComponent<IProps> = ({
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
        d="M11 4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4ZM9 28V4H5v24h4ZM29 4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4Zm-6 24h4V4h-4v24Z"
      />
      <path d="M17 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM14 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM17 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM14 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM17 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM14 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM17 15a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM14 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM17 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM14 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM13.293 25.707a1 1 0 0 1 1.414-1.414L16 25.586l1.293-1.293a1 1 0 0 1 1.414 1.414L17.414 27l1.293 1.293a1 1 0 0 1-1.414 1.414L16 28.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L14.586 27l-1.293-1.293Z" />
    </svg>
  )
}
