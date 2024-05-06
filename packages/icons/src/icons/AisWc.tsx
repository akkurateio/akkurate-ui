import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisWc: FunctionComponent<IProps> = ({
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
        d="M9 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM9 14a4 4 0 0 0-4 4v3h1a2 2 0 0 1 2 2v4h2v-4a2 2 0 0 1 2-2h1v-3a4 4 0 0 0-4-4Zm-6 4a6 6 0 0 1 12 0v3a2 2 0 0 1-2 2h-1v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4H5a2 2 0 0 1-2-2v-3ZM19.02 23H20a2 2 0 0 1 2 2v2h2v-2a2 2 0 0 1 2-2h.98c-.08-1.972-.396-4.33-1.1-6.164C25.146 14.928 24.18 14 23 14c-1.19 0-2.157.917-2.885 2.803-.703 1.822-1.018 4.18-1.096 6.197Zm-.77-6.917C19.05 14.007 20.497 12 23 12c2.505 0 3.949 2.041 4.747 4.119.82 2.138 1.152 4.762 1.233 6.844C29.024 24.11 28.092 25 27 25h-1v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2h-1c-1.093 0-2.023-.891-1.98-2.035.078-2.127.407-4.753 1.23-6.882Z"
      />
    </svg>
  )
}
