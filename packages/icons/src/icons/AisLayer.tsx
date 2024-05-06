import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisLayer: FunctionComponent<IProps> = ({
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
      <path d="M27.96 10.792c-.01-.045-.004-.09-.02-.134-.005-.014-.017-.023-.022-.036-.027-.066-.069-.121-.109-.18-.035-.05-.063-.103-.106-.145-.041-.041-.092-.068-.14-.102-.06-.042-.116-.084-.183-.112-.014-.006-.023-.017-.037-.023l-11-4a1.005 1.005 0 0 0-.684 0l-11 4c-.015.005-.024.017-.038.023-.065.027-.12.069-.178.109-.05.034-.102.063-.144.105-.042.042-.07.094-.105.144-.041.059-.083.115-.11.181-.006.014-.017.022-.022.036-.016.044-.011.089-.02.134-.015.069-.031.136-.031.208 0 .072.016.139.031.208.01.045.004.09.02.134.005.014.017.023.022.036.027.065.069.12.109.179.035.051.064.104.107.146.04.04.09.067.137.1.061.043.118.086.187.114.013.006.022.017.036.022l11 4a1.006 1.006 0 0 0 .684 0l11-4c.021-.008.034-.024.054-.033a1.002 1.002 0 0 0 .321-.224.984.984 0 0 0 .141-.194c.02-.035.042-.067.057-.104.007-.016.018-.027.024-.043.016-.044.011-.089.02-.134.015-.069.031-.136.031-.208 0-.072-.016-.139-.031-.208l-.001.001ZM16 13.936 7.926 11 16 8.064 24.074 11 16 13.936Z" />
      <path d="M26.658 15.06 16 18.935 5.342 15.06a.999.999 0 1 0-.683 1.88l11 4a1.007 1.007 0 0 0 .684 0l11-4a1 1 0 0 0-.683-1.88h-.002Z" />
      <path d="M26.658 20.061 16 23.936 5.342 20.061a.999.999 0 1 0-.683 1.879l11 4a1.007 1.007 0 0 0 .684 0l11-4a.999.999 0 1 0-.683-1.879h-.002Z" />
    </svg>
  )
}
