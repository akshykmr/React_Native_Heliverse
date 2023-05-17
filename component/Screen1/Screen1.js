import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import counterImage from '../../assest/castingLogo.png';
import styles from './Screen1_Style';

const Screen1 = () => {
  const [sec, setSec] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setSec((prevSec) => (prevSec === 0 ? 59 : prevSec - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const countdown = `04:59:${formatTime(sec)}`;

  return (
    <View style={styles.screenContainer}>
      <View style={styles.counterImageSection}>
        <Image source={counterImage} style={styles.counterImage} />
        <Text style={styles.countingtxt}>{countdown}</Text>
      </View>
      <Text style={styles.castingtxt}>casting call</Text>
      <Text style={styles.resulttxt}>The Results R In!</Text>
    </View>
  );
};

export default Screen1;
