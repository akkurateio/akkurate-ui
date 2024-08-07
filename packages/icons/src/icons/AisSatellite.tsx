import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisSatellite: FunctionComponent<IProps> = ({
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
      <path d="m22.914 16.5 2.793-2.793a.998.998 0 0 0 0-1.414L23.414 10 25.5 7.914l2.379 2.379a1 1 0 1 0 1.414-1.414L23.12 2.707a1 1 0 0 0-1.414 1.414L24.086 6.5 22 8.586l-2.293-2.293a1 1 0 0 0-1.414 0L15.5 9.086 8.707 2.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 0 1.414L9.086 15.5l-2.793 2.793a1 1 0 0 0 0 1.414L8.586 22 6.5 24.086l-2.379-2.379a1 1 0 1 0-1.414 1.414l6.172 6.172a1 1 0 1 0 1.414-1.414L7.914 25.5 10 23.414l2.293 2.293a1 1 0 0 0 1.414 0l2.793-2.793 6.793 6.793a1 1 0 0 0 1.414 0l5-5a.998.998 0 0 0 0-1.414L22.914 16.5ZM4.414 8 8 4.414 10.086 6.5 6.5 10.086 4.414 8Zm3.5 3.5L11.5 7.914l2.586 2.586-3.586 3.586L7.914 11.5ZM13 23.586 8.414 19 19 8.414 23.586 13 13 23.586Zm4.914-2.086 3.586-3.586 2.586 2.586-3.586 3.586-2.586-2.586ZM24 27.586 21.914 25.5l3.586-3.586L27.586 24 24 27.586Z" />
    </svg>
  )
}
