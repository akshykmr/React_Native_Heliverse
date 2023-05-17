import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screen3: {
        marginTop: 50,
        height: '60%',
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        color: 'yellow',
        fontSize: 30,
        width: '60%',
        textAlign: 'center',
        flex: 1,
    },
    heartBox: {
        color: 'yellow',
        width: '40%',
        height: '50%',
        marginBottom: 30,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heart: {
        width: '100%',
        height: '100%',
      },
      hearthText: {
        color: 'white',
        fontSize: 36,
        position: 'absolute',
      },
      bubbleBox: {
        color: 'yellow',
        width: '40%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '80%',
        right: 20,
        flex: 1,
    },
    bubble: {
        width: '80%',
        height: '80%',
    },
    bubbletxt: {
        color: '#D90026',
        fontSize: 20,
        position: 'absolute',
        top: 30,
    },
    screen3Arrow: {
        position: 'absolute',
        top: 100,
        left: 80,
        height: 45,
        width: 45,
    },
});

export default styles;