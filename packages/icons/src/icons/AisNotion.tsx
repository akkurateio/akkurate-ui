import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisNotion: FunctionComponent<IProps> = ({
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
      <path d="M6.962 6.26c.933.757 1.283.7 3.035.582l16.52-.991c.35 0 .058-.35-.058-.408L23.714 3.46c-.525-.408-1.226-.875-2.569-.76L5.151 3.869c-.582.058-.7.35-.467.583L6.962 6.26Zm.992 3.85v17.38c0 .933.466 1.283 1.517 1.225l18.154-1.05c1.051-.058 1.169-.7 1.169-1.46V8.943c0-.757-.292-1.166-.935-1.109L8.887 8.943c-.7.058-.933.41-.933 1.167Zm17.92.93c.117.526 0 1.05-.524 1.11l-.875.176v12.83c-.76.409-1.46.642-2.044.642-.935 0-1.169-.292-1.869-1.166l-5.72-8.982v8.69l1.81.41s0 1.05-1.46 1.05l-4.028.232c-.117-.232 0-.816.409-.932l1.05-.292v-11.49l-1.457-.118c-.117-.525.175-1.283.992-1.342l4.32-.29 5.954 9.098v-8.05l-1.518-.174c-.117-.642.35-1.109.933-1.166l4.028-.235ZM3.81 2.294l16.637-1.225c2.043-.175 2.569-.058 3.853.875l5.31 3.733c.876.641 1.168.816 1.168 1.516v20.473c0 1.282-.466 2.042-2.1 2.157L9.355 30.99c-1.225.058-1.81-.117-2.453-.934l-3.91-5.075c-.7-.934-.992-1.633-.992-2.45V4.333c0-1.048.467-1.925 1.809-2.04Z" />
    </svg>
  )
}
