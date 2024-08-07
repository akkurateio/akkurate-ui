import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisTableRemoveRow: FunctionComponent<IProps> = ({
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
        d="M4 3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm24 2H4v4h24V5ZM4 21a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H4Zm24 6v-4H4v4h24Z"
      />
      <path d="M3 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM11 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM15 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM19 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM20 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM24.293 13.293a1 1 0 0 1 1.414 0L27 14.586l1.293-1.293a1 1 0 0 1 1.414 1.414L28.414 16l1.293 1.293a1 1 0 0 1-1.414 1.414L27 17.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L25.586 16l-1.293-1.293a1 1 0 0 1 0-1.414Z" />
    </svg>
  )
}
