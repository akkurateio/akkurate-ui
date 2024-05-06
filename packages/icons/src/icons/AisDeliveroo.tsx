import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisDeliveroo: FunctionComponent<IProps> = ({
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
      <path d="m21.497 2-1.314 12.348-2.245-10.411L10.9 5.414l2.244 10.409L3 17.948l1.79 8.315L22.63 30l4.081-9.035 1.942-18.223L21.498 2Zm-6.382 15.878a.882.882 0 0 1 .375.077c.243.109.654.339.735.691.12.506.005.932-.364 1.265v.002c-.367.331-.854.301-1.37.132-.514-.17-.742-.784-.548-1.527.145-.552.829-.634 1.172-.64Zm4.832.64c.521-.014.97.217 1.225.633.253.417.125.875-.142 1.334h-.003c-.267.457-.968.519-1.659.186-.465-.225-.463-.798-.412-1.146.027-.191.105-.371.226-.522.165-.206.444-.476.765-.485Z" />
    </svg>
  )
}
