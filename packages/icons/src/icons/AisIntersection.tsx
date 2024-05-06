import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisIntersection: FunctionComponent<IProps> = ({
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
        d="M11.6 7.02a8.96 8.96 0 0 1 2.402.493A11.062 11.062 0 0 0 12.4 9.14 10.954 10.954 0 0 0 10 16c0 2.595.898 4.98 2.4 6.86a11.059 11.059 0 0 0 1.602 1.627A8.96 8.96 0 0 1 11 25a9 9 0 1 1 .6-17.98ZM10 22.929a7.002 7.002 0 0 1 0-13.858A12.943 12.943 0 0 0 8 16c0 2.547.733 4.924 1.999 6.929Z"
      />
      <path d="M16 23.485A8.991 8.991 0 0 0 20 16c0-3.12-1.588-5.87-4-7.484A8.991 8.991 0 0 0 12 16c0 3.12 1.588 5.87 4 7.485Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 7.513A8.96 8.96 0 0 1 21.002 7 9 9 0 1 1 18 24.487a11.069 11.069 0 0 0 1.601-1.627 10.953 10.953 0 0 0 2.4-6.86c0-2.595-.897-4.98-2.4-6.86A11.072 11.072 0 0 0 18 7.513ZM28.002 16a7.002 7.002 0 0 1-6 6.929 12.942 12.942 0 0 0 2-6.929c0-2.547-.734-4.924-2-6.929a7.002 7.002 0 0 1 6 6.929Z"
      />
    </svg>
  )
}
