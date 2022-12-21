
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisPhone = createIcon({
  displayName: "AisPhone",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 13V5.001a1 1 0 0 1 .804-.98l5-1a.992.992 0 0 1 1.115.587l3 7a1 1 0 0 1-.364 1.226l-2.54 1.693c.264 4.545 3.915 8.196 8.46 8.458l1.694-2.54a1.002 1.002 0 0 1 1.226-.364l7 3a1 1 0 0 1 .587 1.115l-1 5a1 1 0 0 1-.98.804H19c-8.822 0-16-7.178-16-16Zm5.466-.846 2.287-1.525L8.4 5.14 5 5.82V13c0 7.717 6.275 13.995 13.991 14h7.19l.68-3.4-5.489-2.353-1.539 2.308A.994.994 0 0 1 19 24c-6.053 0-10.98-4.916-11-10.965a1 1 0 0 1 .466-.881Z" />
    </>
  ),
})
