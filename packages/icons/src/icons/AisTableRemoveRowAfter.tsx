import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisTableRemoveRowAfter: FunctionComponent<IProps> = ({
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
      <path d="M2.293 23.293a1 1 0 0 1 1.414 0L5 24.586l1.293-1.293a1 1 0 0 1 1.414 1.414L6.414 26l1.293 1.293a1 1 0 1 1-1.414 1.414L5 27.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L3.586 26l-1.293-1.293a1 1 0 0 1 0-1.414ZM22 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM21 29a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM26 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM25 29a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13 25a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13 29a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 29a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM30 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM29 29a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 15a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4Zm2 0h24v4H4v-4Z"
      />
    </svg>
  )
}
