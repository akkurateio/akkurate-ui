import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisStar: FunctionComponent<IProps> = ({
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
      <path d="M23.417 29a.995.995 0 0 1-.484-.125L16 25.043l-6.933 3.832a1 1 0 0 1-1.471-1.037l1.335-8.186-5.647-5.788a1.001 1.001 0 0 1 .565-1.687l7.764-1.187 3.481-7.417a1 1 0 0 1 1.81 0l3.481 7.417 7.764 1.187a.999.999 0 0 1 .565 1.687l-5.647 5.788 1.335 8.186A1 1 0 0 1 23.415 29h.002ZM16 22.9c.167 0 .333.042.484.125l5.614 3.104-1.085-6.651a.999.999 0 0 1 .271-.859l4.641-4.757-6.368-.973a.998.998 0 0 1-.754-.563L16 6.354l-2.803 5.972a.997.997 0 0 1-.754.563l-6.368.973 4.641 4.757a1 1 0 0 1 .271.859l-1.085 6.651 5.614-3.104A1 1 0 0 1 16 22.9Z" />
    </svg>
  )
}
