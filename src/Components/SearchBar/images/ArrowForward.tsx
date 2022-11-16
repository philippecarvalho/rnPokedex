import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ArrowForward = () => (
  <Svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    stroke="#ffffff"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M5 12h14M12 5l7 7-7 7" />
  </Svg>
);
