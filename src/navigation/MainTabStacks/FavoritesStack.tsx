import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FavoritesScreen from 'screens/FavoritesScreen';

const FavoritesStackScreens = createNativeStackNavigator();

const FavoritesStack = () => (
  <FavoritesStackScreens.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <FavoritesStackScreens.Screen
      name="favorites"
      component={FavoritesScreen}
    />
  </FavoritesStackScreens.Navigator>
);

export default FavoritesStack;
