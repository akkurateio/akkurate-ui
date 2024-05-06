import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisCaret: FunctionComponent<IProps> = ({
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
      <path d="M16 20a.997.997 0 0 1-.707-.293l-6-6a.999.999 0 1 1 1.414-1.414L16 17.586l5.293-5.293a.999.999 0 1 1 1.414 1.414l-6 6A.997.997 0 0 1 16 20Z" />
    </svg>
  )
}
