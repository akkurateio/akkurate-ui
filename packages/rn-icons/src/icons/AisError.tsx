
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisError: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="m28.991 14.5-5.197-9A3.009 3.009 0 0 0 21.196 4H10.803a3.01 3.01 0 0 0-2.598 1.5l-5.196 9a3.01 3.01 0 0 0 0 3l5.197 9c.534.925 1.53 1.5 2.598 1.5h10.393a3.01 3.01 0 0 0 2.598-1.5l5.196-9a3.01 3.01 0 0 0 0-3Zm-1.732 2-5.196 9c-.178.309-.51.5-.866.5H10.804c-.356 0-.688-.192-.866-.5l-5.196-9a1.003 1.003 0 0 1 0-1l5.196-9c.178-.309.51-.5.866-.5h10.393c.356 0 .688.192.866.5l5.196 9c.178.309.178.692 0 1Z" /><ReactSVG.Path d="M16 10a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1ZM16 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </ReactSVG.G>
  ],
})
