import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisParagraph: FunctionComponent<IProps> = ({
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
      <path d="M25 5H11.5A5.507 5.507 0 0 0 6 10.5c0 3.032 2.468 5.5 5.5 5.5H18v10a1 1 0 1 0 2 0V7h2v19a1 1 0 1 0 2 0V7h1a1 1 0 1 0 0-2Zm-7 9h-6.5C9.57 14 8 12.43 8 10.5S9.57 7 11.5 7H18v7Z" />
    </svg>
  )
}
