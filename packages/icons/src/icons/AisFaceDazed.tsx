import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisFaceDazed: FunctionComponent<IProps> = ({
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
      <path d="M11 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM23 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 19a1 1 0 1 0 0 2h.009c.05-.002.12-.005.492.555l.045.067c.293.445.906 1.378 2.12 1.378 1.216 0 1.829-.933 2.121-1.378l.045-.067c.373-.56.442-.557.493-.555h.017c.05-.002.12-.005.493.555l.044.067C14.172 22.067 14.785 23 16 23c1.215 0 1.828-.933 2.12-1.378l.045-.067c.373-.56.442-.557.493-.555h.017c.051-.002.12-.005.493.555l.045.067c.292.445.905 1.378 2.12 1.378s1.828-.933 2.121-1.378l.045-.067c.373-.56.442-.557.492-.555H24a1 1 0 1 0 0-2c-1.215 0-1.828.933-2.12 1.378l-.045.067c-.373.56-.442.557-.493.555h-.017c-.051.002-.12.005-.493-.555l-.045-.067c-.292-.445-.905-1.378-2.12-1.378s-1.828.933-2.121 1.378l-.045.067c-.373.56-.442.557-.492.555h-.017c-.052.002-.12.005-.493-.555l-.045-.067c-.293-.445-.906-1.378-2.12-1.378-1.216 0-1.829.933-2.121 1.378l-.045.067c-.373.56-.442.557-.493.555h-.017c-.05.002-.12.005-.493-.555a10.43 10.43 0 0 1-.044-.067C9.828 19.933 9.215 19 8 19Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Zm0-2c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
      />
    </svg>
  )
}
