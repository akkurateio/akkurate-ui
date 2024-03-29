
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisClose: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="m17.414 16 7.293-7.293a.999.999 0 1 0-1.414-1.414L16 14.586 8.707 7.293a.999.999 0 1 0-1.414 1.414L14.586 16l-7.293 7.293a.999.999 0 1 0 1.414 1.414L16 17.414l7.293 7.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L17.414 16Z" />
  </ReactSVG.G>
  ],
})
