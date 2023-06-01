
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisHr: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M29 19H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1ZM4 17h24v-2H4v2Z" />
  </ReactSVG.G>
  ],
})
