import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppearanceProvider} from 'react-native-appearance';
import {ThemeProvider} from './src/utils';
import {useTheme} from './src/utils/ThemeProvider';
import BottomTab from './src/navigation/BottomTab';
import {PlayerWidget} from './src/components';
import {Constants} from 'react-native-unimodules';

console.log(Constants.systemFonts);

const App = () => {
  const {colors, isDark} = useTheme();
  return (
    <>
      <AppearanceProvider>
        <ThemeProvider>
          <NavigationContainer>
            <StatusBar
              animated
              barStyle={isDark ? 'light-content' : 'dark-content'}
            />
            <View style={styles.container}>
              <BottomTab />
              <PlayerWidget />
            </View>
          </NavigationContainer>
        </ThemeProvider>
      </AppearanceProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
