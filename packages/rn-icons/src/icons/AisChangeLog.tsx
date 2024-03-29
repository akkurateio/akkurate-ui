
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisChangeLog: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M20 13H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V15c0-1.103-.897-2-2-2ZM4 25V15h16l.002 10H4Z" /><ReactSVG.Path d="M23.004 9H8c-1.103 0-2 .897-2 2h17.004c.549 0 .996.447.996.996V23c1.103 0 2-.897 2-2v-9.004A3 3 0 0 0 23.004 9Z" /><ReactSVG.Path d="M26.996 5H12c-1.103 0-2 .897-2 2h16.996C27.55 7 28 7.45 28 8.004V19c1.103 0 2-.897 2-2V8.004A3.008 3.008 0 0 0 26.996 5Z" />
  </ReactSVG.G>
  ],
})
