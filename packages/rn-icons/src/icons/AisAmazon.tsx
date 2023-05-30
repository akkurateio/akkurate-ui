import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisAmazon: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.57 22.448c.257.136.586.121.813-.082l.01.01c.686-.61 1.935-1.699 2.636-2.284.28-.232.232-.605.01-.914l-.203-.276c-.562-.757-1.094-1.474-1.094-2.912v-5.36l.002-.546c.012-2.057.023-3.935-1.516-5.371C19.908 3.445 17.721 3 16.047 3c-3.27 0-6.923 1.22-7.692 5.264-.078.43.232.658.513.72l3.338.359c.31-.015.537-.32.595-.63.285-1.393 1.456-2.065 2.767-2.065.706 0 1.51.261 1.93.895.43.634.424 1.478.418 2.236l-.002.255v.445c-.322.037-.66.072-1.008.107-1.808.185-3.894.399-5.46 1.088-2.153.93-3.667 2.83-3.667 5.622 0 3.575 2.255 5.36 5.148 5.36 2.447 0 3.783-.575 5.67-2.501.099.143.188.275.271.398.445.659.741 1.097 1.702 1.895Zm-2.655-8.283V13.237c-2.487 0-5.114.532-5.114 3.464 0 1.485.769 2.491 2.09 2.491.967 0 1.833-.595 2.38-1.562.646-1.136.645-2.205.643-3.465Zm3.468 8.201Z"
      />
      <ReactSVG.Path d="M3.707 22.783c4.272 2.604 10.884 6.636 21.423 1.62.454-.19.771.127.322.701C25 25.683 21.382 29 15.302 29c-6.075 0-10.73-4.15-12.15-5.873-.389-.447.06-.649.323-.485l.232.141Z" />
      <ReactSVG.Path d="M25.47 22.407c.922-.113 2.386-.044 2.674.332.219.285-.007 1.57-.379 2.49-.373.916-.93 1.563-1.238 1.813-.311.25-.54.153-.375-.222.172-.375 1.113-2.702.74-3.19-.345-.452-1.912-.289-2.64-.213l-.148.015c-.153.014-.277.028-.378.04-.313.034-.397.043-.444-.053-.12-.338 1.265-.902 2.188-1.012Z" />
    </>,
  ],
})
