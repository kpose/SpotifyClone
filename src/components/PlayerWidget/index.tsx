import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {Song} from '../../utils/types';
import styles from './styles';
import {useTheme} from '../../utils/ThemeProvider';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color} from '../../utils/';
import {Audio} from 'expo-av';
import {Sound} from 'expo-av/build/Audio';

const song = {
  id: 1,
  uri:
    'https://dl.last.fm/static/1611055001/125129999/cd44daf7aa9f6618fc855a7d29033aa3850612a0d6bd251b25dcaa8f4ea73059/The+Echelon+Effect+-+Your+First+Light+My+Eventide.mp3',
  imageUri:
    'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
  title: 'Hign on You',
  artist: 'Kpose',
};

const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);

  const onPlaybackStatusUpdate = (status: any) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const {sound: newSound} = await Sound.createAsync(
      //{uri: song.uri},
      require('../../data/Dea.mp3'),
      {shouldPlay: isPlaying},
      onPlaybackStatusUpdate,
    );
    setSound(newSound);
  };

  useEffect(() => {
    playCurrentSong();
  }, []);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }

    return (position / duration) * 100;
  };

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
      <View style={[styles.progressBar, {width: `${getProgress()}%`}]} />

      <View style={styles.row}>
        <Image source={{uri: song.imageUri}} style={styles.image} />

        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={[styles.title, textStyle]}>{song.title}</Text>
            <Text style={[styles.artist]}>{song.artist}</Text>
          </View>
          <View style={styles.iconsContainer}>
            <Icon name="heart-o" color={color.WHITE} size={25} />

            <TouchableOpacity onPress={onPlayPausePress}>
              <Icon
                name={isPlaying ? 'pause' : 'play'}
                color={color.WHITE}
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
