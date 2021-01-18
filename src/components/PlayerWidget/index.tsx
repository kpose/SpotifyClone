import React from 'react';
import {View, Text, Image, TextStyle, ViewStyle} from 'react-native';
import {Song} from '../../utils/types';
import styles from './styles';
import {useTheme} from '../../utils/ThemeProvider';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color} from '../../utils/';

const song = {
  id: 1,
  imageUri:
    'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
  title: 'Hign on You',
  artist: 'Kpose',
};

const PlayerWidget = () => {
  const {colors, isDark} = useTheme();

  const containerStyle = {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: colors.background,
  } as ViewStyle;

  const textStyle = {
    //fontSize: 18,
    color: colors.text,
  } as TextStyle;

  return (
    <View style={[containerStyle, styles.container]}>
      <Image source={{uri: song.imageUri}} style={styles.image} />

      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={[styles.title, textStyle]}>{song.title}</Text>
          <Text style={[styles.artist]}>{song.artist}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <Icon name="heart-o" color={color.WHITE} size={25} />
          <Icon name="play" color={color.WHITE} size={25} />
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
