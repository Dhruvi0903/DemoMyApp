import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CircularSlider from '../../src/components/sliderCompoent/CircularSlider';

describe('CircularSlider', () => {
  const mockOnUpdate = jest.fn();
  const defaultProps = {
    onUpdate: mockOnUpdate,
    startAngle: 0,
    angleLength: Math.PI,
    segments: 5,
    strokeWidth: 40,
    radius: 145,
    gradientColorFrom: '#C4A69D',
    gradientColorTo: '#BC8C80',
    bgCircleColor: '#F5F5F5',
    showClockFace: true,
    clockFaceColor: '#9d9d9d',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    const { getByTestId } = render(<CircularSlider {...defaultProps} />);
    expect(getByTestId('circular-slider')).toBeTruthy();
  });

  it('renders with custom colors', () => {
    const customProps = {
      ...defaultProps,
      gradientColorFrom: '#FF0000',
      gradientColorTo: '#00FF00',
      bgCircleColor: '#0000FF',
    };
    const { getByTestId } = render(<CircularSlider {...customProps} />);
    expect(getByTestId('circular-slider')).toBeTruthy();
  });

  it('renders clock face when showClockFace is true', () => {
    const { getByTestId } = render(<CircularSlider {...defaultProps} showClockFace={true} />);
    expect(getByTestId('clock-face')).toBeTruthy();
  });

  it('does not render clock face when showClockFace is false', () => {
    const { queryByTestId } = render(<CircularSlider {...defaultProps} showClockFace={false} />);
    expect(queryByTestId('clock-face')).toBeNull();
  });

  it('calls onUpdate when dragging start handle', () => {
    const { getByTestId } = render(<CircularSlider {...defaultProps} />);
    const startHandle = getByTestId('start-handle');
    
    fireEvent(startHandle, 'responderGrant', {});
    fireEvent(startHandle, 'responderMove', {
      nativeEvent: { locationX: 100, locationY: 100 }
    });
    
    expect(mockOnUpdate).toHaveBeenCalled();
  });

  it('calls onUpdate when dragging end handle', () => {
    const { getByTestId } = render(<CircularSlider {...defaultProps} />);
    const endHandle = getByTestId('end-handle');
    
    fireEvent(endHandle, 'responderGrant', {});
    fireEvent(endHandle, 'responderMove', {
      nativeEvent: { locationX: 100, locationY: 100 }
    });
    
    expect(mockOnUpdate).toHaveBeenCalled();
  });

  it('renders correct number of segments', () => {
    const customSegments = 8;
    const { getAllByTestId } = render(
      <CircularSlider {...defaultProps} segments={customSegments} />
    );
    expect(getAllByTestId('gradient-segment')).toHaveLength(customSegments);
  });

  it('renders with custom radius and strokeWidth', () => {
    const customProps = {
      ...defaultProps,
      radius: 100,
      strokeWidth: 30,
    };
    const { getByTestId } = render(<CircularSlider {...customProps} />);
    const container = getByTestId('circular-slider');
    expect(container.props.style.width).toBe(customProps.strokeWidth + customProps.radius * 2 + 2);
  });
});
