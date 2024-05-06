import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisCursor: FunctionComponent<IProps> = ({
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
        d="M26.316 13.662 5.527 5.528l8.134 20.787 3.964-7.135a4 4 0 0 1 1.554-1.554l7.136-3.964ZM6.256 3.666 27.044 11.8c1.576.616 1.722 2.79.243 3.61l-7.135 3.965a2 2 0 0 0-.777.777l-3.964 7.135c-.822 1.479-2.995 1.333-3.611-.243L3.666 6.257c-.636-1.624.967-3.227 2.591-2.591Z"
      />
    </svg>
  )
}
