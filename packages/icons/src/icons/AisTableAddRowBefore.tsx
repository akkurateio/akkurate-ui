import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisTableAddRowBefore: FunctionComponent<IProps> = ({
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
      <path d="M2.293 8.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 1.414L4.586 6 2.293 8.293ZM13 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 11a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H4Zm24 6v-4H4v4h24ZM4 21a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H4Zm24 6v-4H4v4h24Z"
      />
      <path d="M14 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM21 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM22 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM25 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM26 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM29 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM30 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  )
}
