// Mock @react-navigation
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
    useRoute: () => ({
      params: {},
    }),
  };
});

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: jest.fn(),
    Screen: jest.fn(),
  }),
}));

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Mock react-native-svg
jest.mock('react-native-svg', () => {
  const React = require('react');
  const { View } = require('react-native');

  const createComponent = (name) => {
    return React.forwardRef((props, ref) => {
      return React.createElement(View, {
        testID: props.testID,
        ...props,
        ref,
      });
    });
  };

  const components = [
    'Circle',
    'Ellipse',
    'G',
    'LinearGradient',
    'RadialGradient',
    'Line',
    'Path',
    'Polygon',
    'Polyline',
    'Rect',
    'Symbol',
    'Text',
    'Use',
    'Defs',
    'Stop',
    'Svg',
  ];

  const exportObject = {};

  components.forEach((component) => {
    exportObject[component] = createComponent(component);
  });

  return exportObject;
});

// Mock react-native-linear-gradient
jest.mock('react-native-linear-gradient', () => {
  const { View } = require('react-native');
  return View;
});

// Mock react-native-chart-kit
jest.mock('react-native-chart-kit', () => ({
  LineChart: 'LineChart',
  BarChart: 'BarChart',
}));