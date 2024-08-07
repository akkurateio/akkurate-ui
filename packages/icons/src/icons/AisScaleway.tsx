import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisScaleway: FunctionComponent<IProps> = ({
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
      <path d="M21.372 14.962v6.673a2.065 2.065 0 0 1-1.796 1.972h-4.667a1.668 1.668 0 0 1-1.528-1.424 1.27 1.27 0 0 1 0-.21 1.598 1.598 0 0 1 1.598-1.586h2.03a1.167 1.167 0 0 0 1.167-1.167v-4.223a1.633 1.633 0 0 1 1.377-1.622h.198a1.599 1.599 0 0 1 1.621 1.587Zm-7.536 2.03v-4.189a1.167 1.167 0 0 1 1.166-1.166h2.159a1.598 1.598 0 0 0 1.598-1.599 1.172 1.172 0 0 0 0-.198 1.692 1.692 0 0 0-1.645-1.4h-4.62a2.112 2.112 0 0 0-1.843 1.937v6.65a1.598 1.598 0 0 0 1.598 1.598h.245a1.633 1.633 0 0 0 1.342-1.633Zm14-5.005v13.346A5.285 5.285 0 0 1 22.994 30h-8.843a9.998 9.998 0 0 1-9.987-9.998V7.297A5.297 5.297 0 0 1 9.461 2h8.376a9.987 9.987 0 0 1 9.987 9.987h.012Zm-3.197 0a6.802 6.802 0 0 0-6.79-6.79H9.461a2.088 2.088 0 0 0-2.1 2.1v12.705a6.802 6.802 0 0 0 6.79 6.766h8.68a2.088 2.088 0 0 0 1.797-1.726l.011-13.055Z" />
    </svg>
  )
}
