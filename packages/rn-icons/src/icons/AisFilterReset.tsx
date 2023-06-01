
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisFilterReset: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M20.293 3.293a1 1 0 0 1 1.414 0L24 5.586l2.293-2.293a1 1 0 1 1 1.414 1.414L25.414 7l2.293 2.293a1 1 0 0 1-1.414 1.414L24 8.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L22.586 7l-2.293-2.293a1 1 0 0 1 0-1.414Z" /><ReactSVG.Path d="M17 7c0-.695.101-1.366.29-2H5a1 1 0 0 0-.816 1.578l7.69 10.852V26a1 1 0 0 0 1 1h.002a1 1 0 0 0 .39-.079l5.25-2.222a1 1 0 0 0 .61-.921V17.43l2.68-3.78a6.974 6.974 0 0 1-1.81-.907l-2.686 3.79a.992.992 0 0 0-.185.578v6.004l-3.25 1.375v-7.379a.999.999 0 0 0-.185-.578L6.935 7H17Z" />
  </ReactSVG.G>
  ],
})
