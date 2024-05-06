import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisAndroid: FunctionComponent<IProps> = ({
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
      <path d="M22.14 20.203a1.112 1.112 0 0 1-1.112-1.11 1.11 1.11 0 0 1 1.897-.784c.208.208.325.49.326.784 0 .614-.5 1.11-1.112 1.11Zm-12.276 0a1.112 1.112 0 0 1-1.112-1.11 1.11 1.11 0 1 1 1.112 1.11Zm12.673-6.676 2.22-3.836a.462.462 0 0 0-.801-.46l-2.247 3.887A13.72 13.72 0 0 0 16 11.898c-2.06 0-3.989.436-5.708 1.22L8.045 9.23a.464.464 0 0 0-.846.11.462.462 0 0 0 .045.35l2.22 3.837C5.651 15.597 3.047 19.45 2.667 24h26.666c-.38-4.553-2.984-8.406-6.796-10.473Z" />
    </svg>
  )
}
