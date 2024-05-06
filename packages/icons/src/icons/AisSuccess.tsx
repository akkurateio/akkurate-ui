import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisSuccess: FunctionComponent<IProps> = ({
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
      <path d="m14.715 20.715 8-8a.999.999 0 1 0-1.414-1.414l-7.293 7.293-3.301-3.301a.999.999 0 1 0-1.414 1.414l4.008 4.008a.997.997 0 0 0 1.414 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13Zm-2 0c0 6.075-4.925 11-11 11S5 22.075 5 16 9.925 5 16 5s11 4.925 11 11Z"
      />
    </svg>
  )
}
