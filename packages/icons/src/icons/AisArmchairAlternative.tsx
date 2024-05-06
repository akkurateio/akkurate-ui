import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisArmchairAlternative: FunctionComponent<IProps> = ({
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
        d="M11 2a5 5 0 0 0-5 5v3a4 4 0 0 0-2 7.465V25a3 3 0 0 0 3 3 2 2 0 1 0 4 0h10a2 2 0 1 0 4 0 3 3 0 0 0 3-3v-7.535A4 4 0 0 0 26 10V7a5 5 0 0 0-5-5H11Zm13 8.535V7a3 3 0 0 0-3-3H11a3 3 0 0 0-3 3v3.535c1.196.692 2 1.984 2 3.465v2.66c.184-.046.387-.092.607-.139C11.857 16.258 13.675 16 16 16s4.143.258 5.393.521c.22.047.423.093.607.138V14c0-1.48.804-2.773 2-3.465ZM6 12a2 2 0 1 0 0 4 1 1 0 1 1 0 2v7a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7a1 1 0 1 1 0-2 2 2 0 1 0-2-2v9a1 1 0 1 1-2 0v-4.273a15.474 15.474 0 0 0-1.018-.248C19.857 18.242 18.175 18 16 18s-3.857.242-4.982.479c-.416.087-.757.174-1.018.248V23a1 1 0 1 1-2 0v-9a2 2 0 0 0-2-2Z"
      />
    </svg>
  )
}
