import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGraphGauge: FunctionComponent<IProps> = ({
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
        d="M6.1 13.1A14 14 0 0 1 30 23a1 1 0 0 1-1 1H18.83a3.001 3.001 0 0 1-5.66 0H3a1 1 0 0 1-1-1 14 14 0 0 1 4.1-9.9ZM27.959 22H18.83a3.02 3.02 0 0 0-.099-.245l4.634-4.634a1 1 0 0 0-1.414-1.414l-4.609 4.609A3.001 3.001 0 0 0 13.171 22H4.04a12 12 0 0 1 23.917 0Z"
      />
    </svg>
  )
}
