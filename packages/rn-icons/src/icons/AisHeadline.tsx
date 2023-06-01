
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisHeadline: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M22 5a1 1 0 0 0-1 1v9H9V6a1 1 0 1 0-2 0v20a1 1 0 1 0 2 0v-9h12v9a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Z" />
  </ReactSVG.G>
  ],
})
