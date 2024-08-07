import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisUploadCloud: FunctionComponent<IProps> = ({
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
      <path d="M22.62 8.005C21.725 4.522 18.554 2 14.878 2c-4.411 0-8 3.589-8 8v.083a6.01 6.01 0 0 0-5 5.917c0 3.309 2.691 6 6 6H12a1 1 0 1 0 0-2H7.878c-2.206 0-4-1.794-4-4 0-2.19 1.77-3.976 3.955-4a.999.999 0 0 0 1.115-1.136A5.999 5.999 0 0 1 8.877 10c0-3.309 2.691-6 6-6a6.006 6.006 0 0 1 5.944 5.228 1.004 1.004 0 0 0 1.167.857c.318-.057.609-.084.889-.084 2.757 0 5 2.243 5 5s-2.243 5-5 5h-2.878a1 1 0 1 0 0 2h2.878c3.86 0 7-3.141 7-7 0-3.945-3.267-7.122-7.258-6.995l.001-.001Z" />
      <path d="M19.293 17.707a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-3.999-3.999a1.001 1.001 0 0 0-1.416 0l-3.999 3.999a.999.999 0 1 0 1.414 1.414L15 15.414V29a1 1 0 1 0 2 0V15.414l2.293 2.293Z" />
    </svg>
  )
}
