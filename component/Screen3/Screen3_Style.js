import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screen3: {
        marginTop: 50,
        height: '60%',
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    borderWidth: 3,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    },
    heading: {
        color: 'yellow',
        fontSize: 30,
        borderWidth: 4,
        width: '60%',
        textAlign: 'center',
        flex: 1,
    },
    heartBox: {
        color: 'yellow',
        fontSize: 24,
        width: '50%',
        flex: 2,
        // height: '20%',
        borderWidth: 3,
        borderColor: 'white',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heart: {
        width: 140,
        // width: '50%',
        // borderWidth: 3,
        // borderColor: 'white',
        height: '100%',
        // borderRadius: 48,
      },
      hearthText: {
        color: 'white',
        fontSize: 34,
        position: 'absolute',
      },
    bubble: {
        borderWidth: 4,
        flex: 1,
    },
});

export default styles;