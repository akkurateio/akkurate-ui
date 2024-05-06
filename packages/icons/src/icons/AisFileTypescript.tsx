import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisFileTypescript: FunctionComponent<IProps> = ({
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
        d="M20.828 12h-9.656c-.647 0-1.172.525-1.172 1.172v9.656c0 .647.525 1.172 1.172 1.172h9.656c.647 0 1.172-.525 1.172-1.172v-9.656c0-.647-.525-1.172-1.172-1.172Zm-3.4 9.549v1.173c.191.098.417.171.677.22.26.05.535.074.823.074.282 0 .549-.027.802-.081.253-.054.475-.142.666-.266.19-.123.341-.285.453-.484.111-.2.167-.445.167-.739a1.51 1.51 0 0 0-.096-.559 1.307 1.307 0 0 0-.275-.427 2.016 2.016 0 0 0-.43-.335 4.613 4.613 0 0 0-.568-.28 7.175 7.175 0 0 1-.414-.186 2.11 2.11 0 0 1-.312-.183.8.8 0 0 1-.198-.198.416.416 0 0 1-.07-.237c0-.08.021-.153.063-.218.041-.065.1-.12.176-.167a.943.943 0 0 1 .279-.108 1.62 1.62 0 0 1 .366-.039 2.335 2.335 0 0 1 .639.09c.11.03.217.07.32.116.105.046.2.1.289.161V17.78a2.86 2.86 0 0 0-.585-.152 4.768 4.768 0 0 0-.729-.05c-.278 0-.543.03-.792.09-.25.06-.469.153-.658.28-.19.128-.34.29-.45.486-.11.197-.165.432-.165.706 0 .35.101.648.303.895.202.247.508.456.919.627.161.066.311.13.45.194.14.064.26.13.362.198a.95.95 0 0 1 .24.224.456.456 0 0 1 .034.486.489.489 0 0 1-.167.168.917.917 0 0 1-.28.112c-.11.027-.24.04-.39.04a2.254 2.254 0 0 1-1.449-.535Zm-1.972-2.89h1.505v-.964h-4.195v.963h1.497v4.287h1.193v-4.287Z"
      />
      <path
        d="M7 4a1 1 0 0 1 1-1h11.172a1 1 0 0 1 .707.293l4.828 4.828a1 1 0 0 1 .293.707V28a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4Z"
        stroke="#000"
        strokeWidth="2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M18 3h2v5h5v2h-7V3Z" />
    </svg>
  )
}
