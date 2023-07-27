
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisDropbox: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M9 4 2 8.459l7 4.459 7.001-4.459L9 4Zm14 0-7 4.459 7 4.459 7-4.459L23 4ZM2 17.378l7 4.46 7.001-4.46L9 12.918l-7 4.46Zm21-4.46-7 4.46 7 4.46 7-4.46-7-4.46ZM9 23.325l7.001 4.459 7-4.46-7-4.458L9 23.325Z" />
  </ReactSVG.G>
  ],
})
