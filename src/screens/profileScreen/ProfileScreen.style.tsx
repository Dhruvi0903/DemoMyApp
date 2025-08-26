import {StyleSheet} from 'react-native';
import Scaling from '../../utils/Scaling';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#F44336',
    fontSize: 16,
    textAlign: 'center',
  },
  userInfo: {
    padding: Scaling.ms(20),
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: Scaling.vs(5),
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: Scaling.vs(5),
  },
  userBio: {
    fontSize: 14,
    color: '#999',
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
    marginBottom: Scaling.vs(20),
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Scaling.vs(20),
    paddingHorizontal: Scaling.hs(20),
  },
  infoTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
  },
  infoIcon: {
    marginLeft: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    textAlign: 'center',
    color: '#666',
    backgroundColor: '#DDDDDD'
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statBox: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: Scaling.vs(15),
    borderColor: '#d8c19f',
    borderWidth: 1,
  },
  statBox1: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: Scaling.vs(15),
    borderColor: '#e5bcb6',
    borderWidth: 1,
  },
  statLabel: {
    fontSize: 16,
    color: '#d8c19f',
    marginBottom: 10,
    fontWeight: '500',
    marginHorizontal: Scaling.hs(10),
    paddingVertical: Scaling.vs(10),
    borderBottomWidth: 1,
    borderBottomColor: '#d8c19f',
  },
  statLabel1: {
    fontSize: 16,
    color: '#e5bcb6',
    marginBottom: 10,
    fontWeight: '500',    
    marginHorizontal: Scaling.hs(10),
    paddingVertical: Scaling.vs(10),
    borderBottomWidth: 1,
    borderBottomColor: '#e5bcb6',
  },
  statValue: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: Scaling.hs(10),
  },
  trendUp: {
    color: '#4CAF50',
    marginRight: 5,
  },
  trendDown: {
    color: '#F44336',
    marginRight: 5,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '500',
    marginRight: 5,
  },
  statPeriod: {
    fontSize: 12,
    color: '#d8c19f',
    fontWeight: '500',
  },
  statPeriod1: {
    fontSize: 12,
    color: '#e5bcb6',
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
    color: '#d8c19f',
    fontWeight: '500',
    marginRight: Scaling.hs(5),
  },
  completeProfileArrow: {
    color: '#999',
  },
  conversationAnalysis: {
    paddingHorizontal: Scaling.hs(10),
    borderWidth: 1,
    borderColor: '#E0E0E0',
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
    color: '#999',
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
    color: '#999',
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
    color: '#e5bcb6',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginTop: Scaling.vs(20),
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
