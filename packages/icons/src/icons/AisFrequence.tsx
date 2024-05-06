import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisFrequence: FunctionComponent<IProps> = ({
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
        d="M17.022 2a1 1 0 0 1 .97.867l2.775 20.62 1.76-7.493a1 1 0 0 1 .973-.772H27a1 1 0 1 1 0 2h-2.708L21.473 29.23a1 1 0 0 1-1.964-.096l-2.65-19.678-2.875 16.055a1 1 0 0 1-1.97-.01l-1.928-11.437-1.164 2.77a1 1 0 0 1-.922.611H5a1 1 0 1 1 0-2h2.336l2.242-5.332a1 1 0 0 1 1.908.222l1.544 9.16 2.986-16.67A1 1 0 0 1 17.022 2Z"
      />
    </svg>
  )
}
