import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisMergeHorizontal: FunctionComponent<IProps> = ({
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
      <path d="M26.586 17h-5.758a1 1 0 0 0-.707.293l-6.828 6.828a3 3 0 0 1-2.121.879H3a1 1 0 1 1 0-2h8.172a1 1 0 0 0 .707-.293L18.586 16l-6.707-6.707A1 1 0 0 0 11.172 9H3a1 1 0 1 1 0-2h8.172a3 3 0 0 1 2.12.879l6.83 6.828a1 1 0 0 0 .706.293h5.758l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L26.586 17Z" />
    </svg>
  )
}
