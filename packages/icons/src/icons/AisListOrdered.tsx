import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisListOrdered: FunctionComponent<IProps> = ({
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
      <path d="M8.504 13V4.273H6.77L4.61 5.64v1.636l1.998-1.253h.051V13h1.845ZM4.707 25.67V27h6.222v-1.509H7.264v-.06l1.274-1.248c.6-.545 1.064-1.012 1.394-1.402.33-.392.558-.748.686-1.07.13-.32.196-.646.196-.975 0-.503-.13-.95-.388-1.338a2.59 2.59 0 0 0-1.087-.912c-.463-.222-1.007-.333-1.632-.333-.608 0-1.144.116-1.61.346a2.59 2.59 0 0 0-1.087.975c-.259.42-.388.917-.388 1.488h1.752c0-.279.054-.519.162-.72.107-.202.26-.357.46-.465.199-.108.432-.162.699-.162.255 0 .484.051.686.154.201.099.36.242.477.43.116.184.175.405.175.66 0 .23-.047.445-.141.644a2.62 2.62 0 0 1-.413.6c-.18.205-.4.435-.665.691l-3.107 2.877ZM30 22H16v2h14v-2ZM30 8H16v2h14V8Z" />
    </svg>
  )
}
