import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const BackArrowIcon = ({ color = '#000000', width = 24, height = 24 }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <Path
      d="M15 4.5L7.5 12L15 19.5"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);
