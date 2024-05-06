import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisWarningFilled: FunctionComponent<IProps> = ({
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
        d="m18.271 5.271 11.355 18.788a2.55 2.55 0 0 1 .04 2.601 2.618 2.618 0 0 1-2.31 1.34H4.646a2.616 2.616 0 0 1-2.31-1.34 2.552 2.552 0 0 1 .04-2.601L13.733 5.271A2.63 2.63 0 0 1 16.002 4c.94 0 1.789.475 2.27 1.271ZM15 12a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0v-6Zm2 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  )
}
