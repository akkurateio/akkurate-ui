import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisPencil: FunctionComponent<IProps> = ({
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
      <path d="m28.707 8.293-4-4a.999.999 0 0 0-1.414 0L21 6.586l-2.293-2.293a.999.999 0 0 0-1.414 0l-4 4a.999.999 0 1 0 1.414 1.414L18 6.414 19.586 8 6.293 21.293a.998.998 0 0 0-.273.511l-1 5a1.002 1.002 0 0 0 1.176 1.176l5-1a1.01 1.01 0 0 0 .511-.273l17-17a.999.999 0 0 0 0-1.414Zm-18.2 16.786-3.232.646.646-3.232L21 9.414 23.586 12 10.507 25.079ZM25 10.586 22.414 8 24 6.414 26.586 9 25 10.586Z" />
    </svg>
  )
}
