
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisFaceSorry: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M11 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM23 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" /><ReactSVG.Path fillRule="evenodd" clipRule="evenodd" d="M10 18a3 3 0 1 0 0 6h12a3 3 0 1 0 0-6H10Zm5 2h-2v2h2v-2Zm2 2h2v-2h-2v2Zm5 0h-1v-2h1a1 1 0 1 1 0 2Zm-12-2h1v2h-1a1 1 0 1 1 0-2Z" /><ReactSVG.Path fillRule="evenodd" clipRule="evenodd" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Zm0-2c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z" />
  </ReactSVG.G>
  ],
})
