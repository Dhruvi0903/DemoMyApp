import React, { useRef, useState, useEffect } from 'react';
import { PanResponder, View } from 'react-native';
import Svg, {
  Circle,
  G,
  LinearGradient,
  Path,
  Defs,
  Stop,
} from 'react-native-svg';
import range from 'lodash.range';
import { interpolateHcl as interpolateGradient } from 'd3-interpolate';
import ClockFace from './ClockFace';
import { BellSilentIcon } from '../../assets/svgIcon/BellSilentIcon';
import { BellIcon } from '../../assets/svgIcon/BellIcon';

interface ArcColor {
  fromColor: string;
  toColor: string;
}

interface ArcCircle {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  realToX: number;
  realToY: number;
}

interface CircularSliderProps {
  onUpdate: (data: { startAngle: number; angleLength: number }) => void;
  startAngle: number;
  angleLength: number;
  segments?: number;
  strokeWidth?: number;
  radius?: number;
  gradientColorFrom?: string;
  gradientColorTo?: string;
  showClockFace?: boolean;
  clockFaceColor?: string;
  bgCircleColor?: string;
  stopIcon?: React.ReactElement;
  startIcon?: React.ReactElement;
}

function calculateArcColor(
  index0: number,
  segments: number,
  gradientColorFrom: string,
  gradientColorTo: string,
): ArcColor {
  const interpolate = interpolateGradient(gradientColorFrom, gradientColorTo);

  return {
    fromColor: interpolate(index0 / segments),
    toColor: interpolate((index0 + 1) / segments),
  };
}

function calculateArcCircle(
  index0: number,
  segments: number,
  radius: number,
  startAngle0: number = 0,
  angleLength0: number = 2 * Math.PI,
): ArcCircle {
  // Add 0.0001 to the possible angle so when start = stop angle, whole circle is drawn
  const startAngle = startAngle0 % (2 * Math.PI);
  const angleLength = angleLength0 % (2 * Math.PI);
  const index = index0 + 1;
  const fromAngle = (angleLength / segments) * (index - 1) + startAngle;
  const toAngle = (angleLength / segments) * index + startAngle;
  const fromX = radius * Math.sin(fromAngle);
  const fromY = -radius * Math.cos(fromAngle);
  const realToX = radius * Math.sin(toAngle);
  const realToY = -radius * Math.cos(toAngle);

  // add 0.005 to start drawing a little bit earlier so segments stick together
  const toX = radius * Math.sin(toAngle + 0.005);
  const toY = -radius * Math.cos(toAngle + 0.005);

  return {
    fromX,
    fromY,
    toX,
    toY,
    realToX,
    realToY,
  };
}

function getGradientId(index: number): string {
  return `gradient${index}`;
}

const CircularSlider: React.FC<CircularSliderProps> = ({
  onUpdate,
  startAngle,
  angleLength,
  segments = 5,
  strokeWidth = 40,
  radius = 145,
  gradientColorFrom = '#C4A69D',
  gradientColorTo = '#BC8C80',
  bgCircleColor = '#F5F5F5',
  showClockFace,
  clockFaceColor = '#9d9d9d',
}) => {
  const [circleCenterX, setCircleCenterX] = useState<number | false>(false);
  const [circleCenterY, setCircleCenterY] = useState<number | false>(false);
  const circleRef = useRef<any>(null);

  const getContainerWidth = (): number => {
    return strokeWidth + radius * 2 + 2;
  };

  useEffect(() => {
    const setCircleCenter = () => {
      if (!circleRef.current) return;

      circleRef.current.measure(
        (
          x: number,
          y: number,
          w: number,
          h: number,
          px: number,
          py: number,
        ) => {
          const halfOfContainer = getContainerWidth() / 2;
          setCircleCenterX(px + halfOfContainer);
          setCircleCenterY(py + halfOfContainer);
        },
      );
    };

    // Initial setup
    setCircleCenter();

    // Setup layout change listener
    const layoutInterval = setInterval(setCircleCenter, 100);
    return () => clearInterval(layoutInterval);
  }, []);

  const sleepPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: () => {},

    onPanResponderMove: (evt, { moveX, moveY }) => {
      if (circleCenterX === false || circleCenterY === false) return;

      const currentAngleStop = (startAngle + angleLength) % (2 * Math.PI);
      let newAngle =
        Math.atan2(moveY - circleCenterY, moveX - circleCenterX) + Math.PI / 2;

      if (newAngle < 0) {
        newAngle += 2 * Math.PI;
      }

      let newAngleLength = currentAngleStop - newAngle;

      if (newAngleLength < 0) {
        newAngleLength += 2 * Math.PI;
      }

      requestAnimationFrame(() => {
        onUpdate({
          startAngle: newAngle,
          angleLength: newAngleLength % (2 * Math.PI),
        });
      });
    },
    onPanResponderRelease: () => {},
    onPanResponderTerminate: () => {},
  });

  const wakePanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: () => {},

    onPanResponderMove: (evt, { moveX, moveY }) => {
      if (circleCenterX === false || circleCenterY === false) return;

      let newAngle =
        Math.atan2(moveY - circleCenterY, moveX - circleCenterX) + Math.PI / 2;
      let newAngleLength = (newAngle - startAngle) % (2 * Math.PI);

      if (newAngleLength < 0) {
        newAngleLength += 2 * Math.PI;
      }

      requestAnimationFrame(() => {
        onUpdate({ startAngle, angleLength: newAngleLength });
      });
    },
    onPanResponderRelease: () => {},
    onPanResponderTerminate: () => {},
  });

  const containerWidth = getContainerWidth();
  const start = calculateArcCircle(
    0,
    segments,
    radius,
    startAngle,
    angleLength,
  );
  const stop = calculateArcCircle(
    segments - 1,
    segments,
    radius,
    startAngle,
    angleLength,
  );

  return (
    <View style={{ width: containerWidth, height: containerWidth }}>
      <Svg height={containerWidth} width={containerWidth} ref={circleRef}>
        <Defs>
          {range(segments).map(i => {
            const { fromX, fromY, toX, toY } = calculateArcCircle(
              i,
              segments,
              radius,
              startAngle,
              angleLength,
            );
            const { fromColor, toColor } = calculateArcColor(
              i,
              segments,
              gradientColorFrom,
              gradientColorTo,
            );
            return (
              <LinearGradient
                key={i}
                id={getGradientId(i)}
                x1={fromX.toFixed(2)}
                y1={fromY.toFixed(2)}
                x2={toX.toFixed(2)}
                y2={toY.toFixed(2)}
              >
                <Stop offset="0%" stopColor={fromColor} />
                <Stop offset="1" stopColor={toColor} />
              </LinearGradient>
            );
          })}
        </Defs>

        <G
          transform={`translate(${strokeWidth / 2 + radius + 1}, ${
            strokeWidth / 2 + radius + 1
          })`}
        >
          <Circle
            r={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
            stroke={bgCircleColor}
          />
          {showClockFace && (
            <ClockFace r={radius - strokeWidth / 2} stroke={clockFaceColor} />
          )}
          {/* Gradient Arc */}
          {range(segments).map(i => {
            const { fromX, fromY, toX, toY } = calculateArcCircle(
              i,
              segments,
              radius,
              startAngle,
              angleLength,
            );
            const d = `M ${fromX.toFixed(2)} ${fromY.toFixed(
              2,
            )} A ${radius} ${radius} 0 0 1 ${toX.toFixed(2)} ${toY.toFixed(2)}`;

            return (
              <Path
                key={i}
                d={d}
                strokeWidth={strokeWidth - 15}
                stroke={`url(#${getGradientId(i)})`}
                fill="transparent"
              />
            );
          })}

          {/* White Dots */}
          {range(12).map(i => {
            const angle = (i * (2 * Math.PI)) / 15;
            if (angle >= startAngle && angle <= (startAngle + angleLength) % (2 * Math.PI)) {
              const dotX = radius * Math.sin(angle);
              const dotY = -radius * Math.cos(angle);
              return (
                <Circle
                  key={`dot-${i}`}
                  cx={dotX.toFixed(2)}
                  cy={dotY.toFixed(2)}
                  r={4}
                  fill="white"
                />
              );
            }
            return null;
          })}

          <G
            fill={gradientColorFrom}
            transform={`translate(${stop.toX}, ${stop.toY})`}
            {...wakePanResponder.panHandlers}
          >
            <Circle
              r={(strokeWidth - 1) / 2.7}
              fill={bgCircleColor}
              stroke={gradientColorTo}
              strokeWidth="4"
            />
            <G transform={`translate(-12, -12) scale(1)`}>
              {<BellIcon color={gradientColorTo} />}
            </G>
          </G>

          <G
            fill={gradientColorTo}
            transform={`translate(${start.fromX}, ${start.fromY})`}
            {...sleepPanResponder.panHandlers}
          >
            <Circle
              r={(strokeWidth - 1) / 2.7}
              fill={bgCircleColor}
              stroke={gradientColorFrom}
              strokeWidth="4"
            />
            <G transform={`translate(-12, -12) scale(1)`}>
              {<BellSilentIcon color={gradientColorFrom} />}
            </G>
          </G>
        </G>
      </Svg>
    </View>
  );
};

export default CircularSlider;
