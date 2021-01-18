import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, AlbumScreen} from '../screens';
import {useTheme} from '../utils/ThemeProvider';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

function HomeStack() {
  const {colors, isDark} = useTheme();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Home',
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 20}}>
              <Icon name="music" color={colors.error} size={25} />
            </TouchableOpacity>
          ),
          headerTitleStyle: {color: colors.text},
          headerStyle: {
            backgroundColor: colors.background,
            shadowOffset: {height: 0, width: 0},
          },
        }}
      />

      <Stack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{
          headerTitle: 'Album',

          headerTitleStyle: {color: colors.text},
          headerStyle: {
            backgroundColor: colors.background,
            shadowOffset: {height: 0, width: 0},
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
