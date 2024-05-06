import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisTableRemoveColumnBefore: FunctionComponent<IProps> = ({
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
        d="M17 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4Zm0 26h-4V4h4v24ZM27 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4Zm0 26h-4V4h4v24Z"
      />
      <path d="M8 22a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM3 21a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM8 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM3 13a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM8 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM3 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM8 26a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM3 25a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM8 30a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM3 29a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM3.293 2.293a1 1 0 0 1 1.414 0L6 3.586l1.293-1.293a1 1 0 0 1 1.414 1.414L7.414 5l1.293 1.293a1 1 0 0 1-1.414 1.414L6 6.414 4.707 7.707a1 1 0 0 1-1.414-1.414L4.586 5 3.293 3.707a1 1 0 0 1 0-1.414Z" />
    </svg>
  )
}
