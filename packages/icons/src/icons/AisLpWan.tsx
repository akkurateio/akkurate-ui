import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisLpWan: FunctionComponent<IProps> = ({
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
      <path d="M25.9 4.1a1 1 0 1 0-1.415 1.415c4.687 4.686 4.687 12.284 0 16.97A1 1 0 0 0 25.9 23.9c5.467-5.468 5.467-14.332 0-19.8ZM7.515 5.515A1 1 0 0 0 6.1 4.1C.633 9.568.633 18.432 6.1 23.9a1 1 0 0 0 1.414-1.415c-4.687-4.686-4.687-12.284 0-16.97Z" />
      <path d="M21.657 6.929a1 1 0 0 1 1.414 0c3.905 3.905 3.905 10.237 0 14.142a1 1 0 1 1-1.414-1.414 8 8 0 0 0 0-11.314 1 1 0 0 1 0-1.414ZM10.343 6.929a1 1 0 0 1 0 1.414 8 8 0 0 0 0 11.314A1 1 0 1 1 8.93 21.07c-3.905-3.905-3.905-10.237 0-14.142a1 1 0 0 1 1.414 0Z" />
      <path d="M20.243 9.757a1 1 0 1 0-1.415 1.415 4 4 0 0 1 0 5.656 1 1 0 0 0 1.415 1.415 6 6 0 0 0 0-8.486ZM13.172 11.172a1 1 0 0 0-1.415-1.415 6 6 0 0 0 0 8.486 1 1 0 1 0 1.415-1.415 4 4 0 0 1 0-5.656ZM18 14a2 2 0 0 1-1 1.732V29a1 1 0 1 1-2 0V15.732A2 2 0 0 1 16 12a2 2 0 0 1 2 2Z" />
    </svg>
  )
}
