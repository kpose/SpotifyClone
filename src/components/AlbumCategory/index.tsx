import React from 'react';
import {View, Text, Image, ViewStyle, TextStyle, FlatList} from 'react-native';
import styles from './styles';
import {useTheme} from '../../utils/ThemeProvider';
import {AlbumTypes} from '../../utils/types';
import {Album} from '..';

export type AlbumCategoryProps = {
  title: string;
  albums: [AlbumTypes];
};

const AlbumCategory = (props: AlbumCategoryProps) => {
  const {colors, isDark} = useTheme();

  const containerStyle = {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: colors.background,
  } as ViewStyle;

  const textStyle = {
    color: colors.text,
  } as TextStyle;
  return (
    <View style={[containerStyle, styles.container]}>
      <Text style={[textStyle, styles.title]}> {props.title} </Text>
      <FlatList
        data={props.albums}
        renderItem={({item}) => <Album album={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AlbumCategory;
