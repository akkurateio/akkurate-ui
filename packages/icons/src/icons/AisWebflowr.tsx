import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisWebflowr: FunctionComponent<IProps> = ({
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
      <path d="M22.769 11.677s-2.27 7.12-2.456 7.708c-.572-4.462-1.149-8.924-1.731-13.385-3.869 0-5.937 2.753-7.03 5.66l-2.993 7.743c-.018-.556-.42-7.66-.42-7.66-.238-3.56-3.5-5.728-6.139-5.728l3.196 19.367c4.053-.018 6.238-2.755 7.382-5.66 0 0 2.439-6.299 2.539-6.584.017.268 1.75 12.243 1.75 12.243 4.07 0 6.255-2.57 7.431-5.374L30 6.017c-4.02 0-6.138 2.736-7.231 5.659v.001Z" />
    </svg>
  )
}
