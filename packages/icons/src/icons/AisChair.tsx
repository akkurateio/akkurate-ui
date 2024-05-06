import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisChair: FunctionComponent<IProps> = ({
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
        d="M11.112 8.999a3 3 0 0 1-1.416-5.7C11.592 2.382 13.877 2 16 2s4.409.383 6.305 1.298a3 3 0 0 1-1.416 5.7l-.922 7.78c1.369-.16 2.641-.404 3.725-.73a.996.996 0 0 1 1.03.26.994.994 0 0 1 .213 1.048.996.996 0 0 1-.437.511c-.472.284-.97.539-1.49.765l1.974 10.177a1 1 0 1 1-1.963.381l-1.917-9.88c-1.626.464-3.373.69-5.102.69s-3.475-.226-5.102-.69l-1.916 9.88a1 1 0 1 1-1.964-.38l1.974-10.178c-.52-.226-1.018-.48-1.49-.765a.991.991 0 0 1-.436-.51.999.999 0 0 1 1.242-1.308c1.084.325 2.357.57 3.726.729l-.922-7.78Zm1.944-.59 1.004 8.473.006.067a36.277 36.277 0 0 0 3.869 0 1 1 0 0 1 .006-.067l1.004-8.472C18.137 8.157 17.114 8 16 8c-1.113 0-2.137.157-2.944.41Z"
      />
    </svg>
  )
}
