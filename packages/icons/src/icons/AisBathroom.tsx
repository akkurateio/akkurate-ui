import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisBathroom: FunctionComponent<IProps> = ({
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
        d="M8 2a4 4 0 0 0-4 4v8a2 2 0 0 0-2 2v4a8.001 8.001 0 0 0 7 7.938V29a1 1 0 1 0 2 0v-1h10v1a1 1 0 1 0 2 0v-1.062A8.001 8.001 0 0 0 30 20v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2H6V6a2 2 0 1 1 4 0v2.5h2V6a4 4 0 0 0-4-4Zm16 12h-6v6h6v-6Zm4 6a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6v-4h12v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4h2v4Z"
      />
    </svg>
  )
}
