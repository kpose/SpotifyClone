import React from 'react';
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

const Home = () => {
  const {colors, isDark} = useTheme();

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
          data={AlbumCategories}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <AlbumCategory title={item.title} albums={item.albums} />
          )}
          showsVerticalScrollIndicator={false}
        />

        {/* <Switch /> */}
      </SafeAreaView>
    </>
  );
};

export default Home;
