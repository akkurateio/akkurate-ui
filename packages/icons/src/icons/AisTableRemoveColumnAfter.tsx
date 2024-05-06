import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisTableRemoveColumnAfter: FunctionComponent<IProps> = ({
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
        d="M9 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4Zm0 2v24H5V4h4ZM19 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4Zm0 2v24h-4V4h4Z"
      />
      <path d="M23.293 2.293a1 1 0 0 1 1.414 0L26 3.586l1.293-1.293a1 1 0 1 1 1.414 1.414L27.414 5l1.293 1.293a1 1 0 0 1-1.414 1.414L26 6.414l-1.293 1.293a1 1 0 1 1-1.414-1.414L24.586 5l-1.293-1.293a1 1 0 0 1 0-1.414ZM28 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM23 13a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM28 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM23 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM28 22a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM23 21a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM28 26a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM23 25a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM28 30a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM23 29a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
    </svg>
  )
}
