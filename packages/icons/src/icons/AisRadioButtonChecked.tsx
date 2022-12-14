
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisRadioButtonChecked = createIcon({
  displayName: "AisRadioButtonChecked",
  viewBox: "0 0 32 32",
  
  defaultProps: {
		boxSize: "24px",
		fill: "currentColor",
	},
  path: (
    <>
      <path d="M16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" /><path fillRule="evenodd" clipRule="evenodd" d="M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Zm-2 0c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10Z" />
    </>
  ),
})
