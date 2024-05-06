import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisFolderClosed: FunctionComponent<IProps> = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 27a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h21a4 4 0 0 1 4 4v15a3 3 0 0 1-3 3H5ZM15.404 7 17.5 9H27c.35 0 .687.06 1 .17V9a2 2 0 0 0-2-2H15.404Zm-2.897 0H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h21a2 2 0 0 0 2-1.996V12a1 1 0 0 0-1-1H16.699l-4.192-4Z"
      />
    </svg>
  )
}
