import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisIndustry: FunctionComponent<IProps> = ({
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
      <path d="M27.472 9.118a1 1 0 0 0-1.026.05l-4.445 2.964V10a1 1 0 0 0-1.554-.832l-4.445 2.964V10a1 1 0 0 0-1.554-.832l-4.445 2.964V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V10a1 1 0 0 0-.528-.882h-.003ZM10 26v-6h2v6h-2Zm16 0H14v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H6V6h2v8a1 1 0 0 0 1.554.832l4.445-2.964V14a1 1 0 0 0 1.554.832l4.445-2.964V14a1 1 0 0 0 1.554.832l4.445-2.964V26H26Z" />
    </svg>
  )
}
