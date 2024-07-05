import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisGlobe: FunctionComponent<IProps> = ({
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
        d="M30 16c0-7.732-6.268-14-14-14S2 8.268 2 16s6.268 14 14 14 14-6.268 14-14ZM16.93 27.476c-.466.46-.778.524-.93.524-.152 0-.464-.063-.93-.524-.476-.468-.995-1.246-1.474-2.364-.868-2.025-1.475-4.866-1.58-8.112h7.968c-.105 3.246-.712 6.087-1.58 8.112-.479 1.118-.998 1.896-1.473 2.364ZM19.985 15h-7.968c.105-3.246.712-6.087 1.58-8.112.479-1.118.998-1.896 1.473-2.364.467-.46.779-.524.931-.524.152 0 .464.063.93.524.476.468.995 1.246 1.474 2.364.868 2.025 1.475 4.866 1.58 8.112Zm2 2c-.13 4.353-1.115 8.156-2.565 10.506 4.655-1.381 8.128-5.51 8.54-10.506h-5.974Zm5.975-2h-5.974c-.132-4.353-1.116-8.156-2.566-10.506 4.655 1.381 8.128 5.51 8.54 10.506Zm-17.944 0c.132-4.353 1.116-8.156 2.566-10.506C7.926 5.875 4.453 10.004 4.04 15h5.974Zm-5.974 2c.412 4.996 3.885 9.125 8.54 10.506-1.45-2.35-2.434-6.153-2.566-10.506H4.041Z"
      />
    </svg>
  )
}