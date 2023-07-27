
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisStripe: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M18.305 12.675c-2.534-.94-3.915-1.664-3.915-2.81 0-.97.797-1.523 2.218-1.523 2.598 0 5.267 1.001 7.105 1.903l1.038-6.41C23.294 3.138 20.313 2 16.192 2c-2.914 0-5.338.763-7.07 2.184-1.802 1.487-2.739 3.64-2.739 6.237 0 4.712 2.878 6.72 7.555 8.422 3.016 1.073 4.02 1.837 4.02 3.014 0 1.143-.98 1.802-2.747 1.802-2.187 0-5.792-1.074-8.155-2.46l-1.05 6.48C8.038 28.823 11.783 30 15.666 30c3.081 0 5.65-.728 7.383-2.115 1.941-1.523 2.946-3.776 2.946-6.688 0-4.816-2.945-6.826-7.693-8.522h.003Z" />
  </ReactSVG.G>
  ],
})
