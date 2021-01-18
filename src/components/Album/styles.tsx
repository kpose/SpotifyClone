import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 160,
    margin: 10,
    borderRadius: 10,
    //overflow: 'hidden',

    shadowColor: '#ed154b',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  text: {
    marginTop: 10,
  },
});

export default styles;
