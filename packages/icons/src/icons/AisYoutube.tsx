import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisYoutube: FunctionComponent<IProps> = ({
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
      <path d="M30.367 9.278a3.75 3.75 0 0 0-2.646-2.646C25.385 6 16 6 16 6s-9.385 0-11.72.632a3.75 3.75 0 0 0-2.647 2.646A38.708 38.708 0 0 0 1 16.5a38.71 38.71 0 0 0 .632 7.222 3.75 3.75 0 0 0 2.646 2.646c2.336.632 11.721.632 11.721.632s9.385 0 11.72-.632a3.75 3.75 0 0 0 2.647-2.646c.436-2.383.648-4.8.632-7.222a38.71 38.71 0 0 0-.632-7.22ZM13 21v-9l7.789 4.5L13 21Z" />
    </svg>
  )
}
