import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisShield: FunctionComponent<IProps> = ({
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
      <path d="M16 30a.996.996 0 0 1-.483-.125C15.088 29.639 5 23.972 5 15.565V4.13a1 1 0 0 1 .888-.994l10-1.131c.074-.008.15-.008.225 0l10 1.131a1 1 0 0 1 .888.994v11.435c0 8.406-10.087 14.073-10.517 14.31a1 1 0 0 1-.483.125H16ZM7 5.024v10.541c0 6.279 7.064 11.075 9 12.271 1.934-1.198 9-6.006 9-12.271V5.024l-9-1.018-9 1.018Z" />
    </svg>
  )
}
