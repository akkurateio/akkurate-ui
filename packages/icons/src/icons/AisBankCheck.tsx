import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisBankCheck: FunctionComponent<IProps> = ({
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
      <path d="M28 6H4a1 1 0 1 1 0-2h24a1 1 0 1 1 0 2ZM4 10h24a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2ZM8 16a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H8ZM7 21a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM22 22a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 28a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h24ZM5 14h22v12H5V14Z"
      />
    </svg>
  )
}
