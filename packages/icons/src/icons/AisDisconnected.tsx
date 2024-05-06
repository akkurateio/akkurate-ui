import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisDisconnected: FunctionComponent<IProps> = ({
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
      <path d="M22.742 12.005C21.846 8.521 18.676 6 15 6a7.95 7.95 0 0 0-3.873 1.005l1.491 1.491A5.957 5.957 0 0 1 15.001 8a6.004 6.004 0 0 1 5.943 5.227c.035.271.18.517.4.679.221.162.498.225.769.178.314-.057.604-.084.888-.084 2.757 0 5 2.243 5 5a4.977 4.977 0 0 1-1.411 3.467l1.416 1.416a6.973 6.973 0 0 0 1.995-4.884c0-3.946-3.329-7.16-7.258-6.995l-.001.001ZM5.707 4.293a.999.999 0 1 0-1.414 1.414l3.981 3.981A7.941 7.941 0 0 0 7 14v.083A6.01 6.01 0 0 0 1.999 20c0 3.309 2.691 6 6 6h15c.491 0 .967-.059 1.429-.157l1.864 1.864a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-22-22h.001ZM8 24c-2.206 0-4-1.794-4-4a4.005 4.005 0 0 1 3.952-4 1.03 1.03 0 0 0 .879-.331 1 1 0 0 0 .239-.805 5.987 5.987 0 0 1-.07-.865c0-1.034.267-2.005.732-2.854l12.854 12.854H8V24Z" />
    </svg>
  )
}
