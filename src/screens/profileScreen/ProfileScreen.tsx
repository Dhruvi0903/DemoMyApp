import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import styles from './ProfileScreen.style';
import images from '../../assets';
import Scaling from '../../utils/Scaling';
import { fetchProfile } from '../../redux/actions/profile.actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { cmsVerbiage } from '../../cmsData/cmsVerbiage';
import { profileAnalysisData } from './ProfileScreen.const';

const screenWidth = Dimensions.get('window').width;

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(state => state.profile);
  const MyProfileData = profileAnalysisData?.myProfile?.mingleAnalysis;
  const ProfileAnalysisData = MyProfileData?.profileAnalysis;
  const ConversationAnalysis = MyProfileData?.conversationAnalysis;

  console.log('data.profile...', data, loading, error);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const lineChartData = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(212, 184, 166, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const barChartData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        data: [2.5, 3.8, 3.5, 2.8, 3.6, 4.2, 3.4],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(212, 184, 166, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    decimalPlaces: 0,
    labelColor: (opacity = 1) => `rgba(6, 6, 6, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: '#e3e3e3',
      strokeDasharray: '0',
    },
  };

  if (loading) {
    return (
      <SafeAreaView style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color="#D4B8A6" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={[styles.container, styles.centerContent]}>
        <Text style={styles.errorText}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.chevronLeftIcon} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{cmsVerbiage?.profile_title}</Text>
      </View>
      <Text style={styles.sectionTitle}>{cmsVerbiage?.profile_subtitle}</Text>
      <View style={styles.divider} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileAnalysis}>
          <View style={styles.infoHeader}>
            <Text style={styles.infoTitle}>
              {cmsVerbiage?.profile_analysis}
            </Text>
            <TouchableOpacity>
              <Text style={styles.infoIcon}>i</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.statsGrid}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>
                {cmsVerbiage?.profile_analysis_views}
              </Text>
              <View style={styles.statValue}>
                <Image
                  source={images.dropDownIcon}
                  style={[styles.dropdownIcon, styles.transform]}
                />
                <Text style={styles.statNumber}>
                  {ProfileAnalysisData?.profileViews?.growth}
                </Text>
                <Text style={styles.statPeriod}>
                  {ProfileAnalysisData?.profileViews?.period}
                </Text>
              </View>
              <View style={styles.chartContainer}>
                <LineChart
                  data={lineChartData}
                  width={screenWidth * 0.4}
                  height={100}
                  chartConfig={chartConfig}
                  bezier
                  withDots={false}
                  withInnerLines={false}
                  withOuterLines={false}
                  withVerticalLines={false}
                  withHorizontalLines={false}
                  withVerticalLabels={false}
                  withHorizontalLabels={false}
                />
              </View>
            </View>

            <View style={styles.statBox1}>
              <Text style={styles.statLabel1}>
                {cmsVerbiage?.profile_analysis_matches}
              </Text>
              <View style={styles.statValue}>
                <Image
                  source={images.dropDownIcon}
                  style={styles.dropdownIcon}
                />
                <Text style={styles.statNumber}>
                  {ProfileAnalysisData?.profileMatches?.growth}
                </Text>
                <Text style={styles.statPeriod1}>
                  {ProfileAnalysisData?.profileMatches?.period}
                </Text>
              </View>
              <View style={styles.chartContainer}>
                <LineChart
                  data={lineChartData}
                  width={screenWidth * 0.4}
                  height={100}
                  chartConfig={{
                    ...chartConfig,
                    color: (opacity = 1) => `rgba(255, 192, 203, ${opacity})`,
                  }}
                  bezier
                  withDots={false}
                  withInnerLines={false}
                  withOuterLines={false}
                  withVerticalLines={false}
                  withHorizontalLines={false}
                  withVerticalLabels={false}
                  withHorizontalLabels={false}
                />
              </View>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statLabel}>
                {cmsVerbiage?.profile_analysis_saved}
              </Text>
              <View style={styles.statValue}>
                <Text style={styles.statNumber}>
                  {ProfileAnalysisData?.profileSaved?.growth}
                </Text>
                <Text style={styles.statPeriod}>
                  {ProfileAnalysisData?.profileSaved?.period}
                </Text>
              </View>
              <View style={styles.chartContainer}>
                <LineChart
                  data={lineChartData}
                  width={screenWidth * 0.4}
                  height={100}
                  chartConfig={chartConfig}
                  bezier
                  withDots={false}
                  withInnerLines={false}
                  withOuterLines={false}
                  withVerticalLines={false}
                  withHorizontalLines={false}
                  withVerticalLabels={false}
                  withHorizontalLabels={false}
                />
              </View>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statLabel}>
                {cmsVerbiage?.profile_strength}
              </Text>
              <View style={styles.statValue}>
                <Text style={styles.statNumber}>
                  {ProfileAnalysisData?.profileStrength?.percentage}
                </Text>
              </View>
              <TouchableOpacity style={styles.completeProfile}>
                <Text style={styles.completeProfileText}>
                  {ProfileAnalysisData?.profileStrength?.status}
                </Text>
                <Image source={images.rightIcon} style={styles.rightIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.infoHeader}>
          <Text style={styles.infoTitle}>
            {cmsVerbiage?.profile_coversionTitle}
          </Text>
          <TouchableOpacity>
            <Text style={styles.infoIcon}>i</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.conversationAnalysis}>
          <View style={styles.conversationHeader}>
            <Text style={styles.conversationTitle}>
              {cmsVerbiage?.profile_coversion_hours}
            </Text>
            <View style={styles.timeValue}>
              <Text style={styles.timeNumber}>
                {ConversationAnalysis?.averageConversationHours?.time}
              </Text>
              <Text style={styles.timePeriod}>
                {ConversationAnalysis?.averageConversationHours?.period}
              </Text>
            </View>
          </View>

          <View style={styles.barChartContainer}>
            <BarChart
              data={barChartData}
              width={Scaling.ms(300)}
              height={200}
              chartConfig={chartConfig}
              showBarTops={true}
              fromZero
              withInnerLines={false}
              showValuesOnTopOfBars={false}
              style={{}}
            />
          </View>

          <View style={styles.trendContainer}>
            <Image source={images.dropDownIcon} style={styles.dropdownIcon} />
            <Text style={styles.trendValue}>
              {ConversationAnalysis?.growth}
            </Text>
            <Text style={styles.trendPeriod}>
              {ConversationAnalysis?.comparison}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
