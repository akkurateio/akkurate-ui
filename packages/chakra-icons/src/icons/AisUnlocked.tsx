import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisUnlocked = createIcon({
  displayName: "AisUnlocked",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M23.532 12H12v-2c0-2.206 1.794-4 4-4 1.27 0 2.437.583 3.2 1.601A1 1 0 1 0 20.799 6.4a5.954 5.954 0 0 0-4.8-2.399c-3.309 0-6 2.691-6 6v2H8.467a2.471 2.471 0 0 0-2.468 2.468v11.064a2.471 2.471 0 0 0 2.468 2.468h15.064a2.471 2.471 0 0 0 2.468-2.468V14.469a2.47 2.47 0 0 0-2.468-2.468l.001-.001ZM24 25.532c0 .258-.21.468-.468.468H8.468A.469.469 0 0 1 8 25.532V14.468c0-.258.21-.468.468-.468h15.064c.258 0 .468.21.468.468v11.064Z" />
    </>
  ),
})
