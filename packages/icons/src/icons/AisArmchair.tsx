import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisArmchair: FunctionComponent<IProps> = ({
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
        d="M26 28a2 2 0 1 1-4 0H10a2 2 0 1 1-4 0H5a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h2V6.717c0-1.38.711-2.667 1.98-3.206C10.626 2.812 13.15 2 16 2c2.85 0 5.375.812 7.02 1.51C24.288 4.05 25 5.339 25 6.718V10h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1ZM16 17c2.897 0 5.451.354 7 .631V20H9v-2.369A40.786 40.786 0 0 1 16 17Zm7 5H9v4h14v-4Zm2-10v14h2V12h-2Zm-2-5.283c0-.725-.36-1.194-.762-1.365C20.736 4.714 18.488 4 16 4c-2.488 0-4.736.714-6.238 1.352-.403.17-.762.64-.762 1.365v8.884A42.727 42.727 0 0 1 16 15c2.839 0 5.355.322 7 .601V6.717ZM7 12H5v14h2V12Z"
      />
    </svg>
  )
}
