import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabBar from './TabParts/TabBar';
import FeedStack from './FeedStack';
import FavoritesStack from './FavoritesStack';
import AddPostStack from './AddPostStack';
import NotificationStack from './NotificationStack';
import SettingsStack from './SettingsStack';

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="newsFeed"
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="newsFeed"
        component={FeedStack}
        options={{
          tabBarLabel: 'Feed',
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="favoritesStack"
        component={FavoritesStack}
        options={{
          tabBarLabel: 'Favorites',
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="addPostStack"
        options={{
          tabBarLabel: 'Post',
          unmountOnBlur: true,
          headerShown: false,
        }}
        component={AddPostStack}
      />
      <Tab.Screen
        name="notificationsStack"
        component={NotificationStack}
        options={{
          tabBarLabel: 'Notifications',
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="settingsStack"
        component={SettingsStack}
        options={{
          tabBarLabel: 'Settings',
          unmountOnBlur: false,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;
