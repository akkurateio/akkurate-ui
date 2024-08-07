import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisBug: FunctionComponent<IProps> = ({
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
      <path d="M26 18h-3v-3.586l2.707-2.707a.999.999 0 1 0-1.414-1.414l-1.533 1.533a3.008 3.008 0 0 0-1.795-1.653c.011-.058.035-.112.035-.173 0-1.528-.704-2.881-1.787-3.799l.494-.494a.999.999 0 1 0-1.414-1.414l-.922.922A4.937 4.937 0 0 0 16 5c-.479 0-.932.089-1.371.215l-.922-.922a.999.999 0 1 0-1.414 1.414l.494.494C11.703 7.119 11 8.472 11 10c0 .062.024.115.035.173a3.002 3.002 0 0 0-1.795 1.653l-1.533-1.533a.999.999 0 1 0-1.414 1.414L9 14.414V18H6a1 1 0 1 0 0 2h3v1c0 .492.052.972.15 1.436l-2.857 2.857a.999.999 0 1 0 1.414 1.414l2.228-2.228A7 7 0 0 0 16 28a7 7 0 0 0 6.065-3.521l2.228 2.228a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-2.857-2.857c.097-.464.15-.944.15-1.436v-1h3a1 1 0 1 0 0-2Zm-7-8h-6c0-1.654 1.346-3 3-3s3 1.346 3 3Zm-3 16c-2.757 0-5-2.243-5-5v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8c0 2.757-2.243 5-5 5Z" />
    </svg>
  )
}
