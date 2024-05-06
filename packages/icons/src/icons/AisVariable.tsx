import React, { FunctionComponent } from "react"
import { IconSize, TIconSize } from "../iconSizes"

interface IProps {
  size?: TIconSize
  className?: string
}

export const AisVariable: FunctionComponent<IProps> = ({
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
      <path d="m11.372 5-.187.958c-1.003.181-1.949.714-2.836 1.597-.879.875-1.65 2.062-2.31 3.56-.584 1.309-1.04 2.815-1.366 4.518-.327 1.704-.49 3.328-.49 4.873 0 1.554.24 2.827.723 3.82.49.994 1.28 1.594 2.37 1.799L7.077 27c-1.61-.205-2.86-.938-3.746-2.2C2.444 23.538 2 21.84 2 19.702c0-3.927.899-7.266 2.696-10.018C6.501 6.924 8.726 5.363 11.372 5ZM22.192 12.487c-.008.457-.175.796-.502 1.017-.32.213-.67.32-1.05.32-.234 0-.499-.04-.794-.119-.296-.086-.53-.157-.7-.213-.35.316-.76.781-1.226 1.396-.46.615-.895 1.293-1.307 2.035.186.749.354 1.391.502 1.928.148.528.307 1.06.478 1.596.148.481.378.868.689 1.16.319.283.735.425 1.249.425a5.719 5.719 0 0 0 1.529-.248l-.21.78c-.748.316-1.312.52-1.693.616a4.934 4.934 0 0 1-1.214.142c-.544 0-.996-.127-1.354-.379-.35-.252-.634-.773-.852-1.561a195.69 195.69 0 0 1-.385-1.443c-.093-.395-.187-.785-.28-1.171-.358.544-.653 1.01-.887 1.395-.233.379-.622.903-1.167 1.574-.475.583-.91.997-1.307 1.242-.397.244-.802.366-1.214.366-.366 0-.665-.106-.899-.32-.241-.22-.362-.524-.362-.91 0-.37.14-.686.42-.946.28-.268.666-.402 1.156-.402.249 0 .49.047.724.142.24.086.49.17.747.248.295-.284.684-.726 1.167-1.325.49-.599.945-1.281 1.365-2.046-.147-.56-.31-1.175-.49-1.845a37.597 37.597 0 0 0-.49-1.763c-.202-.638-.436-1.048-.7-1.23-.265-.181-.603-.272-1.016-.272a3.04 3.04 0 0 0-.723.095c-.25.063-.483.126-.7.19l.221-.781c.6-.253 1.136-.458 1.61-.615.483-.166.81-.249.981-.249.537 0 .98.134 1.33.402.359.26.643.77.853 1.526.24.875.381 1.412.42 1.609.047.189.132.567.257 1.135a41.28 41.28 0 0 0 .91-1.478c.234-.402.615-.935 1.144-1.597.49-.623.941-1.049 1.354-1.277.42-.237.82-.355 1.202-.355.342 0 .63.114.864.343.24.22.358.508.35.863ZM30 12.298c0 3.927-.903 7.27-2.708 10.03-1.797 2.752-4.019 4.31-6.664 4.672l.186-.958c1.004-.181 1.946-.714 2.825-1.597.887-.875 1.661-2.062 2.323-3.56.575-1.309 1.027-2.815 1.354-4.518.334-1.704.501-3.328.501-4.874 0-1.553-.245-2.826-.735-3.82-.482-.993-1.268-1.593-2.358-1.798L24.924 5c1.61.205 2.86.938 3.746 2.2C29.556 8.462 30 10.16 30 12.298Z" />
    </svg>
  )
}
