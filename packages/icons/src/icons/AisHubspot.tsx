import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisHubspot: FunctionComponent<IProps> = ({
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
      <path d="M23.552 11.252v-3.32a2.565 2.565 0 0 0 1.478-2.308v-.079a2.566 2.566 0 0 0-2.559-2.56h-.078a2.567 2.567 0 0 0-2.559 2.56v.077a2.562 2.562 0 0 0 1.461 2.302l.015.007v3.328a7.257 7.257 0 0 0-3.463 1.528l.013-.012-9.132-7.11a2.913 2.913 0 1 0-1.351 1.767l-.014.007 8.98 6.99a7.206 7.206 0 0 0-1.211 4.02c0 1.567.495 3.02 1.338 4.208l-.015-.023-2.733 2.733a2.297 2.297 0 0 0-.676-.11h-.003a2.371 2.371 0 1 0 2.372 2.371 2.308 2.308 0 0 0-.116-.694l.005.016 2.704-2.703a7.287 7.287 0 1 0 5.579-12.99l-.043-.005h.008Zm-1.125 10.94a3.74 3.74 0 1 1 3.75-3.74v.001a3.74 3.74 0 0 1-3.74 3.742l-.01-.002Z" />
    </svg>
  )
}
