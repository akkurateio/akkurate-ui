import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisMagicStick: FunctionComponent<IProps> = ({
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
        d="M3 6a4 4 0 0 1 4-4h18a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4h-7.03l-2.02 2.02a1 1 0 0 1-1.414 0L12.515 28H7a4 4 0 0 1-4-4V6Zm10.011.277c.113-.527.865-.527.978 0l.946 4.404a.5.5 0 0 0 .384.384l4.405.946c.526.113.526.865 0 .978l-4.405.946a.5.5 0 0 0-.384.384l-.946 4.405c-.113.526-.865.526-.978 0l-.946-4.405a.5.5 0 0 0-.384-.384l-4.404-.946c-.527-.113-.527-.865 0-.978l4.404-.946a.5.5 0 0 0 .384-.384l.946-4.404Zm8 12c.113-.527.865-.527.978 0l.239 1.111a.5.5 0 0 0 .383.384l1.113.24c.526.112.526.864 0 .977l-1.113.239a.5.5 0 0 0-.383.383l-.24 1.113c-.112.526-.864.526-.977 0l-.239-1.113a.5.5 0 0 0-.383-.383l-1.113-.24c-.526-.112-.526-.864 0-.977l1.113-.239a.5.5 0 0 0 .383-.383l.24-1.113Z"
      />
    </svg>
  )
}
