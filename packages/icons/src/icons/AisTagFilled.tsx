import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisTagFilled: FunctionComponent<IProps> = ({
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
        d="M6 2h8.337a4 4 0 0 1 2.828 1.172l12.484 12.484a2 2 0 0 1 0 2.828L18.484 29.65a2 2 0 0 1-2.828 0L3.172 17.165A4 4 0 0 1 2 14.337V6a4 4 0 0 1 4-4Zm1.382 7.535a2.153 2.153 0 1 0 0-4.306 2.153 2.153 0 0 0 0 4.306Z"
      />
    </svg>
  )
}
