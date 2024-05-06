import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisEqualizer: FunctionComponent<IProps> = ({
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
      <rect x="2" y="27" width="8" height="2" rx="1" />
      <rect x="12" y="27" width="8" height="2" rx="1" />
      <rect x="12" y="23" width="8" height="2" rx="1" />
      <rect x="22" y="23" width="8" height="2" rx="1" />
      <rect x="2" y="23" width="8" height="2" rx="1" />
      <rect x="22" y="15" width="8" height="2" rx="1" />
      <rect x="2" y="15" width="8" height="2" rx="1" />
      <rect x="2" y="11" width="8" height="2" rx="1" />
      <rect x="12" y="19" width="8" height="2" rx="1" />
      <rect x="22" y="19" width="8" height="2" rx="1" />
      <rect x="2" y="19" width="8" height="2" rx="1" />
      <rect x="22" y="11" width="8" height="2" rx="1" />
      <rect x="22" y="7" width="8" height="2" rx="1" />
      <rect x="22" y="3" width="8" height="2" rx="1" />
      <rect x="22" y="27" width="8" height="2" rx="1" />
    </svg>
  )
}
