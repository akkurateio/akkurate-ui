import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisSend: FunctionComponent<IProps> = ({
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
      <path d="m27.447 16.105-22-11A1.003 1.003 0 0 0 4.4 5.2a.998.998 0 0 0-.384.979l1.966 10.812-1.963 9.812a1 1 0 0 0 1.394 1.106l22-10a.999.999 0 0 0 .033-1.805l.001.001ZM6.363 25.282 7.819 18h6.18a1 1 0 1 0 0-2H7.833L6.341 7.789l18.336 9.168-18.314 8.325Z" />
    </svg>
  )
}
