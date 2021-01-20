import React, {useContext, useEffect, useState} from 'react';
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
import {AppContext} from '../../../AppContext';
import {API, graphqlOperation} from 'aws-amplify';
import {getSong} from '../../graphql/queries';

const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);
  const [song, setSong] = useState(null);

  const {songId} = useContext(AppContext);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const data = await API.graphql(graphqlOperation(getSong, {id: songId}));
        //console.log(data.data.getSong.uri);
        setSong(data.data.getSong);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSong();
  }, [songId]);

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
      {uri: song.uri},
      {shouldPlay: isPlaying},
      onPlaybackStatusUpdate,
    );
    setSound(newSound);
  };

  useEffect(() => {
    if (song) {
      playCurrentSong();
    }
  }, [song]);

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
    backgroundColor: colors.background,
  } as ViewStyle;

  const textStyle = {
    color: colors.text,
  } as TextStyle;

  if (!song) {
    return null;
  }

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
