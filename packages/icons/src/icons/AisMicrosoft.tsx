import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisMicrosoft: FunctionComponent<IProps> = ({
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
      <path d="M15.381 3H3v12.381h12.381V3ZM29 3H16.619v12.381H29V3ZM3 16.619h12.381V29H3V16.619ZM29 16.619H16.619V29H29V16.619Z" />
    </svg>
  )
}
