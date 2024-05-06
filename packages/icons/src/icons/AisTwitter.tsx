import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisTwitter: FunctionComponent<IProps> = ({
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
        d="M.938 1.938h9.843l7.002 9.77 8.467-9.77H30L19.48 14.075l11.457 15.986h-9.843l-7.002-9.77-8.467 9.77h-3.75l10.52-12.138L.938 1.938Zm21.6 25.312L6.413 4.75h2.924l16.125 22.5h-2.924Z"
      />
    </svg>
  )
}
