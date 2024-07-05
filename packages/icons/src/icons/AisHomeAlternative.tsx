import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisHomeAlternative: FunctionComponent<IProps> = ({
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
        d="M16.633 5.81a1 1 0 0 0-1.266 0l-9 7.364a1 1 0 0 0-.367.774V25h6v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8h6V13.948a1 1 0 0 0-.367-.774l-9-7.364ZM14.1 4.262a3 3 0 0 1 3.8 0l9 7.364a3 3 0 0 1 1.1 2.322V25a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8h-4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V13.948a3 3 0 0 1 1.1-2.322l9-7.364Z"
      />
    </svg>
  )
}
