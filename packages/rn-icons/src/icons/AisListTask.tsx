
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisListTask: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M16 8h14v2H16V8Zm0 14h14v2H16v-2Zm-6-8H4a2.002 2.002 0 0 1-2-2V6a2.002 2.002 0 0 1 2-2h6a2.002 2.002 0 0 1 2 2v6a2.002 2.002 0 0 1-2 2ZM4 6v6h6.001L10 6H4Zm6 22H4a2.002 2.002 0 0 1-2-2v-6a2.002 2.002 0 0 1 2-2h6a2.002 2.002 0 0 1 2 2v6a2.002 2.002 0 0 1-2 2Zm-6-8v6h6.001L10 20H4Z" />
  </ReactSVG.G>
  ],
})
