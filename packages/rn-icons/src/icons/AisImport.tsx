
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisImport: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M18.293 19.293a.999.999 0 1 0 1.414 1.414l4-4a1.001 1.001 0 0 0 0-1.414l-4-4a.999.999 0 1 0-1.414 1.414L20.586 15H5a1 1 0 0 0 0 2h15.586l-2.293 2.293Z" /><ReactSVG.Path d="M25.996 6h-9.992A2.006 2.006 0 0 0 14 8.004V11a1 1 0 0 0 2 0l.004-3L26 8.004 25.996 24 16 23.996V21a1 1 0 1 0-2 0v2.996C14 25.1 14.899 26 16.004 26h9.992A2.006 2.006 0 0 0 28 23.996V8.004A2.006 2.006 0 0 0 25.996 6Z" />
  </ReactSVG.G>
  ],
})
