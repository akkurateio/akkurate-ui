import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisCurrencyYen: FunctionComponent<IProps> = ({
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
      <path d="m11.002 3.273 6.327 13.764-2.319.966-7.34-14.73h3.332Zm4.684 13.764 6.327-13.764h3.333l-7.341 14.73-2.318-.966Zm2.319-2.028V28H15.01V15.008h2.995Zm5.409.676v2.173H9.6v-2.173h13.813Zm0 4.78v2.174H9.6v-2.173h13.813Z" />
    </svg>
  )
}
