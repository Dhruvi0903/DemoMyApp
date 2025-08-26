import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export const HANDLE_SIZE = 44;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  sliderContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  handleInner: {
    width: HANDLE_SIZE - 8,
    height: HANDLE_SIZE - 8,
    borderRadius: (HANDLE_SIZE - 8) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellIcon: {
    width: 24,
    height: 24,
    // tintColor: '#FFFFFF',
  },
  bellSilentIcon: {
    width: 24,
    height: 24,
    // tintColor: '#FFFFFF',
  },
  centerText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -55 }, { translateY: -25 }],
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  durationText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
    letterSpacing: -1,
  },
  workDurationText: {
    fontSize: 12,
    color: '#BC8C80',
    marginTop: 4,
    fontWeight: '400',
  },
  quietHoursContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  quietHoursText: {
    fontSize: 14,
    color: '#BC8C80',
    fontWeight: '500',
    marginLeft: 8,
  },
  quietHoursIcon: {
    width: 16,
    height: 16,
  },
  quietHoursTime: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333333',
    letterSpacing: -0.5,
  },
});
