import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisNimiscientBI: FunctionComponent<IProps> = ({
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
        d="M9 6c0 1.66-1.34 3-3 3S3 7.66 3 6s1.34-3 3-3 3 1.34 3 3ZM5 6c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1ZM19 6c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3Zm-4 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1ZM6 29c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Zm0-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z"
      />
      <path d="M13 23h16v2H13v-2ZM29 3h-6v2h6V3ZM23 7h6v2h-6V7ZM5 13H3v6h2v-6ZM7 13h2v6H7v-6ZM29 27H13v2h16v-2ZM13 19.02h6.09c.27 0 .52-.1.71-.29l3.72-3.72h5.53v-2h-5.94c-.27 0-.52.1-.71.29l-3.72 3.72H13v2Z" />
    </svg>
  )
}
