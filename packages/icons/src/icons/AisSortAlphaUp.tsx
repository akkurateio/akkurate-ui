import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisSortAlphaUp: FunctionComponent<IProps> = ({
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
        d="M22.262 11h1.812l.594-1.824h2.888L28.148 11h1.813l-2.758-8h-2.18l-2.761 8Zm4.866-3.145-.983-3.027h-.063l-.985 3.027h2.03Z"
      />
      <path d="M22.633 28v-.992l2.937-3.637v-.043h-2.836V22h4.84v1.082l-2.758 3.547v.043h2.86V28h-5.043ZM2 7a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM8 13a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM12 19a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1ZM16 25a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z" />
    </svg>
  )
}
