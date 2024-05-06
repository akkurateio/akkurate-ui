import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisSplitVertical: FunctionComponent<IProps> = ({
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
      <path d="M16 2a1 1 0 0 1 1 1v8.172a1 1 0 0 0 .293.707l6.828 6.828A3 3 0 0 1 25 20.828v5.758l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L23 26.586v-5.758a1 1 0 0 0-.293-.707L16 13.414l-6.707 6.707a1 1 0 0 0-.293.707v5.758l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L7 26.586v-5.758a3 3 0 0 1 .879-2.12l6.828-6.83a1 1 0 0 0 .293-.706V3a1 1 0 0 1 1-1Z" />
    </svg>
  )
}
