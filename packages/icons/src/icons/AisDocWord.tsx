import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisDocWord: FunctionComponent<IProps> = ({
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
      <path d="M29.755 2.875c.342 0 .635.122.879.366s.366.537.366.879v23.76c0 .342-.122.635-.366.879a1.199 1.199 0 0 1-.879.366H9.745c-.342 0-.635-.122-.879-.366a1.199 1.199 0 0 1-.366-.879V23.5H2.245c-.342 0-.635-.122-.879-.366A1.199 1.199 0 0 1 1 22.255V9.745c0-.342.122-.635.366-.879s.537-.366.879-.366H8.5V4.12c0-.342.122-.635.366-.879s.537-.366.879-.366h20.01ZM8.544 15.004l1.802 5.918h2.05l1.963-9.845h-2.064l-1.171 5.817-1.657-5.625H7.725l-1.757 5.653-1.173-5.843H2.64l1.962 9.842h2.052l1.89-5.917ZM29.125 27.25V23.5h-18.75v3.75h18.75Zm0-5.625v-4.688H16v4.688h13.125Zm0-6.563v-4.687H16v4.688h13.125Zm0-6.562V4.75h-18.75V8.5h18.75Z" />
    </svg>
  )
}
