import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../src/navigation/types';
import { cmsVerbiage } from '../../src/cmsData/cmsVerbiage';
import NotificationScreen from '../../src/screens/notificationScreen/NotificationScreen';

// Mock the QuietHoursSlider component
jest.mock('../src/components/quietHoursSlider/QuietHoursSlider', () => {
  return function MockQuietHoursSlider(props: any) {
    return require('react-native').View;
  };
});

// Mock the images
jest.mock('../src/assets', () => ({
  chevronLeftIcon: 'chevronLeftIcon',
  checkBoxSelected: 'checkBoxSelected',
  checkBox: 'checkBox',
}));

// Create a partial mock navigation object with required methods
const mockNavigation: Partial<NativeStackNavigationProp<RootStackParamList, 'Notification'>> = {
  goBack: jest.fn(),
  navigate: jest.fn(),
  dispatch: jest.fn(),
  reset: jest.fn(),
  setParams: jest.fn(),
  setOptions: jest.fn(),
  isFocused: jest.fn(() => true),
  addListener: jest.fn(),
  removeListener: jest.fn(),
  canGoBack: jest.fn(() => true),
  getParent: jest.fn(),
  getState: jest.fn(),
};

describe('NotificationScreen', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders correctly with initial state', () => {
    const { getByText, getByTestId } = render(
      <NotificationScreen navigation={mockNavigation as NativeStackNavigationProp<RootStackParamList, 'Notification'>} />
    );

    // Check if main title is rendered
    expect(getByText(cmsVerbiage.notification_title)).toBeTruthy();

    // Check if quiet hours section is rendered
    expect(getByText(cmsVerbiage.notification_quiet_hours_title)).toBeTruthy();
    expect(getByText(cmsVerbiage.notification_quiet_hours_description)).toBeTruthy();

    // Check if days section is rendered
    expect(getByText(cmsVerbiage.notification_choose_days)).toBeTruthy();
    expect(getByText(cmsVerbiage.notification_everyday)).toBeTruthy();

    // Check if all days are rendered
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    days.forEach(day => {
      expect(getByText(day)).toBeTruthy();
    });

    // Check if apply button is rendered
    expect(getByText(cmsVerbiage.notification_apply_quiet_hours)).toBeTruthy();
  });

  it('handles navigation correctly', () => {
    const { getByTestId, getByText } = render(
      <NotificationScreen navigation={mockNavigation as NativeStackNavigationProp<RootStackParamList, 'Notification'>} />
    );

    // Test back navigation
    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);
    expect(mockNavigation.goBack).toHaveBeenCalled();

    // Test navigation to Profile screen
    const applyButton = getByText(cmsVerbiage.notification_apply_quiet_hours);
    fireEvent.press(applyButton);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Profile');
  });

  it('toggles quiet hours switch correctly', () => {
    const { getByTestId } = render(
      <NotificationScreen navigation={mockNavigation as NativeStackNavigationProp<RootStackParamList, 'Notification'>} />
    );

    const quietHoursSwitch = getByTestId('quiet-hours-switch');
    
    // Test switch toggle
    fireEvent(quietHoursSwitch, 'valueChange', true);
    expect(quietHoursSwitch.props.value).toBe(true);

    fireEvent(quietHoursSwitch, 'valueChange', false);
    expect(quietHoursSwitch.props.value).toBe(false);
  });

  it('handles day selection correctly', () => {
    const { getAllByTestId } = render(
      <NotificationScreen navigation={mockNavigation as NativeStackNavigationProp<RootStackParamList, 'Notification'>} />
    );

    const dayButtons = getAllByTestId('day-button');
    
    // Test selecting a single day
    fireEvent.press(dayButtons[0]);
    expect(dayButtons[0].props.style).toContainEqual(
      expect.objectContaining({ backgroundColor: expect.any(String) })
    );

    // Test deselecting a day
    fireEvent.press(dayButtons[0]);
    expect(dayButtons[0].props.style).not.toContainEqual(
      expect.objectContaining({ backgroundColor: expect.any(String) })
    );
  });

  it('handles everyday toggle correctly', () => {
    const { getByTestId, getAllByTestId } = render(
      <NotificationScreen navigation={mockNavigation as NativeStackNavigationProp<RootStackParamList, 'Notification'>} />
    );

    const everydayButton = getByTestId('everyday-button');
    const dayButtons = getAllByTestId('day-button');

    // Test selecting everyday
    fireEvent.press(everydayButton);
    dayButtons.forEach(button => {
      expect(button.props.style).toContainEqual(
        expect.objectContaining({ backgroundColor: expect.any(String) })
      );
    });

    // Test deselecting everyday
    fireEvent.press(everydayButton);
    dayButtons.forEach(button => {
      expect(button.props.style).not.toContainEqual(
        expect.objectContaining({ backgroundColor: expect.any(String) })
      );
    });
  });

  it('maintains selected days state correctly', () => {
    const { getAllByTestId } = render(
      <NotificationScreen navigation={mockNavigation as NativeStackNavigationProp<RootStackParamList, 'Notification'>} />
    );

    const dayButtons = getAllByTestId('day-button');

    // Select multiple days
    fireEvent.press(dayButtons[0]);
    fireEvent.press(dayButtons[2]);
    fireEvent.press(dayButtons[4]);

    expect(dayButtons[0].props.style).toContainEqual(
      expect.objectContaining({ backgroundColor: expect.any(String) })
    );
    expect(dayButtons[2].props.style).toContainEqual(
      expect.objectContaining({ backgroundColor: expect.any(String) })
    );
    expect(dayButtons[4].props.style).toContainEqual(
      expect.objectContaining({ backgroundColor: expect.any(String) })
    );

    // Deselect a day
    fireEvent.press(dayButtons[2]);
    expect(dayButtons[2].props.style).not.toContainEqual(
      expect.objectContaining({ backgroundColor: expect.any(String) })
    );

    // Other days should remain selected
    expect(dayButtons[0].props.style).toContainEqual(
      expect.objectContaining({ backgroundColor: expect.any(String) })
    );
    expect(dayButtons[4].props.style).toContainEqual(
      expect.objectContaining({ backgroundColor: expect.any(String) })
    );
  });
});