import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SettingsScreen from 'screens/ProfileScreen';

const SettingsStackScreens = createNativeStackNavigator();

const SettingsStack = () => (
  <SettingsStackScreens.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <SettingsStackScreens.Screen name="settings" component={SettingsScreen} />
  </SettingsStackScreens.Navigator>
);

export default SettingsStack;
