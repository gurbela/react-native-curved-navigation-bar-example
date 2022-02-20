import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FeedScreen from 'screens/FeedScreen';

const FeedStackScreens = createNativeStackNavigator();

const FeedStack = () => (
  <FeedStackScreens.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <FeedStackScreens.Screen name="feed" component={FeedScreen} />
  </FeedStackScreens.Navigator>
);

export default FeedStack;
