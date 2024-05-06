import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisShipTo: FunctionComponent<IProps> = ({
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
      <path d="M5 11a5 5 0 0 1 5-5h9a5 5 0 0 1 5 5v1.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L26 12.586V11a7 7 0 0 0-7-7h-9a7 7 0 0 0-7 7v7a1 1 0 1 0 2 0v-7ZM4 21a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 22a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-2Zm4-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z"
      />
    </svg>
  )
}
