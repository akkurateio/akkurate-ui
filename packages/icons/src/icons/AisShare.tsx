import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisShare: FunctionComponent<IProps> = ({
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
      <path d="M23 20a3.97 3.97 0 0 0-2.657 1.032l-7.373-4.739c.007-.098.03-.192.03-.293 0-.101-.022-.194-.03-.293l7.373-4.739A3.97 3.97 0 0 0 23 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4c0 .458.093.892.236 1.302l-6.928 4.453A3.996 3.996 0 0 0 5 15.999c0 2.206 1.794 4 4 4a3.995 3.995 0 0 0 3.308-1.756l6.928 4.453c-.143.41-.236.844-.236 1.302 0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4V20Zm0-14c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2ZM9 18c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2Zm14 8c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2Z" />
    </svg>
  )
}
