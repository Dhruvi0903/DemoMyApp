import {StyleSheet, Dimensions} from 'react-native';
import Scaling from '../../utils/Scaling';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Scaling.hs(20),
    paddingTop: Scaling.vs(30),
    paddingBottom: Scaling.vs(20),
  },
  backButton: {
    height: Scaling.ms(24),
    width: Scaling.ms(24),
    marginRight: Scaling.hs(10),
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  quietHoursContainer: {
    paddingHorizontal: Scaling.hs(20),
    paddingVertical: Scaling.vs(15),
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    // elevation: Scaling.vs(5),
    zIndex: 1,
  },
  shadow: {
    elevation: Scaling.vs(5),
    shadowOffset: {
      width: 0,
      height: Scaling.vs(4),
    },
    shadowRadius: Scaling.vs(8),
    shadowOpacity: Scaling.hs(1),
    shadowColor: '#00000014',
    borderWidth: Scaling.hs(0.5),
    borderColor: '#00000014',
    borderStyle: 'solid',
    opacity: 1
  },
  quietHoursHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  quietHoursTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  quietHoursDescription: {
    fontSize: 12,
    color: '#666666',
    // lineHeight: 20,
    width: '78%',
  },
  daysContainer: {
    paddingHorizontal: Scaling.hs(20),
    marginTop: Scaling.vs(30),
  },
  daysHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Scaling.vs(20),
  },
  daysTitle: {
    fontSize: 16,
    color: '#666666',
  },
  everydayButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Scaling.ms(5),
  },
  everydayText: {
    fontSize: 14,
    color: '#000',
  },
  daysGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Scaling.vs(30),
  },
  dayButton: {
    width: Scaling.ms(40),
    height: Scaling.ms(40),
    borderRadius: 6,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDayButton: {
    backgroundColor: '#E3D5C9',
  },
  dayText: {
    fontSize: 14,
    color: '#000',
  },
  selectedDayText: {
    color: '#000000',
  },
  timePickerContainer: {
    alignItems: 'center',
    marginBottom: Scaling.vs(20),
  },
  circularTimer: {
    width: Scaling.ms(300),
    height: Scaling.ms(300),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  timeDisplay: {
    position: 'absolute',
    alignItems: 'center',
  },
  timeValue: {
    fontSize: 36,
    fontWeight: '600',
    marginBottom: Scaling.vs(5),
  },
  timeLabel: {
    fontSize: 14,
    color: '#666666',
  },
  quietHoursTime: {
    alignItems: 'center',
    marginTop: Scaling.vs(20),
  },
  quietHoursTimeText: {
    fontSize: 14,
    color: '#666666',
    marginBottom: Scaling.vs(5),
  },
  quietHoursTimeValue: {
    fontSize: 24,
    fontWeight: '600',
  },
  applyButton: {
    backgroundColor: '#E3D5C9',
    // marginHorizontal: Scaling.hs(20),
    padding: Scaling.ms(15),
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    // position: 'absolute',
    // bottom: Scaling.vs(30),
    // left: 0,
    // right: 0,
  },
  BottomButtonContainer: {
    alignItems: 'center',
    marginBottom: Scaling.vs(16),
    // position: 'absolute',
    // bottom: Scaling.vs(30),
    // left: 0,
    // right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: Scaling.hs(1),
    borderTopColor: '#00000014',
    borderStyle: 'solid',
    opacity: 1,
    paddingHorizontal: Scaling.hs(20),
    paddingVertical: Scaling.vs(20),
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  checkIcon: {
    width: Scaling.ms(18),
    height: Scaling.ms(18),
    marginRight: Scaling.hs(3),
  },
  uncheckIcon: {
    width: Scaling.ms(20),
    height: Scaling.ms(20),
    marginRight: Scaling.hs(3),
  },
  bellIcon: {
    width: Scaling.ms(20),
    height: Scaling.ms(20),
  },
});
