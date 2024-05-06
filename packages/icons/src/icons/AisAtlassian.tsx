import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisAtlassian: FunctionComponent<IProps> = ({
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
      <path d="M16.63 3.31c.3.6 12.42 24.84 12.54 25.09l.02.01c.04.08.07.16.07.25 0 .32-.26.58-.58.58h-9.1c-.23 0-.42-.12-.52-.32l-4.38-8.78c-2.67-5.32-2.3-11.61.99-16.81.12-.19.3-.31.52-.32h.01c.18.01.34.13.43.3ZM9.99 15.02c.2-.02.41.06.55.22 3.36 3.58 4.54 9.71 2.64 13.66-.08.2-.28.32-.5.32h-9.1c-.09 0-.17-.02-.26-.06a.558.558 0 0 1-.26-.76l6.53-13.06c.07-.16.23-.29.4-.32Z" />
    </svg>
  )
}
