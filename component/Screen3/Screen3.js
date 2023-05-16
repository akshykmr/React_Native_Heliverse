import {View, Text, Image} from "react-native";
import {Bubble} from '../../assest/speech-bubble.png';
import Arrow from '../../assest/arrow.png';
import Heart from '../../assest/main-heart.png';
import styles from './Screen3_Style';

const Screen3 = () =>{
    return(
        <>
        <View style={styles.screen3}>
            <Text  style={styles.heading}>4 Friends Gave U Some Love</Text>
            <View style={styles.heartBox}>
          {/* <Image source={Heart} style={styles.heart} /> */}
          <Text style={styles.hearthText}>3000</Text>
        </View>
        {/* <View style={styles.bubble}></View> */}
        </View>
        </>
    );
};

export default Screen3;