import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisAdobe: FunctionComponent<IProps> = ({
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
      <path d="m18.457 29.56-2.112-5.351h-5.192l4.864-11.43 7.078 16.781h-4.637ZM12.105 3H1v26.56L12.105 3ZM31 3H19.895L31 29.56V3Z" />
    </svg>
  )
}
