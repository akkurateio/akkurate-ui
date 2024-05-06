import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisSubscriber: FunctionComponent<IProps> = ({
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
        d="M14 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <path d="M11 14a5 5 0 0 0-5 5v1a1 1 0 1 0 2 0v-1a3 3 0 0 1 6 0v1a1 1 0 1 0 2 0v-1a5 5 0 0 0-5-5ZM24.293 9.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L21 12.586l3.293-3.293Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h6.904a2 2 0 0 1 1.414.586l2.402 2.402a2 2 0 0 0 2.828 0l2.402-2.402A2 2 0 0 1 21.364 25H28a2 2 0 0 0 2-2V5ZM4 5h24v18h-6.636a4 4 0 0 0-2.828 1.172l-2.402 2.401-2.402-2.401A4 4 0 0 0 10.904 23H4V5Z"
      />
    </svg>
  )
}
