import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisIssues: FunctionComponent<IProps> = ({
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
      <path d="M20.68 10.73a1 1 0 1 0-1.36-1.46l-4.65 4.36-1.99-1.86a1 1 0 1 0-1.36 1.46l2.66 2.5a1 1 0 0 0 1.37 0l5.33-5Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6c0-1.1.9-2 2-2h24a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2 0h24v13H4V6Z"
      />
      <path d="M26 23H6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2ZM11 27h10a2 2 0 0 1-2 2h-6c-1.1 0-2-.9-2-2Z" />
    </svg>
  )
}
