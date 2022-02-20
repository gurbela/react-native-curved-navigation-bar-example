import React from 'react';
import {View} from 'react-native';

import FeedIcon from '@tab/feed.svg';
import AddPostIcon from '@tab/add.svg';
import FavoriteIcon from '@tab/favorites.svg';
import NotificationIcon from '@tab/notification.svg';
import LockIcon from '@tab/lock.svg';

import {style} from './styles';

export enum TabBarEnum {
  Feed = 'Feed',
  Favorites = 'Favorites',
  Post = 'Post',
  Notifications = 'Notifications',
  Settings = 'Settings',
}

const renderTabBarIcon = (isFocused: boolean, labal: string) => {
  let tabIcon = (
    <View style={[style.activeIconStyle]}>
      <FeedIcon />
    </View>
  );

  switch (labal) {
    case TabBarEnum.Feed: {
      tabIcon = (
        <View style={[isFocused && style.activeIconStyle]}>
          <FeedIcon />
        </View>
      );
      break;
    }
    case TabBarEnum.Favorites: {
      tabIcon = (
        <View style={[isFocused && style.activeIconStyle]}>
          <FavoriteIcon />
        </View>
      );
      break;
    }
    case TabBarEnum.Post: {
      tabIcon = (
        <View style={[isFocused && style.activeIconStyle]}>
          <AddPostIcon />
        </View>
      );
      break;
    }
    case TabBarEnum.Notifications: {
      tabIcon = (
        <View style={[isFocused && style.activeIconStyle]}>
          <NotificationIcon />
        </View>
      );
      break;
    }
    case TabBarEnum.Settings: {
      tabIcon = (
        <View style={[isFocused && style.activeIconStyle]}>
          <LockIcon />
        </View>
      );
      break;
    }
    default: {
      tabIcon = (
        <View style={[style.activeIconStyle]}>
          <FeedIcon />
        </View>
      );
    }
  }
  return tabIcon;
};

export default renderTabBarIcon;
