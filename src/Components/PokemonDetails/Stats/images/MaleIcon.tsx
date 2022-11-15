import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const MaleIcon = (props: SvgProps) => (
  <Svg
    style={{
      width: 15,
      height: 15,
    }}
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill="#2D5BC6"
      d="M9 9c1.29 0 2.5.41 3.47 1.11L17.58 5H13V3h8v8h-2V6.41l-5.11 5.09c.7 1 1.11 2.2 1.11 3.5a6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6m0 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4Z"
    />
  </Svg>
);
