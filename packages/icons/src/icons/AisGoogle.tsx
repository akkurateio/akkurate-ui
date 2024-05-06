import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGoogle: FunctionComponent<IProps> = ({
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
      <path d="M21.75 9.188C20.187 7.7 18.212 6.938 16 6.938c-3.912 0-7.225 2.637-8.412 6.2-.3.9-.476 1.862-.476 2.862s.163 1.962.476 2.863c1.187 3.562 4.5 6.2 8.412 6.2 2.025 0 3.738-.55 5.087-1.45 1.576-1.063 2.638-2.625 3-4.476H16V13.5h14.125c.15.912.238 1.85.238 2.837 0 4.563-1.625 8.413-4.45 11.026C23.437 29.65 20.05 31 16 31c-5.863 0-10.925-3.375-13.387-8.275a14.826 14.826 0 0 1 0-13.45C5.075 4.375 10.136 1 16 1c4.05 0 7.438 1.487 10.025 3.912L21.75 9.188Z" />
    </svg>
  )
}
