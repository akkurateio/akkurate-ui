import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisLocationFilled: FunctionComponent<IProps> = ({
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
        d="M8.223 6.203c4.287-4.263 11.266-4.263 15.553 0h-.001a10.838 10.838 0 0 1 3.224 7.738 10.84 10.84 0 0 1-3.224 7.739l-7.071 7.029a.997.997 0 0 1-1.41 0L8.223 21.68a10.84 10.84 0 0 1-3.224-7.739c0-2.924 1.145-5.672 3.224-7.738ZM14 14c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2Z"
      />
    </svg>
  )
}
