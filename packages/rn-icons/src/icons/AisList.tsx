
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisList: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M26 5H6c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2ZM6 9V7h20v2H6ZM26 21H6c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2ZM6 25v-2h20l.002 2H6ZM26 13H6c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2ZM6 17v-2h20l.002 2H6Z" />
  </ReactSVG.G>
  ],
})
