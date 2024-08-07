import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisDell: FunctionComponent<IProps> = ({
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
      <path d="M23.454 19.25v-6.595h1.527v5.255h2.675v1.337h-4.202v.003Zm-12.23-4.11 3.725-2.865c.351.285.7.572 1.051.859l-3.534 2.675.764.668 3.534-2.77c.351.285.7.573 1.051.86-1.172.931-2.35 1.854-3.534 2.77l.763.67 3.537-2.868-.001-2.483h1.529v5.255h2.77v1.338h-4.203v-2.484c-1.243.954-2.483 1.911-3.726 2.865l-3.726-2.865c-.18.911-.816 1.7-1.64 2.117-.357.184-.746.3-1.144.345-.229.028-.459.022-.689.022H5.395v-6.593h2.718a3.18 3.18 0 0 1 1.953.696c.568.45.973 1.09 1.159 1.788M6.83 13.994v4.012l1.191-.001a1.72 1.72 0 0 0 1.295-.654 2.176 2.176 0 0 0 .228-2.361 1.867 1.867 0 0 0-1.22-.957c-.208-.05-.423-.038-.634-.04h-.86ZM15.775 1h.421c2.356.03 4.671.619 6.756 1.716a15.126 15.126 0 0 1 5.158 4.446A14.913 14.913 0 0 1 31 15.775v.45a14.954 14.954 0 0 1-4.045 10.041A14.957 14.957 0 0 1 16.228 31h-.452a14.993 14.993 0 0 1-5.181-1.008 15.05 15.05 0 0 1-5.343-3.544 15.072 15.072 0 0 1-3.532-5.86A15.007 15.007 0 0 1 1 16.225v-.451A14.905 14.905 0 0 1 3.49 7.78a15.264 15.264 0 0 1 5.887-5.215A14.844 14.844 0 0 1 15.775 1Zm-.191 1.538a13.405 13.405 0 0 0-8.038 2.968 13.475 13.475 0 0 0-4.149 5.716 13.572 13.572 0 0 0 .242 10.15A13.485 13.485 0 0 0 8.07 26.9a13.372 13.372 0 0 0 5.983 2.432 13.62 13.62 0 0 0 5.47-.325 13.446 13.446 0 0 0 6.343-3.827 13.427 13.427 0 0 0 3.358-6.6 13.645 13.645 0 0 0-.152-5.853A13.462 13.462 0 0 0 20.2 3.194a13.475 13.475 0 0 0-4.616-.656Z" />
    </svg>
  )
}
