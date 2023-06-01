
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisDot: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M16 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
  </ReactSVG.G>
  ],
})
