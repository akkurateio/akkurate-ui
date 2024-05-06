import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGoogleDrive: FunctionComponent<IProps> = ({
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
      <path d="M16.012 2.856c-2.602 0-4.692.025-4.678.059.012.025 2.135 3.751 4.717 8.275l4.7 8.217h4.7c2.601 0 4.691-.024 4.678-.058-.007-.025-2.135-3.752-4.719-8.275l-4.7-8.218h-4.698Zm-5.95 2.163a986.944 986.944 0 0 0-4.537 7.899L1 20.834l2.362 4.122L5.72 29.08l4.525-7.919 4.522-7.912-2.35-4.11c-1.291-2.258-2.347-4.112-2.354-4.12Zm2.824 15.816-.253.435c-.143.247-1.2 2.09-2.35 4.109-.703 1.24-1.41 2.478-2.123 3.712-.012.033 4.05.053 9.027.053h9.055l2.245-3.946c1.24-2.168 2.313-4.038 2.383-4.154l.13-.209H12.886Z" />
    </svg>
  )
}
