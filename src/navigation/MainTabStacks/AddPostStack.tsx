import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AddPostScreen from 'screens/AddPostScreen';

const AddPostStackScreens = createNativeStackNavigator();

const AddPostStack = () => (
  <AddPostStackScreens.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AddPostStackScreens.Screen name="addPost" component={AddPostScreen} />
  </AddPostStackScreens.Navigator>
);

export default AddPostStack;
