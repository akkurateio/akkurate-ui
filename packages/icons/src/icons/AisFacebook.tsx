import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisFacebook: FunctionComponent<IProps> = ({
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
      <path d="M29.337 1H2.663A1.675 1.675 0 0 0 1 2.663v26.674A1.675 1.675 0 0 0 2.663 31h14.362V19.4h-3.9v-4.537h3.9v-3.338c0-3.875 2.363-5.988 5.838-5.988 1.162 0 2.325 0 3.487.176V9.75h-2.388c-1.887 0-2.25.9-2.25 2.213v2.887h4.5l-.587 4.537h-3.913V31h7.625A1.675 1.675 0 0 0 31 29.337V2.663A1.675 1.675 0 0 0 29.337 1Z" />
    </svg>
  )
}
