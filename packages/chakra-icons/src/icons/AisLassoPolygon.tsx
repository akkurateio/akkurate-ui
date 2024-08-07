import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisLassoPolygon = createIcon({
  displayName: "AisLassoPolygon",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M28.634 4.227a.994.994 0 0 0-1.148-.084l-9.529 5.718L4.448 3.106a1.001 1.001 0 0 0-1.376 1.265L8.364 17.6c-.224.42-.363.892-.363 1.4 0 1.203.716 2.236 1.741 2.713C9.003 24.188 6.714 26 4.001 26a1 1 0 1 0 0 2c3.759 0 6.91-2.61 7.762-6.11A2.996 2.996 0 0 0 13.817 20h9.184c.423 0 .8-.266.941-.664l5-14a.995.995 0 0 0-.308-1.109ZM11 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm11.295-2h-8.479A2.996 2.996 0 0 0 11 16c-.369 0-.718.076-1.044.198L5.905 6.07l11.647 5.824c.307.152.668.139.962-.037l7.604-4.562L22.295 18Z" />
    </>
  ),
})
