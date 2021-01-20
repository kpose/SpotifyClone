import React, {useContext} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Dimensions,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {useTheme} from '../../utils/ThemeProvider';

const {height, width} = Dimensions.get('window');

const Loading = () => {
  const {colors, isDark} = useTheme();

  const containerStyle = {
    backgroundColor: colors.background,
  } as ViewStyle;

  return (
    <View style={[styles.loaderContainer, containerStyle]}>
      <View style={styles.indicator}>
        <ActivityIndicator
          size="large"
          color="#de2f34"
          style={{
            left: 1.3,
            top: 1,
          }}
        />
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loaderContainer: {
    zIndex: 1,
    elevation: 2,
    height,
    width,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: 'lightgrey',
    height: 44,
    width: 44,
    borderRadius: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
