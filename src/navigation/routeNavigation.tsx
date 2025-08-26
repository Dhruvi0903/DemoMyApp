import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationScreen from '../screens/notificationScreen/NotificationScreen';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function RouteNavigation() {
  return (
    <Stack.Navigator initialRouteName="Notification">
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: 'Notification',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
