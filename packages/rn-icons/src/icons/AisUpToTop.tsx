
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisUpToTop: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M16.707 13.293a.999.999 0 0 0-1.414 0l-9 9a.999.999 0 1 0 1.414 1.414L16 15.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-9-9ZM27 7H5a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2Z" />
  </ReactSVG.G>
  ],
})
