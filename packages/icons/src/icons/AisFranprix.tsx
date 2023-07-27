
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisFranprix = createIcon({
  displayName: "AisFranprix",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <path d="M15.845 9.356c4.306 0 7.377-3.583 7.152-7.334-2.478-.198-5.914.923-7.152 4.422-1.238-3.5-4.675-4.62-7.152-4.42-.225 3.749 2.846 7.332 7.152 7.332Zm12.836 8.122c-.162-3.982-3.291-7.422-7.642-7.422-1.972 0-3.775.74-5.194 2.034-1.42-1.295-3.223-2.034-5.194-2.034-4.35 0-7.48 3.44-7.642 7.422C2.73 24.388 8.744 30 15.845 30c7.102 0 13.116-5.612 12.836-12.522Z" />
    </>
  ),
})
