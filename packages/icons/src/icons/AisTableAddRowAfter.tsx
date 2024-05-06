import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisTableAddRowAfter: FunctionComponent<IProps> = ({
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
        d="M4 3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm24 2H4v4h24V5Z"
      />
      <path d="M2.293 28.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 1.414L4.586 26l-2.293 2.293ZM14 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM14 28a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 25a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 28a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM21 25a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM22 28a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM25 25a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM26 28a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM29 25a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM30 28a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 15a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4Zm2 0h24v4H4v-4Z"
      />
    </svg>
  )
}
