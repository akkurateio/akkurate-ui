import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisCheckmarkEndorsed: FunctionComponent<IProps> = ({
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
        d="M16.555 3.371a1 1 0 0 0-1.11 0l-1.383.924a1 1 0 0 1-.75.15L11.68 4.12a1 1 0 0 0-1.026.425L9.73 5.928a1 1 0 0 1-.636.425l-1.631.324a1 1 0 0 0-.786.786l-.324 1.63a1 1 0 0 1-.425.637l-1.383.924a1 1 0 0 0-.425 1.026l.324 1.631a1 1 0 0 1-.15.75l-.923 1.383a1 1 0 0 0 0 1.111l.924 1.383a1 1 0 0 1 .15.75L4.12 20.32a1 1 0 0 0 .425 1.026l1.383.924a1 1 0 0 1 .425.636l.324 1.631a1 1 0 0 0 .786.786l1.63.324a1 1 0 0 1 .637.426l.924 1.382a1 1 0 0 0 1.026.425l1.631-.324a1 1 0 0 1 .75.15l1.383.923a1 1 0 0 0 1.111 0l1.383-.924a1 1 0 0 1 .75-.15l1.632.325a1 1 0 0 0 1.026-.425l.924-1.382a1 1 0 0 1 .636-.426l1.631-.324a1 1 0 0 0 .786-.786l.324-1.63a1 1 0 0 1 .426-.637l1.382-.924a1 1 0 0 0 .425-1.026l-.324-1.631a1 1 0 0 1 .15-.75l.923-1.384a1 1 0 0 0 0-1.11l-.924-1.383a1 1 0 0 1-.15-.75l.325-1.632a1 1 0 0 0-.425-1.026l-1.382-.924a1 1 0 0 1-.426-.636l-.324-1.631a1 1 0 0 0-.786-.786l-1.63-.324a1 1 0 0 1-.637-.425l-.924-1.383a1 1 0 0 0-1.026-.425l-1.631.324a1 1 0 0 1-.75-.15l-1.384-.923Zm-1.84 17.344 8-8a.999.999 0 1 0-1.414-1.414l-7.293 7.293-3.301-3.301a.999.999 0 1 0-1.414 1.414l4.008 4.008a.997.997 0 0 0 1.414 0Z"
      />
    </svg>
  )
}
