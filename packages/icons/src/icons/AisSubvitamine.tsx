import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisSubvitamine: FunctionComponent<IProps> = ({
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
      <path d="M2.997 25a.998.998 0 0 1-1-1V12.43a1 1 0 0 1 .832-.985l26.006-4.43a.998.998 0 0 1 1.167.986v11.57a1 1 0 0 1-.832.985l-26.006 4.43a.954.954 0 0 1-.168.015L2.997 25Zm1-11.727v9.542l24.006-4.089V9.184L3.997 13.273Z" />
    </svg>
  )
}
