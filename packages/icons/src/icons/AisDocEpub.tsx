import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisDocEpub: FunctionComponent<IProps> = ({
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
      <path d="M16.47 24.937 8.006 16.47l8.466-8.465 2.822 2.821-5.645 5.644 2.823 2.822 8.466-8.465-7.376-7.375a1.542 1.542 0 0 0-2.181 0L3.452 15.38a1.543 1.543 0 0 0 0 2.182L15.38 29.49c.602.602 1.58.602 2.181 0L29.49 17.562a1.543 1.543 0 0 0 0-2.182l-1.732-1.73-11.287 11.287Z" />
    </svg>
  )
}
