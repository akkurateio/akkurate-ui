import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisFileAgreement: FunctionComponent<IProps> = ({
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
        d="M16 4H7v24h7v2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10.628a2 2 0 0 1 1.465.64l5.373 5.784A2 2 0 0 1 25 9.785V12h-2v-1h-6a1 1 0 0 1-1-1V4Zm2 .4V9h4.27L18 4.4Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 19a5.973 5.973 0 0 1-1 3.318V29a1 1 0 0 1-1.447.894L21 28.118l-3.553 1.776A1 1 0 0 1 16 29v-6.682A6 6 0 1 1 27 19Zm-2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4 6a5.972 5.972 0 0 0 3-.803v3.185l-2.553-1.276a1 1 0 0 0-.894 0L18 27.382v-3.185c.883.51 1.907.803 3 .803Z"
      />
    </svg>
  )
}
