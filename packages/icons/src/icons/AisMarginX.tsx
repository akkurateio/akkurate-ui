import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisMarginX: FunctionComponent<IProps> = ({
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
      <path d="M27 2a1 1 0 0 1 1 1v26a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 23V9h-8v14h8Zm2-14a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9Z"
      />
      <path d="M5 2a1 1 0 0 1 1 1v26a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z" />
    </svg>
  )
}
