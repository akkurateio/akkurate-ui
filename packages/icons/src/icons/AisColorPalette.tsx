import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisColorPalette: FunctionComponent<IProps> = ({
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
      <path d="M16 3C9.097 3 3.041 8.607 3.041 15c0 .604.22 1.125.635 1.509 1.008.932 2.853.788 4.994.617a38.52 38.52 0 0 1 1.848-.117c.021.492-.051 1.352-.106 2.02-.221 2.64-.521 6.255 1.43 8.376.975 1.059 2.374 1.596 4.159 1.596 7.168 0 13-5.832 13-13s-5.832-13-13-13L16 3Zm0 24c-1.22 0-2.099-.311-2.688-.95-1.357-1.475-1.098-4.585-.908-6.855.158-1.907.255-3.058-.381-3.749A1.376 1.376 0 0 0 11 15.001c-.807 0-1.661.067-2.487.133-1.097.085-3.14.248-3.472-.133 0-5.327 5.121-10 10.959-10 6.065 0 11 4.935 11 11S22.065 27 16 27Z" />
      <path d="M16 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM23 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM21 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM11 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM21 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 25a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  )
}
