import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisTimeline: FunctionComponent<IProps> = ({
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
      <path d="M16 11c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h12ZM4 7h12v2H4V7ZM13 21H6c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2Zm-7 4v-2h7v2H6ZM28 13H8c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2ZM8 17v-2h20v2H8Z" />
    </svg>
  )
}
