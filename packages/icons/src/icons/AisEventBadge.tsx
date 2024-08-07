import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisEventBadge: FunctionComponent<IProps> = ({
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
      <path d="M14 16a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4ZM13 21a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM14 24a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.385 2.077a1 1 0 1 0-.77 1.846L15 8.667V10h-4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2h-4V8.667l11.385-4.744a1 1 0 0 0-.77-1.846L16 6.917 4.385 2.077ZM11 12h4v1a1 1 0 1 0 2 0v-1h4v16H11V12Z"
      />
    </svg>
  )
}
