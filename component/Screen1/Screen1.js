import {Text, View, Image} from 'react-native';
import counterImage from '../../assest/castingLogo.png';
import styles from './Screen1_Style';
const Screen1 = () => {
  return (

    <View style={styles.screenContainer}>
      <View style={styles.counterImageSection}>
        <Image 
        source={counterImage} style={styles.counterImage} />
        <Text style={styles.countingtxt}>04:59:59</Text>
      </View>
      <Text style={styles.castingtxt}>casting call</Text>
      <Text style={styles.resulttxt}>The Results R In!</Text>
      </View>
  );
};
export default Screen1;
