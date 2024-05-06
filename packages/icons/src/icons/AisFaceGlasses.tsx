import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisFaceGlasses: FunctionComponent<IProps> = ({
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
      <path d="M11 23a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-2 0c0 6.627-5.373 12-12 12S4 22.627 4 16c0-.681.057-1.35.166-2H6v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-1h2v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-1h1.834c.11.65.166 1.319.166 2Zm-.683-4h-1.852A3.998 3.998 0 0 0 22 10h-1c-1.48 0-2.773.804-3.465 2h-3.07A3.998 3.998 0 0 0 11 10h-1c-1.48 0-2.773.804-3.465 2H4.683C6.33 7.34 10.775 4 16 4c5.225 0 9.67 3.34 11.317 8ZM11 12h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Zm10 0h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2Z"
      />
    </svg>
  )
}
