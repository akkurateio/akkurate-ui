import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGeoLocation: FunctionComponent<IProps> = ({
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
      <path d="m6.627 12.755 18.116-7.09c1.624-.635 3.227.968 2.591 2.592l-7.089 18.117c-.736 1.881-3.48 1.609-3.832-.381l-1.17-6.615a2 2 0 0 0-1.62-1.622l-6.616-1.17c-1.99-.351-2.262-3.095-.38-3.831Z" />
    </svg>
  )
}
