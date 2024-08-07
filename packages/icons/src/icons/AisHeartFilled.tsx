import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisHeartFilled: FunctionComponent<IProps> = ({
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
      <path d="M26 7a7.072 7.072 0 0 0-10 0A7.072 7.072 0 0 0 6 17l10 10 10-10a7.072 7.072 0 0 0 0-10Z" />
      <path d="M16 28a.997.997 0 0 1-.707-.293l-10-10A8.019 8.019 0 0 1 2.929 12c0-2.156.84-4.183 2.364-5.707C8.214 3.372 12.836 3.164 16 5.664c3.165-2.5 7.787-2.292 10.707.629A8.019 8.019 0 0 1 29.071 12c0 2.156-.84 4.183-2.364 5.707l-10 10A.997.997 0 0 1 16 28ZM11 5.932a6.055 6.055 0 0 0-4.293 1.775A6.032 6.032 0 0 0 4.929 12c0 1.622.632 3.146 1.778 4.293L16 25.586l9.293-9.293A6.032 6.032 0 0 0 27.071 12a6.034 6.034 0 0 0-1.778-4.293 6.08 6.08 0 0 0-8.586 0 .999.999 0 0 1-1.414 0A6.055 6.055 0 0 0 11 5.932Z" />
    </svg>
  )
}
