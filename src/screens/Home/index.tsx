import React from 'react';
import {View, Text, ViewStyle, TextStyle, StatusBar} from 'react-native';

import {useTheme} from '../../utils/ThemeProvider';
import {Switch, Album, AlbumCategory} from '../../components';

//import AlbumCategories from '../../data/AlbumCaegories'

const albumCategory = {
  id: '1',
  title: 'Happy Vibes',
  albums: [
    {
      id: '1',
      imageUri:
        'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
      artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii',
    },
    {
      id: '2',
      imageUri:
        'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
      artistsHeadline: 'Post Malone, Drake, Eminem',
    },
    {
      id: '3',
      imageUri:
        'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
      artistsHeadline: 'Journey, Escape, Avicii',
    },
    {
      id: '4',
      imageUri:
        'https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg',
      artistsHeadline: 'Bob Marley, Cardi B, Stas Mihailov',
    },
  ],
};

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
      <View style={containerStyle}>
        <Text style={textStyle}> Home Screen</Text>
        <AlbumCategory
          title={albumCategory.title}
          albums={albumCategory.albums}
        />

        {/* <Switch /> */}
      </View>
    </>
  );
};

export default Home;
