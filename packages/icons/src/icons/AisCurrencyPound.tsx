import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisCurrencyPound: FunctionComponent<IProps> = ({
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
      <path d="M24.37 28H7.996v-2.656h16.372V28Zm-5.217-9.61H7.9v-2.754h11.253v2.753Zm-5.988-7.632.386 10.48c.048 1.015-.044 1.953-.278 2.814-.225.853-.664 1.51-1.316 1.968l-2.994-.676c.483 0 .853-.242 1.11-.725.258-.483.431-1.046.52-1.69a10.13 10.13 0 0 0 .108-1.69l-.338-10.48c-.064-1.755.254-3.212.954-4.371.709-1.16 1.634-2.025 2.777-2.596a8.018 8.018 0 0 1 3.61-.857c1.151 0 2.198.209 3.14.627.941.411 1.734.966 2.378 1.667.644.7 1.095 1.489 1.352 2.366.258.87.27 1.763.037 2.68l-2.802-.772c.113-.837-.016-1.546-.386-2.125a3.401 3.401 0 0 0-1.521-1.328 4.805 4.805 0 0 0-4.286.097c-.717.362-1.304.925-1.763 1.69-.459.756-.688 1.73-.688 2.921Z" />
    </svg>
  )
}
