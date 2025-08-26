import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import ProfileScreen from '../../src/screens/profileScreen/ProfileScreen';
import { fetchProfile } from '../../src/redux/slices/profileSlice';
import { profileAnalysisData } from '../../src/screens/profileScreen/ProfileScreen.const';
import { cmsVerbiage } from '../../src/cmsData/cmsVerbiage';

// Mock the redux store
const mockStore = configureStore({
  reducer: {
    profile: (state = {}, action: { type: string }) => state
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

// Mock navigation
const mockNavigation = {
  goBack: jest.fn(),
};

// Mock cmsVerbiage
jest.mock('../../cmsData/cmsVerbiage', () => ({
  cmsVerbiage: {
    profile_title: 'Profile',
    profile_subtitle: 'Profile Subtitle',
    profile_analysis: 'Profile Analysis',
    profile_analysis_views: 'Profile Views',
    profile_analysis_matches: 'Profile Matches',
    profile_analysis_saved: 'Profile Saved',
    profile_strength: 'Profile Strength',
    profile_coversionTitle: 'Conversion Title',
    profile_coversion_hours: 'Conversion Hours',
  },
}));

// Mock react-native-chart-kit
jest.mock('react-native-chart-kit', () => ({
  LineChart: 'LineChart',
  BarChart: 'BarChart',
}));

describe('ProfileScreen', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      profile: {
        isLoading: false,
        error: null,
        data: profileAnalysisData,
      },
    });
    jest.clearAllMocks();
  });

  it('renders loading state correctly', () => {
    store = mockStore({
      profile: {
        isLoading: true,
        error: null,
        data: null,
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <ProfileScreen navigation={mockNavigation} />
      </Provider>
    );

    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('renders error state correctly', () => {
    const errorMessage = 'Failed to load profile';
    store = mockStore({
      profile: {
        isLoading: false,
        error: errorMessage,
        data: null,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <ProfileScreen navigation={mockNavigation} />
      </Provider>
    );

    expect(getByText(errorMessage)).toBeTruthy();
  });

  it('renders profile data correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ProfileScreen navigation={mockNavigation} />
      </Provider>
    );

    expect(getByText(cmsVerbiage.profile_title)).toBeTruthy();
    expect(getByText(cmsVerbiage.profile_analysis)).toBeTruthy();
    expect(getByText(cmsVerbiage.profile_analysis_views)).toBeTruthy();
  });

  it('dispatches fetchProfile on mount', () => {
    render(
      <Provider store={store}>
        <ProfileScreen navigation={mockNavigation} />
      </Provider>
    );

    const actions = store.getActions();
    expect(actions).toContainEqual(expect.objectContaining({
      type: fetchProfile.pending.type,
    }));
  });

  it('handles navigation back', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ProfileScreen navigation={mockNavigation} />
      </Provider>
    );

    fireEvent.press(getByTestId('back-button'));
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });

  it('renders charts correctly', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <ProfileScreen navigation={mockNavigation} />
      </Provider>
    );

    expect(getAllByTestId('line-chart')).toHaveLength(3); // Three line charts
    expect(getAllByTestId('bar-chart')).toHaveLength(1); // One bar chart
  });

  it('displays profile strength correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ProfileScreen navigation={mockNavigation} />
      </Provider>
    );

    const strengthPercentage = profileAnalysisData.myProfile.mingleAnalysis.profileAnalysis.profileStrength.percentage;
    expect(getByText(strengthPercentage)).toBeTruthy();
  });

  it('displays conversation analysis data correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ProfileScreen navigation={mockNavigation} />
      </Provider>
    );

    const conversationData = profileAnalysisData.myProfile.mingleAnalysis.conversationAnalysis;
    expect(getByText(conversationData.averageConversationHours.time)).toBeTruthy();
    expect(getByText(conversationData.growth)).toBeTruthy();
  });

  it('handles profile completion button press', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ProfileScreen navigation={mockNavigation} />
      </Provider>
    );

    const completeProfileButton = getByTestId('complete-profile-button');
    fireEvent.press(completeProfileButton);
    // Add assertions for what should happen when button is pressed
  });
});
