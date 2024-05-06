import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisLightningFilled: FunctionComponent<IProps> = ({
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
      <path d="M20.896 2.3 6.339 13.082a1 1 0 0 0 .166 1.706l7.663 3.643-4.57 10.051c-.427.94.677 1.832 1.506 1.218l14.557-10.783a1 1 0 0 0-.166-1.707l-7.663-3.642 4.57-10.052c.427-.94-.677-1.832-1.506-1.218Z" />
    </svg>
  )
}
