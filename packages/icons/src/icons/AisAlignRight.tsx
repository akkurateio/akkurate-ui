import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisAlignRight: FunctionComponent<IProps> = ({
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
        d="M4 5a1 1 0 0 0 0 2h24a1 1 0 1 0 0-2H4Zm6 4a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H10Zm3 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Zm-7 3a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2H6Zm-3 5a1 1 0 0 1 1-1h24a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm15 3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H18Z"
      />
    </svg>
  )
}
