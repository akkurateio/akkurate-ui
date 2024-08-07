import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisMagicHand: FunctionComponent<IProps> = ({
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
      <path d="m28.707 24.293-19-19a.999.999 0 0 0-1.414 0l-3 3a.999.999 0 0 0 0 1.414l19 19a.997.997 0 0 0 1.414 0l3-3a.999.999 0 0 0 0-1.414ZM9 7.414 11.586 10 10 11.586 7.414 9 9 7.414Zm16 19.172L11.414 13 13 11.414 26.586 25 25 26.586ZM4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  )
}
