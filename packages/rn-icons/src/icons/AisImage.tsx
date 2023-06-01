
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisImage: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M26 4H6c-1.103 0-2 .897-2 2v20c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2ZM6 6h20v11.587l-4.293-4.294a.999.999 0 0 0-1.414 0L7.586 26H6V6Zm4.414 20L21 15.414l5.001 5.001V26H10.414Z" /><ReactSVG.Path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4Zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2Z" />
  </ReactSVG.G>
  ],
})
