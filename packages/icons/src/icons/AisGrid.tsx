import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGrid: FunctionComponent<IProps> = ({
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
      <path d="M12 4H7C5.346 4 4 5.346 4 7v5c0 1.654 1.346 3 3 3h5c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3Zm1 8c0 .551-.449 1-1 1H7c-.551 0-1-.449-1-1V7c0-.551.449-1 1-1h5c.551 0 1 .449 1 1v5ZM25 4h-5c-1.654 0-3 1.346-3 3v5c0 1.654 1.346 3 3 3h5c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3Zm1 8c0 .551-.449 1-1 1h-5c-.551 0-1-.449-1-1V7c0-.551.449-1 1-1h5c.551 0 1 .449 1 1v5ZM12 17H7c-1.654 0-3 1.346-3 3v5c0 1.654 1.346 3 3 3h5c1.654 0 3-1.346 3-3v-5c0-1.654-1.346-3-3-3Zm1 8c0 .551-.449 1-1 1H7c-.551 0-1-.449-1-1v-5c0-.551.449-1 1-1h5c.551 0 1 .449 1 1v5ZM25 17h-5c-1.654 0-3 1.346-3 3v5c0 1.654 1.346 3 3 3h5c1.654 0 3-1.346 3-3v-5c0-1.654-1.346-3-3-3Zm1 8c0 .551-.449 1-1 1h-5c-.551 0-1-.449-1-1v-5c0-.551.449-1 1-1h5c.551 0 1 .449 1 1v5Z" />
    </svg>
  )
}
