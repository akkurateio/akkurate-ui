import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisShieldRenforced: FunctionComponent<IProps> = ({
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
        d="M16 30a.996.996 0 0 1-.483-.125c-.418-.23-10.016-5.622-10.498-13.681-.04-.202-.019-.424-.019-.629V4.13a1 1 0 0 1 .888-.994l10-1.131c.074-.008.15-.008.225 0l10 1.131a1 1 0 0 1 .888.994v11.435c0 8.406-10.087 14.073-10.517 14.31-.15.083-.318.125-.484.125ZM8.097 19.89c-.507-1.005-.873-2.078-1.023-3.207L25 10.41v2.907L8.097 19.89Zm1.05 1.737L25 15.462v.103c0 6.265-7.066 11.073-9 12.271-1.245-.769-4.61-3.026-6.853-6.209ZM25 8.291l-18 6.3V5.024l9-1.018 9 1.018v3.267Z"
      />
    </svg>
  )
}
