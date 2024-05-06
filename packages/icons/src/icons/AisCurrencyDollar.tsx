import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisCurrencyDollar: FunctionComponent<IProps> = ({
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
      <path d="M15.628 28.727V1.455h1.747v27.272h-1.747Zm5.88-19.09c-.127-1.08-.646-1.918-1.555-2.515-.909-.596-2.024-.895-3.345-.895-.966 0-1.811.157-2.536.469-.717.313-1.278.742-1.683 1.29a3.09 3.09 0 0 0-.596 1.863c0 .583.138 1.083.415 1.502.284.412.646.757 1.087 1.034.44.27.902.494 1.385.671.483.17.927.309 1.331.416l2.216.596c.568.15 1.2.355 1.896.618a8.75 8.75 0 0 1 2.014 1.076 5.479 5.479 0 0 1 1.598 1.726c.419.703.629 1.566.629 2.589 0 1.179-.31 2.244-.927 3.196-.611.951-1.506 1.708-2.685 2.269-1.172.561-2.596.841-4.272.841-1.563 0-2.915-.252-4.059-.756-1.136-.504-2.031-1.207-2.685-2.11-.646-.901-1.012-1.949-1.097-3.142h2.727c.071.824.348 1.506.831 2.045.49.533 1.108.93 1.854 1.194a7.504 7.504 0 0 0 2.429.383c1.009 0 1.914-.163 2.717-.49.802-.334 1.438-.795 1.907-1.385.468-.596.703-1.293.703-2.088 0-.724-.203-1.314-.607-1.768-.405-.455-.938-.824-1.598-1.108a16.797 16.797 0 0 0-2.142-.746l-2.685-.767c-1.704-.49-3.053-1.19-4.048-2.099-.994-.909-1.491-2.099-1.491-3.569 0-1.221.33-2.287.99-3.196.668-.916 1.563-1.626 2.685-2.13 1.13-.512 2.39-.767 3.782-.767 1.406 0 2.656.252 3.75.756 1.094.497 1.96 1.179 2.6 2.045.646.867.987 1.85 1.022 2.951h-2.557Z" />
    </svg>
  )
}
