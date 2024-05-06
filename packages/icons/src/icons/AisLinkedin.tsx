import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisLinkedin: FunctionComponent<IProps> = ({
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
      <path d="M28.75 1H3.25C2 1 1 2 1 3.125V28.75c0 1.125 1 2.125 2.25 2.125h25.5c1.25 0 2.25-1 2.25-2.125V3.125C31 2 30 1 28.75 1ZM9.875 26.5H5.5V12.25h4.375V26.5ZM7.75 10.25c-1.375 0-2.625-1.125-2.625-2.625S6.25 5 7.75 5c1.375 0 2.625 1.125 2.625 2.625S9.125 10.25 7.75 10.25Zm18.875 16.125H22.25v-7c0-1.625 0-3.875-2.375-3.875s-2.625 1.875-2.625 3.625v7.125h-4.375v-14H17v1.875h.125c.625-1.125 2.125-2.375 4.25-2.375 4.5 0 5.375 3 5.375 6.875v7.75h-.125Z" />
    </svg>
  )
}
