import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisLocation: FunctionComponent<IProps> = ({
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
      <path d="M16 10.515A3.488 3.488 0 0 0 12.515 14 3.488 3.488 0 0 0 16 17.485 3.488 3.488 0 0 0 19.485 14 3.488 3.488 0 0 0 16 10.515Zm0 4.971a1.487 1.487 0 0 1-1.485-1.485c0-.818.666-1.485 1.485-1.485.819 0 1.485.667 1.485 1.485 0 .818-.666 1.485-1.485 1.485Z" />
      <path d="M23.776 6.203c-4.287-4.263-11.266-4.263-15.553 0a10.836 10.836 0 0 0-3.224 7.738 10.84 10.84 0 0 0 3.224 7.739l7.071 7.029a.997.997 0 0 0 1.41 0l7.071-7.029a10.84 10.84 0 0 0 3.224-7.739c0-2.924-1.145-5.671-3.224-7.738h.001Zm-1.41 14.059L16 26.59l-6.366-6.328A8.859 8.859 0 0 1 7 13.941c0-2.387.936-4.632 2.634-6.32A9.002 9.002 0 0 1 16 5.004c2.305 0 4.611.873 6.366 2.617A8.854 8.854 0 0 1 25 13.941a8.86 8.86 0 0 1-2.634 6.321Z" />
    </svg>
  )
}
