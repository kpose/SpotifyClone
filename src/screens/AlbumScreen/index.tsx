import React, {useEffect} from 'react';
import {View, Text, TextStyle, ViewStyle, FlatList} from 'react-native';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import {useTheme} from '../../utils/ThemeProvider';
import AlbumDetails from '../../data/AlbumDetails';
import {SongListItem} from '../../components';

const AlbumScreen = () => {
  const {colors, isDark} = useTheme();
  const route = useRoute();

  const containerStyle = {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: colors.background,
  } as ViewStyle;

  const textStyle = {
    fontSize: 18,
    color: colors.text,
  } as TextStyle;

  useEffect(() => {
    //console.warn(route);
  }, []);
  return (
    <View style={containerStyle}>
      <FlatList
        data={AlbumDetails.songs}
        renderItem={({item}) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AlbumScreen;
