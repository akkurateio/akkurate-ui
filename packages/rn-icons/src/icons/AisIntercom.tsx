
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisIntercom: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M26.5 2h-21A3.5 3.5 0 0 0 2 5.5v21A3.5 3.5 0 0 0 5.5 30h21c1.934 0 3.5-1.566 3.5-3.5v-21A3.5 3.5 0 0 0 26.5 2Zm-6.768 5.132c0-.513.42-.933.936-.933.513 0 .933.42.933.933v12.47a.936.936 0 0 1-1.869 0V7.132Zm-4.665-.472a.933.933 0 0 1 1.866 0v13.535a.934.934 0 0 1-1.866 0V6.66Zm-4.667.472a.935.935 0 0 1 1.868 0v12.47a.935.935 0 0 1-1.868 0V7.132ZM5.732 9A.935.935 0 0 1 7.6 9v8.394a.934.934 0 0 1-1.868 0V9ZM25.94 23.236c-.143.122-3.6 3.025-9.94 3.025-6.338 0-9.796-2.9-9.941-3.025a.933.933 0 0 1 1.212-1.421c.055.047 3.142 2.58 8.728 2.58 5.656 0 8.699-2.551 8.725-2.576a.931.931 0 0 1 1.316.1.931.931 0 0 1-.1 1.317Zm.328-5.842a.936.936 0 0 1-1.87 0V9a.936.936 0 0 1 1.87 0v8.394Z" />
  </ReactSVG.G>
  ],
})
