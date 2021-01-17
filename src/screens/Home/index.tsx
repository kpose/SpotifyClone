import React from 'react';
import {View, Text, ViewStyle, TextStyle, StatusBar} from 'react-native';

//theming
import {useTheme} from '../../utils/ThemeProvider';
import {Switch} from '../../components';

const Home = () => {
  const {colors, isDark} = useTheme();

  const containerStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  } as ViewStyle;

  const textStyle = {
    fontSize: 18,
    color: colors.text,
  } as TextStyle;

  return (
    <>
      <StatusBar
        animated
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />
      <View style={containerStyle}>
        <Text style={textStyle}> Home Screen</Text>
        <Switch />
      </View>
    </>
  );
};

export default Home;
