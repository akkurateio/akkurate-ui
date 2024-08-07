import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisDatewarehouse: FunctionComponent<IProps> = ({
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
      <path d="M16.655 2.244a1 1 0 0 0-1.31 0l-12 10.4A1 1 0 0 0 3 13.4V29a1 1 0 1 0 2 0V13.857l11-9.534 11 9.534V29a1 1 0 1 0 2 0V13.4a1 1 0 0 0-.345-.756l-12-10.4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13v12a1 1 0 0 0 1 1h5v2h-5a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-5v-2h5a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1Zm2 1v2h10v-2H11Zm10 10v-2H11v2h10Zm0-4v-2H11v2h10Z"
      />
    </svg>
  )
}
