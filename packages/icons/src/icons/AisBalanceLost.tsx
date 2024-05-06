import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisBalanceLost: FunctionComponent<IProps> = ({
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
        d="m6.974 14.366 5.196-3 .732-2.732 5.196-3 2.732.732 5.196-3"
        stroke="#000"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.866 11.448c.145.24.161.49.1.68a.6.6 0 0 1-.415.4 10.076 10.076 0 0 1-6.102 0 .6.6 0 0 1-.416-.4.833.833 0 0 1 .101-.68L25.5 5.922l3.366 5.526Z"
        stroke="#000"
        strokeWidth="2"
      />
      <path d="M12.72 20.928c.582.957.24 2.202-.866 2.553a11.079 11.079 0 0 1-6.708 0c-1.105-.351-1.448-1.596-.866-2.553L8.5 14l4.22 6.928Z" />
      <rect x="15" y="2" width="2" height="27" rx="1" />
      <rect x="9" y="26" width="14" height="4" rx="1" />
    </svg>
  )
}
