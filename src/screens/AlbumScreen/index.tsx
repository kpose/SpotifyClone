import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextStyle,
  ViewStyle,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import {useTheme} from '../../utils/ThemeProvider';
import AlbumDetails from '../../data/AlbumDetails';
import {SongListItem, AlbumHeader, Loading} from '../../components';
import {API, graphqlOperation} from 'aws-amplify';
import {getAlbum} from '../../graphql/queries';

const AlbumScreen = () => {
  const [album, setAlbum] = useState(null);
  const {colors, isDark} = useTheme();
  const route = useRoute();

  const albumId = route.params.id;

  const containerStyle = {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle;

  const textStyle = {
    fontSize: 18,
    color: colors.text,
  } as TextStyle;

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      try {
        const data = await API.graphql(
          graphqlOperation(getAlbum, {id: albumId}),
        );

        setAlbum(data.data.getAlbum);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAlbumDetails();
  }, []);

  if (!album) {
    return <Loading />;
  }

  return (
    <View style={containerStyle}>
      <View style={containerStyle}>
        <FlatList
          data={album.songs.items}
          renderItem={({item}) => <SongListItem song={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <AlbumHeader album={album} />}
        />
      </View>
    </View>
  );
};

export default AlbumScreen;
