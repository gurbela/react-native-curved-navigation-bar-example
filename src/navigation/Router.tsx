import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainStack from './MainTabStacks/MainStack';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          gestureEnabled: false,
          title: '',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

          headerStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
        })}
       >
        <Stack.Screen
          name="mainStack"
          component={MainStack}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
