import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisFilterMagic: FunctionComponent<IProps> = ({
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
      <path d="M17 7c0-.695.101-1.366.29-2H5a1 1 0 0 0-.816 1.578l7.69 10.852V26a1 1 0 0 0 1 1h.002a1 1 0 0 0 .39-.079l5.25-2.222a1 1 0 0 0 .61-.921V17.43l2.68-3.78a6.974 6.974 0 0 1-1.81-.907l-2.686 3.79a.992.992 0 0 0-.185.578v6.004l-3.25 1.375v-7.379a.999.999 0 0 0-.185-.578L6.935 7H17Z" />
      <path d="M23.511 3.277c.113-.527.865-.527.978 0l.68 3.17a.5.5 0 0 0 .384.383l3.17.681c.527.113.527.865 0 .978l-3.17.68a.5.5 0 0 0-.383.384l-.681 3.17c-.113.527-.865.527-.978 0l-.68-3.17a.5.5 0 0 0-.384-.383l-3.17-.681c-.527-.113-.527-.865 0-.978l3.17-.68a.5.5 0 0 0 .383-.384l.681-3.17Z" />
    </svg>
  )
}
