import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisProcessor: FunctionComponent<IProps> = ({
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
        d="M9 3a1 1 0 1 1 2 0v4h2V3a1 1 0 1 1 2 0v4h2V3a1 1 0 1 1 2 0v4h2V3a1 1 0 1 1 2 0v4a2 2 0 0 1 2 2h4a1 1 0 1 1 0 2h-4v2h4a1 1 0 1 1 0 2h-4v2h4a1 1 0 1 1 0 2h-4v2h4a1 1 0 1 1 0 2h-4a2 2 0 0 1-2 2v4a1 1 0 1 1-2 0v-4h-2v4a1 1 0 1 1-2 0v-4h-2v4a1 1 0 1 1-2 0v-4h-2v4a1 1 0 1 1-2 0v-4a2 2 0 0 1-2-2H3a1 1 0 1 1 0-2h4v-2H3a1 1 0 1 1 0-2h4v-2H3a1 1 0 1 1 0-2h4v-2H3a1 1 0 1 1 0-2h4a2 2 0 0 1 2-2V3Zm14 6H9v14h14V9Z"
      />
    </svg>
  )
}
