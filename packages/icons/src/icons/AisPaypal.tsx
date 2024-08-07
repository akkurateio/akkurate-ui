import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisPaypal: FunctionComponent<IProps> = ({
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
      <path d="M10.255 26.893H4.882a.748.748 0 0 1-.739-.863L7.768 3.05A1.246 1.246 0 0 1 8.998 2H17.7c2.998 0 5.341.634 6.638 2.112 1.179 1.341 1.522 2.823 1.181 5.001-.027.167-.055.336-.09.51-1.147 5.892-5.074 7.93-10.088 7.93h-2.555c-.611 0-1.13.445-1.225 1.05l-1.307 8.29ZM26.76 10.07a3.907 3.907 0 0 0-.708-.631c-.015.088-.03.204-.048.296-1.085 5.574-4.672 8.401-10.661 8.401h-2.555a.656.656 0 0 0-.649.559l-1.384 8.782h-.59l-.28 1.768a.653.653 0 0 0 .646.755h4.529c.536 0 .991-.39 1.075-.92.07-.303.887-5.66.952-5.938a1.087 1.087 0 0 1 1.077-.919h.677c4.386 0 7.822-1.783 8.826-6.937.42-2.155.203-3.953-.907-5.216Z" />
    </svg>
  )
}
