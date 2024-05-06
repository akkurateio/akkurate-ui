import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisUnlink: FunctionComponent<IProps> = ({
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
      <path d="M13 2h-2v4h2V2ZM6 11H2v2h4v-2ZM30 19h-4v2h4v-2ZM21 26h-2v4h2v-4ZM12.87 24.79l3.71-3.72L18 22.49l-3.68 3.71A6.07 6.07 0 0 1 10 28a6 6 0 0 1-4.26-1.74 6 6 0 0 1 .06-8.54L9.51 14l1.42 1.41-3.72 3.72a4.002 4.002 0 0 0 5.66 5.66ZM19.13 7.21l-3.72 3.72L14 9.51l3.68-3.71A6.07 6.07 0 0 1 22 4a6 6 0 0 1 4.26 1.74 5.999 5.999 0 0 1-.06 8.54L22.49 18l-1.42-1.41 3.72-3.72a4.003 4.003 0 0 0-5.66-5.66ZM3.584 5.002l1.414-1.414 3.416 3.414L7 8.417 3.584 5.002ZM23.581 24.992l1.415-1.414 3.414 3.416-1.414 1.414-3.415-3.416Z" />
    </svg>
  )
}
