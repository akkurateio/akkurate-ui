import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisFingerPrint: FunctionComponent<IProps> = ({
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
      <path d="M7.024 5.264a.736.736 0 0 0 .5-.16 13.998 13.998 0 0 1 8.5-2.52c3.036-.112 6.035.7 8.6 2.33a.78.78 0 0 0 1.08-.17.77.77 0 0 0-.18-1.07c-3.02-2.17-6.84-2.62-9.5-2.62a15.46 15.46 0 0 0-9.46 2.83.77.77 0 0 0 .46 1.38Z" />
      <path d="M28.864 11.104c-3.03-4.26-7.23-6.34-12.84-6.34a15.54 15.54 0 0 0-12.89 6.342.76.76 0 0 0 .19 1.058.77.77 0 0 0 1.07-.17 14 14 0 0 1 11.63-5.7c6.78 0 9.87 3.25 11.6 5.69a.78.78 0 0 0 .63.33.77.77 0 0 0 .61-1.21Z" />
      <path d="M16.024 8.444c-6.437-.072-11.725 5.064-11.84 11.5a4.27 4.27 0 0 0 4.32 4.591 4.27 4.27 0 0 0 4.52-3.83c.24-2.35 1.14-3.35 3-3.35a2.801 2.801 0 0 1 3 3c0 4.09-2.63 7.53-7 9.21a.75.75 0 0 0-.44 1 .78.78 0 0 0 .72.49c.07.008.14.008.21 0 5-1.91 8-5.89 8-10.63a4.31 4.31 0 0 0-4.52-4.56c-2.67 0-4.2 1.58-4.56 4.69l-.002.025a2.74 2.74 0 0 1-2.998 2.455 2.771 2.771 0 0 1-2.79-3.06v-.024c.111-5.621 4.758-10.088 10.38-9.976 5.76-.011 10.442 4.64 10.47 10.4a17.246 17.246 0 0 1-1.27 5.91l-.003.008a.76.76 0 0 0 .413.992.78.78 0 0 0 1-.41 18.662 18.662 0 0 0 1.39-6.5c-.039-6.6-5.4-11.93-12-11.93v-.001Z" />
      <path d="M16.024 12.194a8.338 8.338 0 0 0-6 2.32 7.732 7.732 0 0 0-2.22 5.54v.01a.76.76 0 0 0 .77.75.77.77 0 0 0 .77-.76 6.17 6.17 0 0 1 1.83-4.46 6.83 6.83 0 0 1 4.94-1.87c6.22 0 6.7 5.09 6.7 6.65a12.63 12.63 0 0 1-3.54 8.68l-.005.005a.76.76 0 0 0 .005 1.075.808.808 0 0 0 .52.2.75.75 0 0 0 .57-.28 14.09 14.09 0 0 0 3.9-9.68c0-3.78-2.16-8.18-8.24-8.18Z" />
      <path d="M16.794 20.434a.78.78 0 0 0-.754-.812.75.75 0 0 0-.786.712 6.37 6.37 0 0 1-2.12 4.53c-1.39 1.16-3.35 1.6-5.84 1.32a.764.764 0 1 0-.17 1.52c.518.059 1.039.089 1.56.09a8.201 8.201 0 0 0 5.43-1.74 7.889 7.889 0 0 0 2.68-5.62Z" />
    </svg>
  )
}
