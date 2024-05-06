import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisIndustryAlternative: FunctionComponent<IProps> = ({
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
        d="M16 21a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2Zm2 0h4v2h-4v-2Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.617 3.892A2 2 0 0 1 22.614 2h2.772a2 2 0 0 1 1.997 1.892L28 15.28V27h1a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1V12c0-1.648 1.882-2.589 3.2-1.6L12 14v-2c0-1.648 1.882-2.589 3.2-1.6l4.867 3.65.55-10.158ZM26 27H14v-6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6H6V12l4.8 3.6c1.318.989 3.2.048 3.2-1.6v-2l6.133 4.6a2 2 0 0 0 1.2.4H26v10Zm-16 0h2v-6h-2v6ZM25.386 4l.596 11h-3.964l.596-11h2.772Z"
      />
    </svg>
  )
}
