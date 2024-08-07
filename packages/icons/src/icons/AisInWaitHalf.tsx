import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisInWaitHalf: FunctionComponent<IProps> = ({
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
        d="M22.997 28.103C23 28.069 23 28.034 23 28v-5.24a6 6 0 0 0-2.095-4.556L18.333 16l2.572-2.204a5.995 5.995 0 0 0 1.28-1.536c.517-.59.815-1.357.815-2.165 0-.088-.01-.174-.03-.256.02-.198.03-.398.03-.599V4a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v5.24c0 .201.01.401.03.6-.02.081-.03.167-.03.255 0 .808.298 1.575.815 2.165a5.996 5.996 0 0 0 1.28 1.536L13.667 16l-2.572 2.204A6 6 0 0 0 9 22.76V28c0 .035 0 .069.003.103a2.367 2.367 0 0 0-.003.11c0 .124.028.24.078.344A2.001 2.001 0 0 0 11 30h10a2 2 0 0 0 1.922-1.443.783.783 0 0 0 .078-.343c0-.037 0-.074-.003-.111ZM16 16.634l-3.603 3.089A4 4 0 0 0 11 22.76v2.811L16 22l5 3.571V22.76a4 4 0 0 0-1.397-3.037L16 16.634ZM21 9H11V4h10v5Z"
      />
    </svg>
  )
}
