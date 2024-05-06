import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisList: FunctionComponent<IProps> = ({
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
      <path d="M26 5H6c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2ZM6 9V7h20v2H6ZM26 21H6c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2ZM6 25v-2h20l.002 2H6ZM26 13H6c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2ZM6 17v-2h20l.002 2H6Z" />
    </svg>
  )
}
