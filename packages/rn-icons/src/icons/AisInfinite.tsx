import React from "react"
import { createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisInfinite = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.G clip-path="url(#a)">
        <ReactSVG.Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 16c0 6.08 3.36 11 7.5 11 3.5 0 5.47-2.72 6.5-4.99 1.03 2.27 3 4.99 6.5 4.99 4.14 0 7.5-4.92 7.5-11S28.64 5 24.5 5c-4.35 0-7.14 6.28-8.5 10.43C14.64 11.28 11.85 5 7.5 5 3.36 5 2 9.92 2 16Zm2 0c0 2.69.75 5.03 1.85 6.65C6.95 24.28 8.28 25 9.5 25c1.94 0 3.28-1.25 4.26-2.98A12.53 12.53 0 0 0 14.95 19l-.03-.12a38.353 38.353 0 0 0-2.06-6.06 16.45 16.45 0 0 0-2.61-4.29C9.25 7.45 8.35 7 7.5 7c-.6 0-1.03.17-1.37.44-.38.29-.76.78-1.1 1.57C4.33 10.63 4 13.05 4 16Zm24 0c0 2.69-.75 5.03-1.85 6.65-1.1 1.63-2.43 2.35-3.65 2.35-1.94 0-3.28-1.25-4.26-2.98A12.53 12.53 0 0 1 17.05 19l.03-.12a38.353 38.353 0 0 1 2.06-6.06c.74-1.66 1.62-3.2 2.61-4.29 1-1.08 1.9-1.53 2.75-1.53.6 0 1.03.17 1.37.44.38.29.76.78 1.1 1.57.7 1.62 1.03 4.04 1.03 6.99Z"
        />
      </ReactSVG.G>
      <ReactSVG.Defs>
        <ReactSVG.ClipPath id="a">
          <ReactSVG.Path
            fill="#fff"
            transform="translate(2 5)"
            d="M0 0h28v22H0z"
          />
        </ReactSVG.ClipPath>
      </ReactSVG.Defs>
    </>,
  ],
})
