
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisGoogleDrive = createIcon({
  displayName: "AisGoogleDrive",
  viewBox: "0 0 32 32",
  
  defaultProps: {
		boxSize: "24px",
		fill: "currentColor",
	},
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M28.985 19.785H29c0 .461-.12.923-.357 1.34l-2.279 3.946-.476.819c-.239.417-.581.745-.983.983a2.773 2.773 0 0 1-1.34.357H8.435c-.476 0-.938-.119-1.34-.357a2.704 2.704 0 0 1-.983-.983l-1.146-1.98-1.609-2.785a2.698 2.698 0 0 1 0-2.68L10.922 5.34c.238-.417.58-.744.983-.983A2.773 2.773 0 0 1 13.245 4h5.51c.476 0 .938.12 1.34.357.402.239.745.566.983.983l3.782 6.552 3.768 6.552c.238.417.357.879.357 1.34ZM16 11.445l-4.81 8.34h9.62L16 11.445Z" />
    </>
  ),
})
