
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisFaceDead = createIcon({
  displayName: "AisFaceDead",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z" /><rect x="13.5" y="22.5" width="5" height="1" rx=".5" stroke="#000"/><rect x="9.414" y="10.707" width="7" height="1" rx=".5" transform="rotate(45 9.414 10.707)" stroke="#000"/><rect x="18.414" y="10.707" width="7" height="1" rx=".5" transform="rotate(45 18.414 10.707)" stroke="#000"/><rect x="14.364" y="11.414" width="7" height="1" rx=".5" transform="rotate(135 14.364 11.414)" stroke="#000"/><rect x="23.364" y="11.414" width="7" height="1" rx=".5" transform="rotate(135 23.364 11.414)" stroke="#000"/>
    </>
  ),
})
