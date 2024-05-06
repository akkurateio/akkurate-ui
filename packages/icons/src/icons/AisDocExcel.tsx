import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisDocExcel: FunctionComponent<IProps> = ({
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
      <path d="M29.75 2.875c.342 0 .633.125.875.375.25.242.375.533.375.875v23.75c0 .342-.125.633-.375.875-.242.25-.533.375-.875.375h-20c-.342 0-.633-.125-.875-.375a1.173 1.173 0 0 1-.375-.875V23.5H2.25c-.342 0-.633-.125-.875-.375A1.173 1.173 0 0 1 1 22.25V9.75c0-.342.125-.633.375-.875.233-.25.525-.375.875-.375H8.5V4.125c0-.342.125-.633.375-.875.242-.25.533-.375.875-.375h20ZM8.5 17.6l1.775 3.325h2.675l-2.975-4.838 2.925-4.75h-2.575l-1.625 3-.063.1-.05.113-.8-1.6-.824-1.612H4.237l2.838 4.775-3.1 4.812h2.7L8.5 17.6Zm10.313 9.65V23.5h-8.438v3.75h8.438Zm0-5.625v-4.688H16v4.688h2.813Zm0-6.563v-4.687H16v4.688h2.813Zm0-6.562V4.75h-8.438V8.5h8.438Zm10.312 18.75V23.5h-8.438v3.75h8.438Zm0-5.625v-4.688h-8.438v4.688h8.438Zm0-6.563v-4.687h-8.438v4.688h8.438Zm0-6.562V4.75h-8.438V8.5h8.438Z" />
    </svg>
  )
}
