
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisCancel = createIcon({
  displayName: "AisCancel",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Zm-2 0c0 5.523-4.477 10-10 10a9.959 9.959 0 0 1-6.329-2.257L23.743 9.67A9.959 9.959 0 0 1 26 16ZM8.257 22.329 22.33 8.257A9.958 9.958 0 0 0 16 6C10.477 6 6 10.477 6 16c0 2.401.846 4.605 2.257 6.329Z" />
    </>
  ),
})
