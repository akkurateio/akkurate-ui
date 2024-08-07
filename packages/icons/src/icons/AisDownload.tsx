import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisDownload: FunctionComponent<IProps> = ({
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
      <path d="M21.293 18.293 17 22.586V11a1 1 0 1 0-2 0v11.586l-4.293-4.293a.999.999 0 1 0-1.414 1.414l5.999 5.999a.99.99 0 0 0 .326.217.991.991 0 0 0 1.09-.217l5.999-5.999a.999.999 0 1 0-1.414-1.414ZM23 6H9a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2Z" />
    </svg>
  )
}
