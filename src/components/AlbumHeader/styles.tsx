import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    padding: 20,
  },

  image: {
    width: 200,
    height: 200,
    margin: 15,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  creator: {
    margin: 5,
    fontSize: 18,
    color: '#ed154b',
  },
  likes: {
    margin: 5,
    fontSize: 18,
    color: '#ed154b',
  },

  creatorContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  button: {
    backgroundColor: '#1CD05D',
    height: 60,
    width: 170,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'lightgray',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
