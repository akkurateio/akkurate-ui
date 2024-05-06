import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisDownloadCloud: FunctionComponent<IProps> = ({
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
      <path d="M22.62 8.005C21.724 4.522 18.554 2 14.878 2c-4.411 0-8 3.589-8 8v.083A6.01 6.01 0 0 0 1.877 16c0 3.309 2.691 6 6 6h4.122a1 1 0 1 0 0-2H7.877c-2.206 0-4-1.794-4-4 0-2.19 1.77-3.976 3.955-4a.999.999 0 0 0 1.115-1.136 5.985 5.985 0 0 1-.07-.864c0-3.309 2.691-6 6-6a6.004 6.004 0 0 1 5.943 5.228 1.002 1.002 0 0 0 1.167.857c.319-.057.61-.084.89-.084 2.757 0 5 2.243 5 5s-2.243 5-5 5h-2.878a1 1 0 1 0 0 2h2.878c3.859 0 7-3.141 7-7 0-3.945-3.31-7.121-7.258-6.995l.001-.001Z" />
      <path d="M19.293 24.293 17 26.586V13a1 1 0 1 0-2 0v13.586l-2.293-2.293a.999.999 0 1 0-1.414 1.414l3.999 3.999a.99.99 0 0 0 .326.217.991.991 0 0 0 1.09-.217l3.999-3.999a.999.999 0 1 0-1.414-1.414Z" />
    </svg>
  )
}
