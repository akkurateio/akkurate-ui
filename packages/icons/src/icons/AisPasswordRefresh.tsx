import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisPasswordRefresh: FunctionComponent<IProps> = ({
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
      <path d="M27.942 17.176A12 12 0 1 0 16 28a1 1 0 1 1 0 2 14 14 0 1 1 10.724-5H29a1 1 0 1 1 0 2h-4a2 2 0 0 1-2-2v-4a1 1 0 1 1 2 0v2.937a12 12 0 0 0 2.942-6.76Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 12v2.278A1.993 1.993 0 0 1 21 16v5a2.002 2.002 0 0 1-2 2h-6a2.003 2.003 0 0 1-2-2v-5a1.994 1.994 0 0 1 1-1.722V12a4 4 0 1 1 8 0Zm-2.587-1.414A2.003 2.003 0 0 0 16 10a2.003 2.003 0 0 0-2 2v2h4v-2c0-.53-.212-1.039-.587-1.414ZM13 16v5h6v-5h-6Z"
      />
    </svg>
  )
}
