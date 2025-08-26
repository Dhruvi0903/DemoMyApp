import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
  StatusBar,
  ScrollView,
  BackHandler,
  SafeAreaView,
} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import styles from './NotificationScreen.style';
import { Switch } from 'react-native-switch';
import images from '../../assets';
import QuietHoursSlider from '../../components/quietHoursSlider/QuietHoursSlider';
import { cmsVerbiage } from '../../cmsData/cmsVerbiage';
import CheckedIcon from '../../assets/svgIcon/CheckedIcon';

type NotificationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Notification'
>;

type Props = {
  navigation: NotificationScreenNavigationProp;
};

const NotificationScreen: React.FC<Props> = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [isEveryday, setIsEveryday] = useState(false);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        BackHandler.exitApp();
        return true;
      },
    );

    return () => backHandler.remove();
  }, []);

  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  const toggleDay = (index: number) => {
    if (selectedDays.includes(index)) {
      setSelectedDays(selectedDays.filter(day => day !== index));
    } else {
      setSelectedDays([...selectedDays, index]);
    }
  };

  const toggleEveryday = () => {
    setIsEveryday(!isEveryday);
    if (!isEveryday) {
      setSelectedDays([0, 1, 2, 3, 4, 5, 6]);
    } else {
      setSelectedDays([]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <TouchableOpacity
          testID="back-button"
          onPress={() => BackHandler.exitApp()}
        >
          <Image source={images.chevronLeftIcon} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {cmsVerbiage?.notification_title}
        </Text>
      </View>
      <View style={styles.quietHoursContainer}>
        <View style={styles.quietHoursHeader}>
          <Text style={styles.quietHoursTitle}>
            {cmsVerbiage?.notification_quiet_hours_title}
          </Text>
          <Switch
            testID="quiet-hours-switch"
            value={isEnabled}
            onValueChange={setIsEnabled}
            circleSize={24}
            barHeight={30}
            circleBorderWidth={0}
            backgroundActive={'green'}
            backgroundInactive={'#999999'}
            circleActiveColor={'#FFFFFF'}
            circleInActiveColor={'#FFFFFF'}
            renderActiveText={false}
            renderInActiveText={false}
          />
        </View>
        <Text style={styles.quietHoursDescription}>
          {cmsVerbiage?.notification_quiet_hours_description}
        </Text>
      </View>
      <View style={styles.shadow} />
      <ScrollView>
        <View style={styles.daysContainer}>
          <View style={styles.daysHeader}>
            <Text style={styles.daysTitle}>
              {cmsVerbiage?.notification_choose_days}
            </Text>
            <TouchableOpacity
              testID="everyday-button"
              onPress={toggleEveryday}
              style={styles.everydayButton}
            >
              {isEveryday ? (
                <CheckedIcon />
              ) : (
                <Image source={images.unCheckedIcon} style={styles.uncheckIcon} />
              )}
              <Text style={styles.everydayText}>
                {cmsVerbiage?.notification_everyday}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.daysGrid}>
            {days.map((day, index) => (
              <TouchableOpacity
                testID="day-button"
                key={index}
                onPress={() => toggleDay(index)}
                style={[
                  styles.dayButton,
                  selectedDays.includes(index) && styles.selectedDayButton,
                ]}
              >
                <Text
                  style={[
                    styles.dayText,
                    selectedDays.includes(index) && styles.selectedDayText,
                  ]}
                >
                  {day}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.timePickerContainer}>
          <QuietHoursSlider onQuietHoursChange={(startHour, endHour) => {}} />
        </View>
      </ScrollView>
      <View style={styles.BottomButtonContainer}>
        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.applyButtonText}>
            {cmsVerbiage?.notification_apply_quiet_hours}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
