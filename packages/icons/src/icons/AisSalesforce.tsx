import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisSalesforce: FunctionComponent<IProps> = ({
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
      <path d="M13.674 8.117a4.894 4.894 0 0 1 3.552-1.523c1.82 0 3.447 1.05 4.305 2.572.735-.35 1.575-.525 2.45-.525 3.325 0 6.019 2.73 6.019 6.09s-2.695 6.09-6.039 6.09c-.402 0-.805-.051-1.19-.121a4.375 4.375 0 0 1-3.85 2.275c-.7 0-1.347-.175-1.925-.438A5.032 5.032 0 0 1 12.36 25.6a5.019 5.019 0 0 1-4.725-3.29c-.315.072-.63.089-.962.089C4.1 22.399 2 20.299 2 17.674c0-1.75.946-3.273 2.345-4.095a5.278 5.278 0 0 1-.455-2.154A5.43 5.43 0 0 1 9.315 6c1.785 0 3.325.822 4.34 2.1" />
    </svg>
  )
}
