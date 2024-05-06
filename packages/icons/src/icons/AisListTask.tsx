import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisListTask: FunctionComponent<IProps> = ({
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
      <path d="M16 8h14v2H16V8Zm0 14h14v2H16v-2Zm-6-8H4a2.002 2.002 0 0 1-2-2V6a2.002 2.002 0 0 1 2-2h6a2.002 2.002 0 0 1 2 2v6a2.002 2.002 0 0 1-2 2ZM4 6v6h6.001L10 6H4Zm6 22H4a2.002 2.002 0 0 1-2-2v-6a2.002 2.002 0 0 1 2-2h6a2.002 2.002 0 0 1 2 2v6a2.002 2.002 0 0 1-2 2Zm-6-8v6h6.001L10 20H4Z" />
    </svg>
  )
}
