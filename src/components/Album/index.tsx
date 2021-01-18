import React from 'react';
import {
  View,
  Text,
  Image,
  ViewStyle,
  TextStyle,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import {useTheme} from '../../utils/ThemeProvider';
import {AlbumTypes} from '../../utils/types';
import {useNavigation} from '@react-navigation/native';

export type AlbumProps = {
  album: AlbumTypes;
};

const Album = (props: AlbumProps) => {
  const {colors, isDark} = useTheme();
  const navigation = useNavigation();

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

  const onPress = () => {
    navigation.navigate('AlbumScreen', {id: props.album.id});
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[containerStyle, styles.container]}>
        <Image source={{uri: props.album.imageUri}} style={styles.image} />
        <Text style={[textStyle, styles.text]}>
          {' '}
          {props.album.artistsHeadline}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Album;
