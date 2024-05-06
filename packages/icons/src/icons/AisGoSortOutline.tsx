import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGoSortOutline: FunctionComponent<IProps> = ({
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
        d="M14.648 7.883a2 2 0 0 1 3.318 0l2.303 3.42c.895 1.328-.057 3.117-1.658 3.117h-4.608c-1.601 0-2.553-1.789-1.658-3.117l2.303-3.42ZM16.307 9l2.304 3.42h-4.608L16.307 9ZM17.966 24.957a2 2 0 0 1-3.318 0l-2.303-3.42c-.895-1.328.057-3.117 1.658-3.117h4.608c1.601 0 2.553 1.789 1.658 3.117l-2.303 3.42Zm-1.659-1.117-2.304-3.42h4.608l-2.304 3.42Z"
      />
    </svg>
  )
}
