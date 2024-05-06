import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisCommentAlternative: FunctionComponent<IProps> = ({
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
      <mask id="a" fill="#fff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 2C8.268 2 2 8.268 2 16c0 3.614 1.37 6.909 3.618 9.393L2.072 30H16c7.732 0 14-6.268 14-14S23.732 2 16 2Z"
        />
      </mask>
      <path
        d="m5.618 25.393 1.585 1.22 1.02-1.324L7.1 24.051l-1.483 1.342ZM2.072 30 .487 28.78-1.992 32h4.064v-2Zm13.856 0v2h4.06l-2.474-3.219L15.928 30Zm0 0 .01-2-4.085-.02 2.49 3.238L15.927 30ZM4 16C4 9.373 9.373 4 16 4V0C7.163 0 0 7.163 0 16h4Zm3.101 8.05A11.949 11.949 0 0 1 4 16H0c0 4.13 1.567 7.898 4.136 10.735L7.1 24.051Zm-3.444 7.17 3.546-4.607-3.17-2.44L.488 28.78l3.17 2.44ZM15.928 28H2.072v4h13.856v-4Zm-1.586 3.218 3.172-2.437-3.172 2.437ZM16 28h-.062l-.02 4H16v-4Zm12-12c0 6.627-5.373 12-12 12v4c8.837 0 16-7.163 16-16h-4ZM16 4c6.627 0 12 5.373 12 12h4c0-8.837-7.163-16-16-16v4Z"
        mask="url(#a)"
      />
    </svg>
  )
}
