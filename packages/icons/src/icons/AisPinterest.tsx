import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisPinterest: FunctionComponent<IProps> = ({
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
      <path d="M15.897 1a15 15 0 0 0-5.464 28.927 14.188 14.188 0 0 1 0-4.285l1.768-7.5A5.41 5.41 0 0 1 11.794 16c0-2.078 1.21-3.642 2.71-3.642a1.886 1.886 0 0 1 1.897 2.143c0 1.285-.814 3.214-1.243 4.992a2.141 2.141 0 0 0 2.229 2.71c2.657 0 4.714-2.817 4.714-6.867a5.923 5.923 0 0 0-6.268-6.107 6.492 6.492 0 0 0-6.771 6.514 5.807 5.807 0 0 0 1.071 3.418.472.472 0 0 1 .107.429c-.117.471-.375 1.5-.417 1.703-.043.204-.225.332-.504.204-1.875-.879-3.043-3.61-3.043-5.818 0-4.725 3.44-9.075 9.91-9.075 5.197 0 9.247 3.707 9.247 8.668 0 5.164-3.215 9.321-7.79 9.321a4.029 4.029 0 0 1-3.439-1.714l-.932 3.567a16.663 16.663 0 0 1-1.864 3.933c1.457.43 2.97.64 4.49.62a15 15 0 1 0 0-29.998" />
    </svg>
  )
}
