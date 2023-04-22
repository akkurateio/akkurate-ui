
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisSwitchOn = createIcon({
  displayName: "AisSwitchOn",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M10 8a8 8 0 1 0 0 16h12a8 8 0 1 0 0-16H10Zm12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    </>
  ),
})
