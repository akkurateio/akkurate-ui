import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisWebhook: FunctionComponent<IProps> = ({
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
      <path d="M6.478 20.394a3.03 3.03 0 0 1 2.054-.34l1.112-1.945c.971-1.7 1.616-2.83 2.073-3.572A7 7 0 1 1 22.063 12.5l-1.731-1.002a5 5 0 1 0-6.812 1.844l.868.497-.498.868-.82 1.434-2.805 4.91a3.03 3.03 0 1 1-3.787-.658Z" />
      <path d="M24 16c-.88 0-1.751.165-2.57.487l-3.166-5.54a3.047 3.047 0 1 0-1.732 1l4.119 7.208.868-.498a5 5 0 1 1-1.85 6.842l-1.732 1.002A7 7 0 1 0 24 16Z" />
      <path d="M24 26a3 3 0 1 0-2.816-4H13v1a5 5 0 1 1-5-5v-2a7 7 0 1 0 6.929 8h6.255A2.992 2.992 0 0 0 24 26Z" />
    </svg>
  )
}
