import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisNimiscientPerformance: FunctionComponent<IProps> = ({
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
        d="M13 9c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Zm0-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1ZM27 13c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Zm0-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1ZM8 14c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3Zm-4 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1ZM5 29c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Zm0-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1ZM24 22c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3Zm-4 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1Z"
      />
      <path d="M29.94 21H26v2h3.94v-2ZM2 21h7.99c.27 0 .52-.1.71-.29L14.41 17h15.65v-2H14.01c-.27 0-.52.1-.71.29L9.59 19H2v2ZM30.06 29H18.13c-.26 0-.51-.1-.7-.28L13.59 25H10v-2h4c.26 0 .51.1.7.28L18.54 27h11.52v2ZM11 13h11.01v-2H11.42L7.71 7.29C7.52 7.11 7.27 7 7 7H2v2h4.58l3.71 3.71c.19.18.44.29.71.29ZM19.1 9.02H17v-2h1.68l3.73-3.73a.99.99 0 0 1 .71-.29h6.94v2h-6.53l-3.72 3.72a.99.99 0 0 1-.71.29v.01ZM2 3h6v2H2V3Z" />
    </svg>
  )
}
