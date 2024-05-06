import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisSortNumericUp: FunctionComponent<IProps> = ({
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
      <path d="M25.785 11.176c-.672-.003-1.25-.168-1.734-.496-.482-.328-.853-.804-1.113-1.426-.258-.622-.386-1.371-.383-2.246 0-.873.129-1.616.386-2.23.26-.615.632-1.083 1.114-1.403.484-.323 1.06-.484 1.73-.484.67 0 1.245.161 1.727.484.484.323.857.792 1.117 1.406.26.612.39 1.354.387 2.227 0 .877-.13 1.627-.391 2.25-.258.622-.628 1.098-1.11 1.426-.481.328-1.058.492-1.73.492Zm0-1.403c.459 0 .824-.23 1.098-.691.273-.46.409-1.152.406-2.074 0-.607-.062-1.112-.187-1.516-.123-.403-.297-.707-.524-.91a1.141 1.141 0 0 0-.793-.305c-.456 0-.82.228-1.094.684-.273.456-.411 1.138-.414 2.047 0 .614.062 1.127.184 1.539.125.409.3.716.527.922.227.203.492.304.797.304ZM25.543 20.89c.411 0 .807.07 1.188.208.382.138.723.358 1.023.66.302.302.54.703.715 1.203.177.497.267 1.108.27 1.832 0 .68-.078 1.286-.231 1.82a4.029 4.029 0 0 1-.652 1.356 2.85 2.85 0 0 1-1.028.851c-.4.193-.849.29-1.344.29-.534 0-1.005-.104-1.414-.31a2.656 2.656 0 0 1-.988-.847 2.64 2.64 0 0 1-.45-1.21h1.669c.065.29.202.517.41.679.208.159.466.238.773.238.521 0 .917-.226 1.188-.68.27-.455.407-1.079.41-1.87h-.055c-.12.234-.28.436-.484.605a2.254 2.254 0 0 1-.7.387c-.26.09-.537.136-.831.136-.472 0-.892-.11-1.262-.332a2.381 2.381 0 0 1-.875-.914 2.71 2.71 0 0 1-.32-1.328 2.719 2.719 0 0 1 .37-1.434c.25-.419.6-.747 1.048-.984.45-.24.974-.358 1.57-.355Zm.012 1.329a1.327 1.327 0 0 0-1.188.691 1.402 1.402 0 0 0-.172.707c0 .263.058.5.172.711.117.208.276.375.477.5.203.123.435.184.695.184a1.34 1.34 0 0 0 .977-.41c.125-.13.222-.28.293-.45a1.44 1.44 0 0 0-.074-1.234 1.374 1.374 0 0 0-.485-.508 1.292 1.292 0 0 0-.695-.191Z" />
      <rect x="2" y="6" width="18" height="2" rx="1" />
      <path d="M8 13a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM12 19a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1ZM16 25a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z" />
    </svg>
  )
}
