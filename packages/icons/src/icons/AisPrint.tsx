import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisPrint: FunctionComponent<IProps> = ({
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
      <path d="M27 9h-2V6c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v3H5c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h2v3c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-3h2c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3ZM9 6h14v3H9V6Zm14 20H9V16h14v10Zm5-6c0 .552-.449 1-1 1h-2v-5c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v5H5c-.551 0-1-.448-1-1v-8c0-.552.449-1 1-1h22c.551 0 1 .448 1 1v8Z" />
    </svg>
  )
}
