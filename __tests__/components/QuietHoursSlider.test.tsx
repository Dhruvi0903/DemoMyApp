import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import QuietHoursSlider from '../../src/components/quietHoursSlider/QuietHoursSlider';
import { cmsVerbiage } from '../../src/cmsData/cmsVerbiage';

jest.mock('../../src/cmsData/cmsVerbiage', () => ({
  cmsVerbiage: {
    notification_work_duration: 'Work Duration',
    notification_quiet_hours: 'Quiet Hours',
  },
}));

describe('QuietHoursSlider', () => {
  const mockOnQuietHoursChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    const { getByText, getByTestId } = render(<QuietHoursSlider />);
    
    expect(getByTestId('quiet-hours-slider')).toBeTruthy();
    expect(getByText(cmsVerbiage.notification_quiet_hours)).toBeTruthy();
    expect(getByText(cmsVerbiage.notification_work_duration)).toBeTruthy();
  });

  it('displays correct initial time range', () => {
    const { getByText } = render(<QuietHoursSlider />);
    expect(getByText('6am - 4pm')).toBeTruthy();
  });

  it('displays correct duration', () => {
    const { getByText } = render(<QuietHoursSlider />);
    // Default is 6am to 4pm = 10 hours
    expect(getByText('10h')).toBeTruthy();
  });

  it('calls onQuietHoursChange when time range changes', () => {
    const { getByTestId } = render(
      <QuietHoursSlider onQuietHoursChange={mockOnQuietHoursChange} />
    );
    
    const slider = getByTestId('circular-slider');
    fireEvent(slider, 'update', { startAngle: Math.PI / 2, angleLength: Math.PI });
    
    expect(mockOnQuietHoursChange).toHaveBeenCalled();
  });

  it('formats hours correctly', () => {
    const { getByText } = render(<QuietHoursSlider />);
    
    // Test different time formats
    const timeText = getByText('6am - 4pm');
    expect(timeText).toBeTruthy();
  });

  it('handles 12-hour format edge cases', () => {
    const { getByTestId } = render(
      <QuietHoursSlider onQuietHoursChange={mockOnQuietHoursChange} />
    );
    
    // Simulate setting time to midnight and noon
    const slider = getByTestId('circular-slider');
    
    // Set to midnight (0:00)
    fireEvent(slider, 'update', { startAngle: 0, angleLength: Math.PI / 2 });
    expect(mockOnQuietHoursChange).toHaveBeenCalledWith(0, 6);
    
    // Set to noon (12:00)
    fireEvent(slider, 'update', { startAngle: Math.PI, angleLength: Math.PI / 2 });
    expect(mockOnQuietHoursChange).toHaveBeenCalledWith(12, 18);
  });

  it('updates time range when slider is moved', () => {
    const { getByTestId } = render(
      <QuietHoursSlider onQuietHoursChange={mockOnQuietHoursChange} />
    );
    
    const slider = getByTestId('circular-slider');
    
    // Simulate moving the slider to a new position
    fireEvent(slider, 'update', { startAngle: Math.PI / 4, angleLength: Math.PI });
    
    expect(mockOnQuietHoursChange).toHaveBeenCalled();
  });

  it('handles full 24-hour range', () => {
    const { getByTestId } = render(
      <QuietHoursSlider onQuietHoursChange={mockOnQuietHoursChange} />
    );
    
    const slider = getByTestId('circular-slider');
    
    // Simulate setting a full 24-hour range
    fireEvent(slider, 'update', { startAngle: 0, angleLength: 2 * Math.PI });
    
    expect(mockOnQuietHoursChange).toHaveBeenCalled();
  });
});
