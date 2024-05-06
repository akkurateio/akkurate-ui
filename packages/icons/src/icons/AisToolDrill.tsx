import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisToolDrill: FunctionComponent<IProps> = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 24h1.82a1 1 0 0 0 .986-1.164L29 12V4a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2H8a1 1 0 0 0-1 1H3a1 1 0 0 0 0 2h4a1 1 0 0 0 1 1h1a2 2 0 0 0 2 2h4.167l2.044 3.504a1 1 0 0 0 .863.496h2.26l1.527 9.164a1 1 0 0 0 .986.836H26v2H7a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-1h19a1 1 0 0 0 1-1v-3Zm-1-11.835V4H11v4h5.315l2.334 4h3.379l1.666 10h4.945L27 12.165Z"
      />
    </svg>
  )
}
