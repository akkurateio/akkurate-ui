
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisListOrdered = createIcon({
  displayName: "AisListOrdered",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <path d="M14 11a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1ZM14 21a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1ZM8.754 7.727V15H7.216V9.187h-.043L5.508 10.23V8.867l1.8-1.14h1.446ZM5.59 25v-1.108l2.588-2.397c.22-.213.405-.405.554-.575.152-.17.267-.338.345-.501.078-.166.117-.344.117-.536a1.01 1.01 0 0 0-.146-.55.956.956 0 0 0-.397-.36 1.247 1.247 0 0 0-.572-.127c-.223 0-.417.045-.583.135a.93.93 0 0 0-.383.387c-.09.168-.135.368-.135.6h-1.46c0-.476.108-.889.324-1.24.215-.35.517-.62.905-.813.388-.191.836-.287 1.342-.287.521 0 .975.092 1.36.277.389.182.69.435.906.76.215.324.323.696.323 1.115 0 .274-.054.546-.163.813-.107.268-.297.565-.572.891-.274.325-.662.714-1.161 1.169l-1.062 1.04v.05h3.054V25H5.59Z" />
    </>
  ),
})
