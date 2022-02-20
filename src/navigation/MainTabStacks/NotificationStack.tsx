import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NotificationScreen from 'screens/NotificationScreen';

const NotificationScreens = createNativeStackNavigator();

const NotificationStack = () => (
  <NotificationScreens.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <NotificationScreens.Screen
      name="notification"
      component={NotificationScreen}
    />
  </NotificationScreens.Navigator>
);

export default NotificationStack;
