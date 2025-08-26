import React from 'react';
import { G, Circle, Text, Line } from 'react-native-svg';
import range from 'lodash.range';

interface ClockFaceProps {
  r: number;
  stroke: string;
}

const ClockFace: React.FC<ClockFaceProps> = ({ r, stroke }) => {
  const faceRadius = r - 5;
  const textRadius = r - 25;

  return (
    <G>
      {
        range(48).map(i => {
          const cos = Math.cos(2 * Math.PI / 48 * i);
          const sin = Math.sin(2 * Math.PI / 48 * i);

          return (
            <Line
              key={i}
              stroke={stroke}
              strokeWidth={i % 4 === 0 ? 3 : 1}
              x1={cos * faceRadius}
              y1={sin * faceRadius}
              x2={cos * (faceRadius - 7)}
              y2={sin * (faceRadius - 7)}
              strokeOpacity={0.5}
            />
          );
        })
      }
      <G>
        {
          range(12).map((h, i) => (
            <Text
              key={i}
              fill={stroke}
              fontSize="16"
              textAnchor="middle"
              alignmentBaseline="middle"
              x={textRadius * Math.cos(2 * Math.PI / 12 * i - Math.PI / 2 + Math.PI / 6)}
              y={textRadius * Math.sin(2 * Math.PI / 12 * i - Math.PI / 2 + Math.PI / 6)}
            >
              {h === 2 ? '6' : h === 5 ? '12pm' : h === 8 ? '6' : h === 11 ? '12am' : ''}
            </Text>
          ))
        }
      </G>
    </G>
  );
};

export default ClockFace;