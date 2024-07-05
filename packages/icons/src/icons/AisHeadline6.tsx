import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisHeadline6: FunctionComponent<IProps> = ({
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
      <path d="M3 5a1 1 0 0 0-1 1v20a1 1 0 1 0 2 0v-9h10v9a1 1 0 1 0 2 0V6a1 1 0 1 0-2 0v9H4V6a1 1 0 0 0-1-1Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.702 26.844a5.87 5.87 0 0 0 1.918.355c1.013.01 1.898-.204 2.656-.64a4.635 4.635 0 0 0 1.762-1.79c.42-.752.632-1.592.632-2.52 0-.928-.204-1.752-.611-2.472a4.502 4.502 0 0 0-1.64-1.69 4.336 4.336 0 0 0-2.288-.618c-.506 0-.99.08-1.449.241a4.127 4.127 0 0 0-1.235.675c-.355.281-.656.62-.904 1.018a.068.068 0 0 1-.126-.036c.013-1.62.311-2.887.895-3.802.596-.928 1.427-1.392 2.492-1.392.701 0 1.27.192 1.705.576.244.215.443.465.597.75.218.406.602.734 1.063.734h.22c.611 0 1.089-.55.862-1.118a4.576 4.576 0 0 0-.505-.935 4.34 4.34 0 0 0-1.633-1.413c-.673-.34-1.442-.511-2.308-.511-.843 0-1.603.177-2.28.532-.677.355-1.255.874-1.733 1.556-.479.677-.845 1.508-1.101 2.493-.251.985-.377 2.111-.377 3.38 0 1.34.152 2.458.455 3.353.308.895.717 1.607 1.229 2.137.511.53 1.08.91 1.704 1.137Zm3.41-1.904c-.441.275-.94.412-1.5.412-.558 0-1.06-.14-1.505-.419a3.086 3.086 0 0 1-1.42-2.635c0-.407.075-.793.227-1.157.156-.37.37-.696.64-.98a2.836 2.836 0 0 1 2.11-.91c.552 0 1.045.135 1.476.405.435.27.776.635 1.023 1.094.25.46.376.968.376 1.527a3.17 3.17 0 0 1-.384 1.555 2.972 2.972 0 0 1-1.044 1.108Z"
      />
    </svg>
  )
}