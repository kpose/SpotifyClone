import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
  },
  rightContainer: {
    justifyContent: 'space-around',
    marginLeft: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  text: {
    marginTop: 10,
  },
  artist: {
    color: '#878787',
    fontSize: 20,
  },
  title: {
    fontSize: 22,
  },
});

export default styles;
