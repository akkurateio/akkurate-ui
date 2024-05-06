import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisFileXml: FunctionComponent<IProps> = ({
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
      <path d="M17.98 13.196a1 1 0 0 0-1.96-.392l-2 10a1 1 0 0 0 1.96.392l2-10ZM12.555 14.168a1 1 0 0 1 .277 1.387L11.202 18l1.63 2.445a1 1 0 0 1-1.664 1.11l-2-3a1 1 0 0 1 0-1.11l2-3a1 1 0 0 1 1.387-.277ZM19.168 20.445a1 1 0 0 0 1.664 1.11l2-3a1 1 0 0 0 0-1.11l-2-3a1 1 0 0 0-1.664 1.11L20.798 18l-1.63 2.445Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.828a2 2 0 0 0-.586-1.414l-4.828-4.828A2 2 0 0 0 19.172 2H8Zm10 2H8v24h16V10h-6V4Zm2 .828V8h3.172L20 4.828Z"
      />
    </svg>
  )
}
