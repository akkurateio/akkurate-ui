import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisMarginBottom: FunctionComponent<IProps> = ({
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
      <path d="M4 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8Zm16 0v8H9v-8h14Z"
      />
      <path d="M2 27a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM29 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM22 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  )
}
