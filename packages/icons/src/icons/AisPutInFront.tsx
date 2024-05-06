import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisPutInFront: FunctionComponent<IProps> = ({
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
        d="M6 2a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4 4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4 4 4 0 0 0-4-4H6Zm2 24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2v14a4 4 0 0 1-4 4H8Z"
      />
    </svg>
  )
}
