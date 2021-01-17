import React from 'react';
import {View, Text, Image, ViewStyle, TextStyle} from 'react-native';
import styles from './styles';
import {useTheme} from '../../utils/ThemeProvider';
import {AlbumTypes} from '../../utils/types';

export type AlbumProps = {
  album: AlbumTypes;
};

const Album = (props: AlbumProps) => {
  const {colors, isDark} = useTheme();

  const containerStyle = {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  } as ViewStyle;

  const textStyle = {
    fontSize: 18,
    color: colors.text,
  } as TextStyle;

  return (
    <View style={[containerStyle, styles.container]}>
      <Image source={{uri: props.album.imageUri}} style={styles.image} />
      <Text style={[textStyle, styles.text]}>
        {' '}
        {props.album.artistsHeadline}
      </Text>
    </View>
  );
};

export default Album;
