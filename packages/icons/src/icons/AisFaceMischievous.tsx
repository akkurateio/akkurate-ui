import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisFaceMischievous: FunctionComponent<IProps> = ({
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
      <path d="M13 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM21 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM11.707 18.657a6 6 0 0 0 8.485 0 1 1 0 0 1 1.415 1.414 8.112 8.112 0 0 1-.677.604c.136.15.25.323.338.516l.447.981A2 2 0 0 1 19.894 25h-1.252a1.91 1.91 0 0 1-1.343-.552l-2.022-2.002a.79.79 0 0 1-.059-.065 7.968 7.968 0 0 1-4.925-2.31 1 1 0 0 1 1.414-1.414Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z"
      />
    </svg>
  )
}
