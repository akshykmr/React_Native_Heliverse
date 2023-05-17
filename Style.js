import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // borderWidth: 3,
    // borderColor: 'blue',
    // borderStyle: 'solid',
    position: 'relative',
    alignItems: 'center',
  },
  stageBackground: {
    height: '80%',
    width: '100%',
    // borderWidth: 1,
    // // borderColor: 'black',
    // borderStyle: 'solid',
    position: 'relative',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  screen: {
    height: '60%',
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    // borderWidth: 3,
    // borderColor: 'red',
  },
  podium: {
    height: '20%',
    width: '100%',
    // borderWidth: 1,
    // borderColor: 'black',
    // borderStyle: 'solid',
    position: 'absolute',
    top: '80%',
  },
  poduimImage: {
    height: '100%',
    width: '100%',
  },
  host: {
    // borderWidth: 3,
    // borderColor: 'red',
    // borderStyle: 'solid',
    position: 'absolute',
    top: 310,
    left: '50%',
    marginLeft: -75,
    width: 150,
    height: 250,

  },
  left: {
    // borderWidth: 3,
    // borderColor: 'red',
    // borderStyle: 'solid',
    position: 'absolute',
    width: '70%',
    height: '100%',
  },
  right: {
    // borderWidth: 3,
    // borderColor: 'red',
    // borderStyle: 'solid',
    position: 'absolute',
    right: 0,
    width: '70%',
    height: '100%',
  },
  '@keyframes slide-curtain-left': {
    from: {
      transform: [{ translateX: '0%' }],
    },
    to: {
      transform: [{ translateX: '-100%' }],
    },
  },
  '@keyframes slide-curtain-right': {
    from: {
      transform: [{ translateX: '0%' }],
    },
    to: {
      transform: [{ translateX: '100%' }],
    },
  },
});
export default styles;
