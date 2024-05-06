import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisApple: FunctionComponent<IProps> = ({
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
      <path d="M27.645 11.228c-.174.135-3.246 1.866-3.246 5.716 0 4.452 3.91 6.027 4.026 6.066-.018.096-.62 2.157-2.06 4.258-1.285 1.848-2.626 3.693-4.666 3.693-2.04 0-2.566-1.185-4.92-1.185-2.296 0-3.112 1.224-4.978 1.224-1.866 0-3.169-1.71-4.666-3.81C5.401 24.723 4 20.892 4 17.256c0-5.833 3.792-8.926 7.525-8.926 1.983 0 3.636 1.302 4.881 1.302 1.185 0 3.034-1.38 5.29-1.38.855 0 3.927.078 5.95 2.976Zm-7.02-5.446c.933-1.107 1.593-2.643 1.593-4.179A2.88 2.88 0 0 0 22.16 1c-1.518.057-3.325 1.011-4.414 2.274-.855.972-1.653 2.508-1.653 4.066 0 .234.04.468.057.543.096.018.252.039.408.039 1.362 0 3.076-.912 4.066-2.14Z" />
    </svg>
  )
}
