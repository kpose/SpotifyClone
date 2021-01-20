import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ViewStyle,
  TextStyle,
  StatusBar,
  FlatList,
  SafeAreaView,
} from 'react-native';

import {useTheme} from '../../utils/ThemeProvider';
import {Switch, Album, AlbumCategory} from '../../components';

import AlbumCategories from '../../data/AlbumCategories';
import {API, graphqlOperation} from 'aws-amplify';
import {listAlbumCategorys} from '../../../src/graphql/queries';

const Home = () => {
  const {colors, isDark} = useTheme();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAlbumCategories = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategorys));

        console.log(data.data.listAlbumCategorys.items);
        setCategories(data.data.listAlbumCategorys.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAlbumCategories();
  }, []);

  const containerStyle = {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: colors.background,
  } as ViewStyle;

  const textStyle = {
    fontSize: 18,
    color: colors.text,
  } as TextStyle;

  return (
    <>
      <StatusBar
        animated
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView style={containerStyle}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <AlbumCategory title={item.title} albums={item.albums.items} />
          )}
          showsVerticalScrollIndicator={false}
        />

        {/* <Switch /> */}
      </SafeAreaView>
    </>
  );
};

export default Home;
