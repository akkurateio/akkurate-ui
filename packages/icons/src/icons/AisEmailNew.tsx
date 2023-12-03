import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisEmailNew = createIcon({
  displayName: "AisEmailNew",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M16 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 6H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h24c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2Zm-1.562 2-6.75 5.624a4.998 4.998 0 0 1 1.038 1.739L28 9.301v14.698H4V9.301l7.274 6.062a4.998 4.998 0 0 1 1.038-1.739L5.562 8h20.876Z"
      />
    </>
  ),
})
