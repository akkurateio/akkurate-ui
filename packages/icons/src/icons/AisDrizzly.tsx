import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisDrizzly: FunctionComponent<IProps> = ({
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
        d="M21.666 4.008A8.994 8.994 0 0 1 24.8 9.136 6.498 6.498 0 0 1 23.5 22h-1.882l-1.724 3.447a1 1 0 0 1-1.789-.894L19.381 22H8.5A6.498 6.498 0 0 1 7.2 9.136a8.994 8.994 0 0 1 14.466-5.128ZM8.5 20h15a4.498 4.498 0 0 0 .356-8.981l-.815-.064-.099-.812a6.994 6.994 0 0 0-13.883 0l-.1.812-.815.064A4.497 4.497 0 0 0 8.5 20Z"
      />
      <path d="M10.513 29.873a1 1 0 0 0 1.381-.426l2-4a1 1 0 1 0-1.788-.894l-2 4a1 1 0 0 0 .407 1.32Z" />
    </svg>
  )
}
