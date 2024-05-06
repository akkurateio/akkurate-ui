import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisSwitchOff: FunctionComponent<IProps> = ({
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
      <path d="M10 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 16a8 8 0 0 1 8-8h12a8 8 0 1 1 0 16H10a8 8 0 0 1-8-8Zm8-6h12a6 6 0 0 1 0 12H10a6 6 0 0 1 0-12Z"
      />
    </svg>
  )
}
