import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisUnderline: FunctionComponent<IProps> = ({
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
      <path d="M4 26h24v2H4v-2Zm12-3a7 7 0 0 1-7-7V5h2v11a5 5 0 1 0 10 0V5h2v11a7 7 0 0 1-7 7Z" />
    </svg>
  )
}
