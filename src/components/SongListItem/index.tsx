import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  TextStyle,
  ViewStyle,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Song} from '../../utils/types';
import styles from './styles';
import {useTheme} from '../../utils/ThemeProvider';
import {AppContext} from '../../../AppContext';

export type SongListItemProps = {
  song: Song;
};
const SongListItem = (props: SongListItemProps) => {
  const {song} = props;
  const {colors, isDark} = useTheme();
  const {setSongId} = useContext(AppContext);

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

  const onPlay = () => {
    setSongId(song.id);
  };

  return (
    <TouchableOpacity onPress={onPlay}>
      <View style={[containerStyle, styles.container]}>
        <Image source={{uri: song.imageUri}} style={styles.image} />

        <View style={styles.rightContainer}>
          <Text style={[styles.title, textStyle]}>{song.title}</Text>
          <Text style={[styles.artist]}>{song.artist}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SongListItem;
