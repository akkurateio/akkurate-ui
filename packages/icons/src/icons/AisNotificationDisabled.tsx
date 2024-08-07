import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisNotificationDisabled: FunctionComponent<IProps> = ({
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
      <path d="M16 5c3.309 0 6 2.691 6 6v6.338c0 .195.023.387.039.58l3.695 3.695-1.022-1.703a4.995 4.995 0 0 1-.713-2.572V11c0-4.411-3.589-8-8-8a7.982 7.982 0 0 0-6.073 2.806l1.417 1.417A5.988 5.988 0 0 1 15.999 5H16ZM27.707 26.293l-22-22a.999.999 0 1 0-1.414 1.414l3.852 3.852A7.866 7.866 0 0 0 8 11v6.338c0 .905-.246 1.795-.713 2.572l-2.145 3.575A1.001 1.001 0 0 0 5.999 25h6.007a4 4 0 0 0 3.993 3.933A4 4 0 0 0 19.992 25h3.593l2.707 2.707a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414h.001ZM16 26.933A2 2 0 0 1 14.007 25h3.986A2 2 0 0 1 16 26.933ZM7.766 23l1.236-2.061A7.002 7.002 0 0 0 10 17.337v-5.924l11.586 11.586H7.766V23Z" />
    </svg>
  )
}
