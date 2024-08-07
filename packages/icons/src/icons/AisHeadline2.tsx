import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisHeadline2: FunctionComponent<IProps> = ({
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
      <path d="M3 5a1 1 0 0 0-1 1v20a1 1 0 1 0 2 0v-9h10v9a1 1 0 1 0 2 0V6a1 1 0 1 0-2 0v9H4V6a1 1 0 0 0-1-1ZM19.766 26a1 1 0 0 0 1 1H28.4a.941.941 0 0 0 0-1.882h-5.531a.076.076 0 0 1-.055-.129l2.87-3.003c.885-.9 1.576-1.665 2.073-2.294.498-.635.846-1.21 1.044-1.726a4.28 4.28 0 0 0 .306-1.584c0-.781-.197-1.482-.59-2.102a4.105 4.105 0 0 0-1.64-1.477c-.696-.365-1.501-.547-2.415-.547-.904 0-1.712.184-2.422.554a4.148 4.148 0 0 0-1.676 1.54 4.033 4.033 0 0 0-.516 1.33c-.109.54.353.993.905.993h.095c.553 0 .974-.46 1.15-.984a2.44 2.44 0 0 1 .163-.38c.208-.388.506-.688.895-.901.388-.213.843-.32 1.363-.32.493 0 .936.097 1.329.291.392.19.703.462.93.817.227.35.34.767.34 1.25 0 .426-.084.829-.255 1.207-.17.38-.428.78-.774 1.2-.341.417-.774.903-1.3 1.457l-4.641 4.809a1 1 0 0 0-.28.694V26Z" />
    </svg>
  )
}
