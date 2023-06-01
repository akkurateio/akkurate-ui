
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisFaceWink: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M17 13a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1ZM11 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM20.192 20.243a6 6 0 0 1-8.485 0 1 1 0 0 0-1.414 1.414 8 8 0 0 0 11.314 0 1 1 0 0 0-1.415-1.414Z" /><ReactSVG.Path fillRule="evenodd" clipRule="evenodd" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Zm0-2c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z" />
  </ReactSVG.G>
  ],
})
