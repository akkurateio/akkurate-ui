import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisMedication: FunctionComponent<IProps> = ({
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
      <path d="M24 2H8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM10 14h3v10h-3V14Zm12 14H10v-2h4a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1h-4v-2h12v18ZM8 8V4h16v4H8Z" />
    </svg>
  )
}
