
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisGoLeft: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M11.91 17.79a2 2 0 0 1 0-3.354l6.329-4.11c1.33-.864 3.09.09 3.09 1.677v8.221c0 1.587-1.76 2.541-3.09 1.677l-6.328-4.11Z" />
  </ReactSVG.G>
  ],
})
