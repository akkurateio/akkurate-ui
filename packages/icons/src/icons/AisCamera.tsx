import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisCamera: FunctionComponent<IProps> = ({
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
      <path d="M25 8h-4.382l-.447-.895A1.988 1.988 0 0 0 18.382 6h-4.765c-.762 0-1.448.424-1.789 1.105L11.381 8H6.999c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3V11c0-1.654-1.346-3-3-3H25Zm1 15c0 .551-.449 1-1 1H7c-.551 0-1-.449-1-1V11c0-.551.449-1 1-1h4.382c.762 0 1.448-.424 1.789-1.105L13.618 8h4.764l.447.895A1.988 1.988 0 0 0 20.618 10H25c.551 0 1 .449 1 1v12Z" />
      <path d="M16 12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3Z" />
    </svg>
  )
}
