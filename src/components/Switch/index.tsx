import * as React from 'react';
import {Switch as RNSwitch} from 'react-native';
import {useTheme} from '../../utils/ThemeProvider';

export const Switch: React.FC<{}> = () => {
  const {setScheme, isDark} = useTheme();

  const toggleScheme = () => {
    isDark ? setScheme('light') : setScheme('dark');
  };

  return (
    <RNSwitch
      value={isDark}
      onValueChange={toggleScheme}
      style={{marginRight: 10, transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
    />
  );
};
