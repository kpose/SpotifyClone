import React from 'react';
import {
  View,
  Text,
  ViewStyle,
  TextStyle,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {useTheme} from '../../utils/ThemeProvider';
import {AlbumTypes} from '../../utils/types';

export type AlbumHeaderProps = {
  album: AlbumTypes;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const {colors, isDark} = useTheme();
  const {album} = props;

  const containerStyle = {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  } as ViewStyle;

  const textStyle = {
    color: colors.text,
  } as TextStyle;

  return (
    <View style={[containerStyle]}>
      <Image source={{uri: album.imageUri}} style={styles.image} />
      <Text style={[styles.name, textStyle]}>{album.name}</Text>

      <View style={[styles.creatorContainer]}>
        <Text style={[textStyle, styles.creator]}> By {album.by}</Text>

        <Text style={[textStyle, styles.likes]}>
          {album.numberOfLikes} Likes
        </Text>
      </View>
      <TouchableOpacity>
        <View style={[styles.button]}>
          <Text style={[textStyle, styles.buttonText]}>PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;
