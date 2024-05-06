import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGitlab: FunctionComponent<IProps> = ({
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
      <path d="m29.535 13.674-.04-.1-3.81-9.947a.993.993 0 0 0-.986-.624 1.021 1.021 0 0 0-.573.215 1.02 1.02 0 0 0-.339.513l-2.573 7.873h-10.42L8.221 3.73a1 1 0 0 0-.339-.515 1.02 1.02 0 0 0-1.166-.063 1.002 1.002 0 0 0-.392.473l-3.819 9.942-.037.1a7.077 7.077 0 0 0 2.347 8.18l.013.01.035.025 5.806 4.347 2.872 2.174 1.75 1.321a1.176 1.176 0 0 0 1.423 0l1.75-1.32 2.871-2.175 5.841-4.374.015-.011a7.08 7.08 0 0 0 2.344-8.17Z" />
    </svg>
  )
}
