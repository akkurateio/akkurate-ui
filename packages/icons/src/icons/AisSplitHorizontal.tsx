import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisSplitHorizontal: FunctionComponent<IProps> = ({
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
      <path d="M2 16a1 1 0 0 1 1-1h8.172a1 1 0 0 0 .707-.293l6.828-6.828A3 3 0 0 1 20.828 7h5.758l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L26.586 9h-5.758a1 1 0 0 0-.707.293L13.414 16l6.707 6.707a1 1 0 0 0 .707.293h5.758l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L26.586 25h-5.758a3 3 0 0 1-2.12-.879l-6.83-6.828a1 1 0 0 0-.706-.293H3a1 1 0 0 1-1-1Z" />
    </svg>
  )
}
