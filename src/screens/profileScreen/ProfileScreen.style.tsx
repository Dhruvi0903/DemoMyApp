import {StyleSheet} from 'react-native';
import Scaling from '../../utils/Scaling';
import { Colors } from '../../utils/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  gradientBeige: {
    ...StyleSheet.absoluteFillObject,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: Colors.error,
    fontSize: 16,
    textAlign: 'center',
  },
  userInfo: {
    padding: Scaling.ms(20),
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray1,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: Scaling.vs(5),
  },
  userEmail: {
    fontSize: 16,
    color: Colors.darkGray,
    marginBottom: Scaling.vs(5),
  },
  userBio: {
    fontSize: 14,
    color: Colors.gray,
  },
  scrollView: {
    flex: 1,
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
  },
  profileAnalysis: {
    marginTop: Scaling.vs(20),
    paddingHorizontal: Scaling.hs(20),
    marginBottom: Scaling.vs(5),
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Scaling.vs(20),
    paddingHorizontal: Scaling.hs(20),
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Scaling.vs(20),
  },
  infoTitle: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '500',
  },
  infoIcon: {
    marginLeft: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    textAlign: 'center',
    color: Colors.darkGray,
    backgroundColor: Colors.lightGray2,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statBox: {
    width: '48%',
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginBottom: Scaling.vs(15),
    borderColor: Colors.tertiary,
    borderWidth: 1,
  },
  statBox1: {
    width: '48%',
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginBottom: Scaling.vs(15),
    borderColor: Colors.secondary1,
    borderWidth: 1,
  },
  statLabel: {
    fontSize: 16,
    color: Colors.tertiary,
    marginBottom: 10,
    fontWeight: '500',
    marginHorizontal: Scaling.hs(10),
    paddingVertical: Scaling.vs(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.tertiary,
  },
  statLabel1: {
    fontSize: 16,
    color: Colors.secondary1,
    marginBottom: 10,
    fontWeight: '500',    
    marginHorizontal: Scaling.hs(10),
    paddingVertical: Scaling.vs(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary1,
  },
  statValue: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: Scaling.hs(10),
  },
  trendUp: {
    color: Colors.green,
    marginRight: 5,
  },
  trendDown: {
    color: Colors.error,
    marginRight: 5,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '500',
    marginRight: 5,
  },
  statPeriod: {
    fontSize: 12,
    color: Colors.tertiary,
    fontWeight: '500',
  },
  statPeriod1: {
    fontSize: 12,
    color: Colors.secondary1,
    fontWeight: '500',
  },
  chartContainer: {
    width: '100%',
    marginLeft: 5,
    borderBottomLeftRadius: Scaling.ms(8),
    borderBottomRightRadius: Scaling.ms(8),
  },
  completeProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: Scaling.vs(10),
    right: 0,
    width: '100%',
    paddingHorizontal: Scaling.hs(10),
  },
  completeProfileText: {
    color: Colors.tertiary,
    fontWeight: '500',
    marginRight: Scaling.hs(5),
  },
  completeProfileArrow: {
    color: Colors.gray,
  },
  conversationAnalysis: {
    paddingHorizontal: Scaling.hs(10),
    borderWidth: 1,
    borderColor: Colors.lightGray1,
    marginHorizontal: Scaling.hs(20),
    borderRadius: Scaling.ms(8),
    marginBottom: Scaling.vs(70),
  },
  conversationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Scaling.vs(10),
  },
  conversationTitle: {
    fontSize: 12,
    color: Colors.gray,
    fontWeight: '500',
    marginBottom: 10,
  },
  timeValue: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  timeNumber: {
    fontSize: 20,
    fontWeight: '500',
    marginRight: 5,
  },
  timePeriod: {
    fontSize: 12,
    color: Colors.gray,
  },
  barChartContainer: {
    marginBottom: 10,
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  trendValue: {
    fontSize: 20,
    fontWeight: '500',
    marginRight: 5,
  },
  trendPeriod: {
    fontSize: 12,
    color: Colors.secondary1,
    fontWeight: '500',
  },
  divider: {
    height: 0.5,
    marginTop: Scaling.vs(20),
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: Scaling.vs(3),
    zIndex: 1,
  },
  divider1: {
    elevation: Scaling.vs(1),
    marginBottom: Scaling.vs(20),
  },
  dropdownIcon: {
    width: Scaling.ms(24),
    height: Scaling.ms(24),
  },
  rightIcon: {
    width: Scaling.ms(10),
    height: Scaling.ms(10),
  },
  transform: {
    transform: [{ rotate: '180deg' }],
  }
});
