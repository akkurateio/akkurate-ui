import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisDropbox: FunctionComponent<IProps> = ({
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
      <path d="M8.5 3 1 7.777l7.5 4.778 7.501-4.777L8.5 3Zm15 0L16 7.777l7.5 4.778L31 7.778 23.5 3ZM1 17.334l7.5 4.777 7.501-4.777L8.5 12.555 1 17.334Zm22.5-4.779L16 17.334l7.5 4.777 7.5-4.777-7.5-4.779Zm-15 11.15 7.501 4.778 7.5-4.778-7.5-4.777L8.5 23.704Z" />
    </svg>
  )
}
