import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisTableRemoveRowBefore: FunctionComponent<IProps> = ({
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
      <path d="M2.293 3.293a1 1 0 0 1 1.414 0L5 4.586l1.293-1.293a1 1 0 0 1 1.414 1.414L6.414 6l1.293 1.293a1 1 0 0 1-1.414 1.414L5 7.414 3.707 8.707a1 1 0 0 1-1.414-1.414L3.586 6 2.293 4.707a1 1 0 0 1 0-1.414Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 13a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4Zm26 0v4H4v-4h24Z"
      />
      <path d="M14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 23a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4Zm26 0v4H4v-4h24Z"
      />
      <path d="M22 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM21 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM26 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM25 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM30 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM29 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  )
}
