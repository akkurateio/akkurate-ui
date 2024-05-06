import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisTruck: FunctionComponent<IProps> = ({
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
      <path d="m27.775 13.981-1.055-.702-2.702-4.055a4.987 4.987 0 0 0-4.157-2.225H5.005A3.008 3.008 0 0 0 2 10.004v10.995c0 1.654 1.346 3 3 3 .062 0 .115-.024.173-.035A2.995 2.995 0 0 0 8 25.999a2.996 2.996 0 0 0 2.816-2H20c.062 0 .115-.024.173-.035A2.995 2.995 0 0 0 23 25.999a2.996 2.996 0 0 0 2.816-2h1.187A3.001 3.001 0 0 0 30 21.002v-2.864a4.986 4.986 0 0 0-2.225-4.157ZM8 24a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm15 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5-2.997c0 .55-.447.997-.997.997h-1.187A2.996 2.996 0 0 0 23 20a2.996 2.996 0 0 0-2.827 2.035C20.115 22.024 20.061 22 20 22h-9.184A2.996 2.996 0 0 0 8 20a2.996 2.996 0 0 0-2.827 2.035C5.115 22.024 5.061 22 5 22a1 1 0 0 1-1-1V10.005C4 9.451 4.451 9 5.005 9h14.856a2.99 2.99 0 0 1 2.493 1.334l1.388 2.082C21.006 12.018 17.527 12 17 12a1 1 0 1 0 0 2c2.594 0 7.171.24 8.516.879l1.15.766A2.991 2.991 0 0 1 28 18.138V21.003Z" />
    </svg>
  )
}
