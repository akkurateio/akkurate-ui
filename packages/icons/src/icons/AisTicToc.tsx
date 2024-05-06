import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisTicToc: FunctionComponent<IProps> = ({
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
      <path d="M16.656 1.025C18.294 1 19.92 1.013 21.544 1c.1 1.913.787 3.862 2.187 5.213 1.4 1.387 3.375 2.025 5.3 2.237v5.038c-1.8-.063-3.612-.438-5.25-1.213-.712-.325-1.375-.738-2.025-1.162-.012 3.65.013 7.3-.025 10.937-.1 1.75-.675 3.488-1.687 4.925-1.638 2.4-4.475 3.962-7.388 4.012-1.787.1-3.575-.387-5.1-1.287-2.525-1.488-4.3-4.212-4.562-7.137A23.175 23.175 0 0 1 2.98 20.7a9.381 9.381 0 0 1 3.225-6.2c2.075-1.8 4.975-2.662 7.688-2.15.025 1.85-.05 3.7-.05 5.55-1.238-.4-2.688-.287-3.775.463a4.341 4.341 0 0 0-1.7 2.187c-.263.637-.188 1.337-.175 2.012.3 2.05 2.275 3.775 4.375 3.588 1.4-.012 2.737-.825 3.462-2.012.238-.413.5-.838.513-1.326.125-2.237.075-4.462.087-6.7.013-5.037-.012-10.062.025-15.087Z" />
    </svg>
  )
}
