import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisSpinnerAlternative: FunctionComponent<IProps> = ({
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
      <g opacity=".85">
        <path d="M16 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 29a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8.222 25.778a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM27 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM23.778 25.778a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8.222 10.222a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </g>
    </svg>
  )
}
