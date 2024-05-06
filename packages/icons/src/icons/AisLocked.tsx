import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisLocked: FunctionComponent<IProps> = ({
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
      <path d="M23.532 12H22v-2c0-3.309-2.691-6-6-6s-6 2.691-6 6v2H8.468A2.471 2.471 0 0 0 6 14.468v11.064A2.471 2.471 0 0 0 8.468 28h15.064A2.471 2.471 0 0 0 26 25.532V14.468A2.47 2.47 0 0 0 23.532 12ZM12 10c0-2.206 1.794-4 4-4s4 1.794 4 4v2h-8v-2Zm12 15.532c0 .258-.21.468-.468.468H8.468A.469.469 0 0 1 8 25.532V14.468c0-.258.21-.468.468-.468h15.064c.258 0 .468.21.468.468v11.064Z" />
    </svg>
  )
}
