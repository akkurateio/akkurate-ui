import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisCursorFilled: FunctionComponent<IProps> = ({
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
      <path d="M27.044 11.8 6.257 3.666c-1.624-.636-3.227.967-2.591 2.591L11.8 27.044c.616 1.576 2.79 1.722 3.61.243l3.965-7.135c.181-.327.45-.596.777-.777l7.135-3.964c1.479-.822 1.333-2.995-.243-3.611Z" />
    </svg>
  )
}
