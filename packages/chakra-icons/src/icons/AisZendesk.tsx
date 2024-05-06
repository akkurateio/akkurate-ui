import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisZendesk = createIcon({
  displayName: "AisZendesk",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <g clip-path="url(#a)">
        <path d="M15.01 11.017V25H3l12.01-13.982Zm0-5.017a5.688 5.688 0 0 1-1.76 4.094 6.12 6.12 0 0 1-4.245 1.696 6.12 6.12 0 0 1-4.246-1.696A5.688 5.688 0 0 1 3 6h12.01Zm1.978 19c0-1.536.633-3.009 1.759-4.094a6.12 6.12 0 0 1 4.246-1.696c1.592 0 3.12.61 4.246 1.696A5.687 5.687 0 0 1 28.997 25h-12.01Zm0-5.017V6H29L16.988 19.982Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(3 6)" d="M0 0h26v19H0z" />
        </clipPath>
      </defs>
    </>
  ),
})
