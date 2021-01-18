import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Home, Library, Premium, Search} from '../screens';
import HomeStack from './HomeStack';

import Icon from 'react-native-vector-icons/FontAwesome';

import {useTheme} from '../utils/ThemeProvider';

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  const {colors, isDark} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      activeColor={colors.text}
      style={{backgroundColor: colors.background}}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: colors.background,
          tabBarIcon: () => (
            <Icon name="music" color={colors.error} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: 'Library',
          tabBarColor: colors.background,
          tabBarIcon: () => (
            <Icon name="th-list" color={colors.error} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Premium"
        component={Premium}
        options={{
          tabBarLabel: 'Premium',
          tabBarColor: colors.background,
          tabBarIcon: () => (
            <Icon name="spotify" color={colors.error} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: colors.background,
          tabBarIcon: () => (
            <Icon name="search-minus" color={colors.error} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
