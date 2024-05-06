import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisComponents: FunctionComponent<IProps> = ({
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
        d="M7 4h6v14H7V4ZM5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm2 20h6v4H7v-4Zm-2 0a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4ZM19 8h6V4h-6v4Zm6 2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6Zm0 18h-6V14h6v14Zm2 0a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14Z"
      />
    </svg>
  )
}
