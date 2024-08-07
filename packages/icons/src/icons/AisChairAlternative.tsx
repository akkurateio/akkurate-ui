import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisChairAlternative: FunctionComponent<IProps> = ({
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
      <path d="M23.631 6.305c.241 1.107.18 2.274-.28 3.31-1.726 3.874-4.004 6.052-6.351 6.533v1.834c2.097-.076 4.103-.39 5.652-.92a.994.994 0 0 1 .624-.023.996.996 0 0 1 .612.502 1 1 0 0 1-.341 1.296c-1.865 1.28-4.193 1.977-6.547 2.13V24h5a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2h5v-3.032c-2.354-.154-4.682-.85-6.547-2.13a.994.994 0 0 1-.4-.515.996.996 0 0 1 .243-1.034.996.996 0 0 1 1.052-.227c1.55.53 3.554.844 5.652.92v-1.834c-2.347-.48-4.625-2.659-6.35-6.534-.461-1.035-.522-2.202-.282-3.309l.424-1.947c.137-.63.44-1.221 1.031-1.475C10.828 2.45 12.757 2 16 2c3.243 0 5.172.45 6.177.883.592.254.894.846 1.031 1.475l.424 1.947ZM10 30a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 29a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM22 30a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  )
}
