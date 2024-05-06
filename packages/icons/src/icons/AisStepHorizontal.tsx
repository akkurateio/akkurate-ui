import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisStepHorizontal: FunctionComponent<IProps> = ({
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
        d="M21.918 16.997a6.002 6.002 0 0 1-11.836 0A1.022 1.022 0 0 1 10 17H3a1 1 0 1 1 0-2h7c.028 0 .055.001.082.003a6.002 6.002 0 0 1 11.836 0c.027-.002.054-.003.082-.003h7a1 1 0 1 1 0 2h-7c-.028 0-.055-.001-.082-.003ZM16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
    </svg>
  )
}
