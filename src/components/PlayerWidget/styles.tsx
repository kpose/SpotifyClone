import {StyleSheet} from 'react-native';
import {color} from '../../utils/';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    //margin: 10,
    bottom: 79,
    width: '100%',
    //alignItems: 'center',
    borderWidth: 1,
    borderColor: color.BLACK,
    backgroundColor: '#262525', //tentative #262525
  },
  progressBar: {
    height: 3,
    backgroundColor: color.WARNING,
  },

  row: {
    flexDirection: 'row',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginRight: 10,
  },
  text: {
    marginTop: 10,
  },
  artist: {
    color: '#878787',
    fontSize: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default styles;
