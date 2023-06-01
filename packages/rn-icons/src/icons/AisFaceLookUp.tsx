
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisFaceLookUp: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M13 23a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" /><ReactSVG.Path fillRule="evenodd" clipRule="evenodd" d="M10 10a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-3 5a3 3 0 1 0 4.985-2.25 2 2 0 1 1-3.969 0A2.993 2.993 0 0 0 7 15ZM17 15a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm3.015-2.25a2 2 0 1 0 3.969 0 3 3 0 1 1-3.969 0Z" /><ReactSVG.Path fillRule="evenodd" clipRule="evenodd" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Zm0-2c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z" />
  </ReactSVG.G>
  ],
})
