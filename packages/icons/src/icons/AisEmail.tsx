import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisEmail: FunctionComponent<IProps> = ({
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
      <path d="M28 6H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h24c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2Zm-1.562 2L16 16.698 5.562 8h20.876ZM4 24.001v-14.7l11.36 9.467a.997.997 0 0 0 1.28 0L28 9.301v14.698H4v.002Z" />
    </svg>
  )
}
