import React, {useEffect, useState} from 'react';
import {Animated, Dimensions, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Path, Svg} from 'react-native-svg';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Route} from '@react-navigation/native';

import {getTabShape} from './TabShape';
import renderTabBarIcon from './services';

import {style, TAB_BAR_HEIGHT} from './styles';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const tabWidth = 110;

export const defaultSpringConfig = {
  damping: 40,
  mass: 1,
  stiffness: 350,
};

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const [{width, height}, setDimensions] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });
  const {bottom} = useSafeAreaInsets();
  const d = getTabShape(width, height, tabWidth, TAB_BAR_HEIGHT);

  const tabsWidthValue = React.useMemo(
    () => width / state.routes.length,
    [width, state.routes],
  );
  const tabsRealWidth = width / state.routes.length;

  const [animatedValueLength] = useState(
    new Animated.Value(-width + tabsWidthValue * state.index),
  );

  const offset =
    tabsRealWidth < tabWidth
      ? tabWidth - tabsRealWidth
      : (tabsRealWidth - tabWidth) * -1;

  useEffect(() => {
    const newValue = -width + tabsWidthValue * state.index;

    Animated.spring(animatedValueLength, {
      toValue: newValue - offset / 2,
      ...defaultSpringConfig,
      useNativeDriver: true,
    }).start();
  }, [width, height, state, tabsWidthValue, offset, animatedValueLength]);

  const [animationValueThreshold] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(animationValueThreshold, {
      toValue: state.index,
      ...defaultSpringConfig,
      useNativeDriver: true,
    }).start();
  }, [animationValueThreshold, state.index]);

  return (
    <View
      onLayout={({
        nativeEvent: {
          layout: {height: lHeight, width: lWidth},
        },
      }) => {
        setDimensions({width: lWidth, height: lHeight});
      }}
      style={[
        style.container,
        {
          marginBottom: (bottom > 0 && bottom - 24) || 0,
          height: TAB_BAR_HEIGHT,
        },
      ]}>
      {bottom > 0 && (
        <View
          style={[
            {
              height: bottom,
              backgroundColor: '#fff',
              bottom: bottom * -1,
            },
            style.bottomFill,
          ]}
        />
      )}
      <View
        style={[
          {
            elevation: 11,
            zIndex: 0,
            backgroundColor: 'transparent',
            position: 'absolute',
          },
        ]}>
        <AnimatedSvg
          width={width * 2.5}
          height={height + bottom}
          style={{
            position: 'relative',
            transform: [{translateX: animatedValueLength}],
          }}>
          <Path d={d} fill={'#fff'} />
        </AnimatedSvg>
      </View>
      {state.routes.map((route: Route<any>, index: number) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            style={style.wrapper}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            activeOpacity={0.6}>
            {renderTabBarIcon(isFocused, label)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
