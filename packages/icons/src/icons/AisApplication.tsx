import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisApplication: FunctionComponent<IProps> = ({
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
        d="M19 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V4Zm2 0h4v4h-4V4Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.268 13A1.99 1.99 0 0 1 9 12V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a1.99 1.99 0 0 1-1-.268A1.99 1.99 0 0 1 15 20h-4a2 2 0 0 1-2-2v-4c0-.364.097-.706.268-1ZM11 8h4v4h-4V8Zm0 6h4v4h-4v-4Zm10 0v4h-4v-4h4ZM8 22a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8H8Zm0 2a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4H8Z"
      />
    </svg>
  )
}
