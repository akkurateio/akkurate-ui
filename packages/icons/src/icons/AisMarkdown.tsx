import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisMarkdown: FunctionComponent<IProps> = ({
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
      <path d="M5.286 10.286V21h2.903v-6.145l2.903 3.94 2.903-3.94V21H16.9V10.286h-2.904l-2.903 3.939-2.903-3.94H5.286ZM19.076 15.8l4.355 5.2 4.355-5.2h-2.904v-5.514H21.98V15.8h-2.903Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.478 6C2.078 6 1 7.163 1 8.524v14.238c0 1.36 1.077 2.524 2.478 2.524h25.044c1.4 0 2.478-1.163 2.478-2.524V8.524C31 7.163 29.922 6 28.522 6H3.478Zm-.335 2.524c0-.243.182-.381.335-.381h25.044c.153 0 .335.138.335.381v14.238c0 .243-.182.38-.335.38H3.478c-.153 0-.335-.137-.335-.38V8.524Z"
      />
    </svg>
  )
}
