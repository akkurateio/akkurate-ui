import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisMoon: FunctionComponent<IProps> = ({
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
      <path d="M16 28c-5.308 0-10.045-3.562-11.52-8.662a.999.999 0 0 1 1.238-1.239c.92.267 1.856.401 2.782.401 5.514 0 10-4.486 10-10 0-.927-.135-1.862-.401-2.781a.999.999 0 0 1 1.238-1.239C24.438 5.956 28 10.693 28 16.001c0 6.617-5.383 12-12 12V28Zm-8.969-7.593C8.69 23.769 12.166 26 16 26c5.514 0 10-4.486 10-10 0-3.833-2.23-7.31-5.593-8.969.062.489.093.979.093 1.469 0 6.617-5.383 12-12 12-.489 0-.979-.031-1.469-.093Z" />
    </svg>
  )
}
