import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGift: FunctionComponent<IProps> = ({
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
        d="M9.7 12H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2h-3.57c.413-.237.752-.471.977-.697a3.914 3.914 0 0 0-5.536-5.535c-.778.778-1.466 3.103-1.955 5.199-.562-2.582-1.43-5.807-2.428-6.804a4.472 4.472 0 1 0-6.325 6.325c.485.485 1.427 1.008 2.536 1.512ZM8.576 5.577a2.472 2.472 0 0 1 3.496 0v-.002c.003.005.03.035.073.1.053.08.118.19.193.339.153.299.316.691.485 1.167.338.95.65 2.107.921 3.254.089.376.172.747.249 1.104a62.032 62.032 0 0 1-.779-.278c-1.04-.38-2.1-.801-2.989-1.22-.958-.454-1.48-.799-1.65-.968a2.473 2.473 0 0 1 0-3.496ZM26 14h-8v6h8v-6Zm0 8h-8v6h8v-6Zm-12-2v-6H6v6h8Zm-8 2h8v6H6v-6ZM19.29 7.178l-.002.001a1.914 1.914 0 0 1 2.705 2.71c-.115.115-.537.401-1.374.797a31.817 31.817 0 0 1-2.85 1.152c.038-.173.078-.347.12-.523.236-1 .507-2.002.798-2.822.146-.41.285-.743.412-.992.104-.206.172-.297.188-.318l.003-.005Z"
      />
    </svg>
  )
}
