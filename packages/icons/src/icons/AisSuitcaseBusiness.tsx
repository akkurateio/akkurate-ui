import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisSuitcaseBusiness: FunctionComponent<IProps> = ({
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
        d="M11 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h5a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4h5ZM4 22v2a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-2H4Zm24-2H4v-8a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v8ZM13 6h6v2h-6V6Z"
      />
    </svg>
  )
}
