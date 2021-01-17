import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Home, Library, Premium, Search} from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color} from '../utils';

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={color.SILVER}
      style={{backgroundColor: color.BLACK}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: color.RED,
          tabBarIcon: () => <Icon name="music" color={color.WHITE} size={25} />,
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: () => (
            <Icon name="th-list" color={color.BLACK} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Premium"
        component={Premium}
        options={{
          tabBarLabel: 'Premium',
          tabBarIcon: () => (
            <Icon name="spotify" color={color.BLACK} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => (
            <Icon name="search-minus" color={color.BLACK} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
