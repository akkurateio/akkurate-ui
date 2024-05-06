import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisClassRoom: FunctionComponent<IProps> = ({
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
        d="M8 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4.29 13.188C5.54 12.29 7.008 12 8 12c1.257 0 9.292.674 13.087 1.004A1 1 0 0 1 22 14v2a1 1 0 0 1-.89.994l-8.26.918-1.866 10.267A1 1 0 0 1 10 29H6a1 1 0 0 1-1-1v-5H3a1 1 0 0 1-1-1v-4c0-2.326.992-3.876 2.29-4.812Zm1.17 1.623C4.674 15.377 4 16.326 4 18v3h2a1 1 0 0 1 1 1v5h2.165l1.851-10.179a1 1 0 0 1 .874-.815l8.11-.901v-.188C15.918 14.567 9.06 14 8 14c-.673 0-1.706.21-2.54.812Z"
      />
      <path d="M15 4a1 1 0 1 0 0 2h13v15H15a1 1 0 1 0 0 2h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H15Z" />
    </svg>
  )
}
