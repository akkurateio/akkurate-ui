import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisExport: FunctionComponent<IProps> = ({
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
      <path d="M27.923 16.382a1.001 1.001 0 0 0-.216-1.089l-4-4a.999.999 0 1 0-1.414 1.414L24.586 15H14a1 1 0 0 0 0 2h10.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414l4-4a1.01 1.01 0 0 0 .216-.325Z" />
      <path d="M17 20a1 1 0 0 0-1 1l-.004 3L6 23.996 6.004 8 16 8.004V11a1 1 0 0 0 2 0V8.004A2.006 2.006 0 0 0 15.996 6H6.004A2.006 2.006 0 0 0 4 8.004v15.992C4 25.101 4.899 26 6.004 26h9.992A2.006 2.006 0 0 0 18 23.996V21a1 1 0 0 0-1-1Z" />
    </svg>
  )
}
