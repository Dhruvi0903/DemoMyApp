import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import CircularSlider from '../sliderCompoent/CircularSlider';
import { styles } from './QuietHoursSlider.style';
import Svg from 'react-native-svg';
import { BellSilentIcon } from '../../assets/svgIcon/BellSilentIcon';
import { cmsVerbiage } from '../../cmsData/cmsVerbiage';

interface QuietHoursSliderProps {
  onQuietHoursChange?: (startHour: number, endHour: number) => void;
}

const QuietHoursSlider: React.FC<QuietHoursSliderProps> = ({
  onQuietHoursChange,
}) => {
  const [startHour, setStartHour] = useState(6); // 6 AM default
  const [endHour, setEndHour] = useState(16); // 4 PM default

  const handleUpdate = ({
    startAngle,
    angleLength,
  }: {
    startAngle: number;
    angleLength: number;
  }) => {
    // Convert angles to hours (24-hour format)
    const totalHours = 24;
    const startHourNew =
      Math.round((startAngle / (2 * Math.PI)) * totalHours) % totalHours;
    const endHourNew =
      Math.round(((startAngle + angleLength) / (2 * Math.PI)) * totalHours) %
      totalHours;

    setStartHour(startHourNew);
    setEndHour(endHourNew);
    onQuietHoursChange?.(startHourNew, endHourNew);
  };

  // Convert hours to angles (radians)
  const startAngle = (startHour / 24) * 2 * Math.PI;
  const endAngle = (endHour / 24) * 2 * Math.PI;
  let angleLength = endAngle - startAngle;
  if (angleLength < 0) {
    angleLength += 2 * Math.PI;
  }

  const formatHour = (hour: number) => {
    if (hour === 0) return '12am';
    if (hour === 12) return '12pm';
    return hour > 12 ? `${hour - 12}pm` : `${hour}am`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <CircularSlider
          startAngle={startAngle}
          angleLength={angleLength}
          onUpdate={handleUpdate}
          segments={75}
          strokeWidth={70}
          radius={120}
          gradientColorFrom="#BC8C80"
          gradientColorTo="#E3D5C9"
          bgCircleColor="#F5F5F5"
          showClockFace={true}
          clockFaceColor="#666666"
        />
        <View style={styles.centerText}>
          <Text style={styles.durationText}>{endHour - startHour}h</Text>
          <Text style={styles.workDurationText}>{cmsVerbiage?.notification_work_duration}</Text>
        </View>
      </View>

      <View style={styles.quietHoursContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Svg width={22} height={22}>
            <BellSilentIcon color={'#BC8C80'}/>
          </Svg>
          <Text style={styles.quietHoursText}>{cmsVerbiage?.notification_quiet_hours}</Text>
        </View>
        <Text style={styles.quietHoursTime}>
          {`${formatHour(startHour)} - ${formatHour(endHour)}`}
        </Text>
      </View>
    </View>
  );
};

export default QuietHoursSlider;
