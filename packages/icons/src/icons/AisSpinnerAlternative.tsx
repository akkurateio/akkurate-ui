
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisSpinnerAlternative = createIcon({
  displayName: "AisSpinnerAlternative",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <g opacity=".85" ><path d="M16 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 29a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8.222 25.778a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM27 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM23.778 25.778a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8.222 10.222a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></g>
    </>
  ),
})
