import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisSms: FunctionComponent<IProps> = ({
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
      <path d="M12 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM18 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM24 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.495 28c.632 0 1.251-.031 1.852-.091 2.632-.262 4.909-1.073 6.41-2.205C13.8 25.897 14.885 26 16 26c7.732 0 14-4.925 14-11S23.732 4 16 4 2 8.925 2 15c0 3.466 2.04 6.558 5.23 8.575a7.519 7.519 0 0 1-2.735 3.212A7.386 7.386 0 0 1 2 27.833c.798.11 1.634.167 2.495.167Zm4.56-3.609.708-1.581-1.464-.926C5.544 20.143 4 17.624 4 15c0-4.548 4.896-9 12-9s12 4.452 12 9-4.896 9-12 9c-.993 0-1.956-.091-2.876-.263l-.866-.161-.704.53c-.739.557-1.797 1.054-3.088 1.398.22-.356.417-.728.59-1.113Z"
      />
    </svg>
  )
}
