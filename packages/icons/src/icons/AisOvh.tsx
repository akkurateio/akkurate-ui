import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisOvh: FunctionComponent<IProps> = ({
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
        d="M28.197 7.97A14.52 14.52 0 0 1 26.857 24h-7.679l2.364-4.205h-3.127l3.686-6.533h3.144l2.951-5.286V7.97ZM13.032 24h-7.83A14.336 14.336 0 0 1 3.846 7.933l5.079 8.875L14.522 7h8.238l-9.724 16.993-.004.007Z"
      />
    </svg>
  )
}
