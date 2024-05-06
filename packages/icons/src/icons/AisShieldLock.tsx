import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisShieldLock: FunctionComponent<IProps> = ({
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
      <path d="m26.112 3.137-10-1.131a1.058 1.058 0 0 0-.225 0l-10 1.131a1 1 0 0 0-.888.994v11.435c0 8.406 10.087 14.073 10.517 14.31a1 1 0 0 0 .966 0c.429-.236 10.517-5.903 10.517-14.31V4.131a1 1 0 0 0-.887-.994ZM25 15.566c0 6.266-7.067 11.073-9 12.271-1.935-1.196-9-5.992-9-12.271V5.025l9-1.018 9 1.018v10.541Z" />
      <path d="M13 13c0 1.302.839 2.402 2 2.816v3.067a1 1 0 1 0 2 0v-3.067A2.996 2.996 0 0 0 19 13c0-1.654-1.346-3-3-3s-3 1.346-3 3Z" />
    </svg>
  )
}
