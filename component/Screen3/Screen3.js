import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Arrow from '../../assest/arrow.png';
import Heart from '../../assest/main-heart.png';
import Bubble from '../../assest/speech-bubble.png';
import styles from './Screen3_Style';

const Screen3 = ({handleScreen3Click}) => {
  const [number, setNumber] = useState(15000);
//   const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    let interval;

    const increaseNumber = () => {
      setNumber((prevNumber) => {
        if (prevNumber >= 40000) {
          clearInterval(interval);
          return prevNumber;
        }
        return prevNumber + 1000;
      });
    };

    interval = setInterval(increaseNumber, 30);

    setTimeout(() => {
      clearInterval(interval);
      setNumber(15000);
      interval = setInterval(increaseNumber, 30);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

//   const handleRefresh = () => {
//     setRefresh(!refresh);
//   };

  return (
    <View style={styles.screen3}>
      <Text style={styles.heading}>4 Friends Gave U Some Love</Text>
      <View style={styles.heartBox}>
        <Image source={Heart} style={styles.heart} />
        <Text style={styles.hearthText}>{number}</Text>
      </View>
      <View style={styles.bubbleBox}>
        <Image source={Bubble} style={styles.bubble} />
        <Text style={styles.bubbletxt}>Congrats!</Text>
      </View>
      <TouchableOpacity onPress={handleScreen3Click}>
        <Image source={Arrow} style={styles.screen3Arrow} />
      </TouchableOpacity>
    </View>
  );
};

export default Screen3;
