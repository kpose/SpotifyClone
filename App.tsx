import React, {useState} from 'react';
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
import {AppContext} from './AppContext';

const App = () => {
  const {colors, isDark} = useTheme();

  const [songId, setSongId] = useState<string | null>(null);

  return (
    <AppearanceProvider>
      <ThemeProvider>
        <AppContext.Provider
          value={{
            songId,
            setSongId: (id: string) => setSongId(id),
          }}>
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
        </AppContext.Provider>
      </ThemeProvider>
    </AppearanceProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
