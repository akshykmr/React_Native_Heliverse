import React, { useEffect, useRef, useState } from 'react';
import { View,  ImageBackground, Animated,TouchableOpacity, Text, Button } from 'react-native';
import backgroundImage from './assest/award_bg.png';
import awardPlatform from './assest/awardPlatform.png';
import girlClap from './assest/girlClap.png';
import curtainLeft from './assest/curtain-left.png';
import curtainRight from './assest/curtain-right.png';
import styles from './Style';
// import Screen1 from './component/Screen1/Screen1';
// import Screen2 from './component/Screen2/Screen2';
import Screen3 from './component/Screen3/Screen3';


const App = () => {
  const [refresh, setRefresh] = useState(false);
  const curtainLeftAnimation = useRef(new Animated.Value(0)).current;
  const curtainRightAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateCurtains();
  }, [refresh]);

  const animateCurtains = () => {
    curtainLeftAnimation.setValue(0);
    curtainRightAnimation.setValue(0);

    Animated.parallel([
      Animated.timing(curtainLeftAnimation, {
        toValue: -300,
        duration: 4000,
        useNativeDriver: true,
      }),
      Animated.timing(curtainRightAnimation, {
        toValue: 300,
        duration: 4000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.stageBackground}>
          <ImageBackground source={backgroundImage} style={styles.backgroundImage} />
          <View style={styles.screen}>
            {/* <Screen1 /> */}
            {/* <Screen2 /> */}
            <Screen3 />
          </View>
        </View>
        <View style={styles.podium}>
          <ImageBackground source={awardPlatform} style={styles.poduimImage} />
        </View>
      </View>
      <ImageBackground source={girlClap} style={styles.host} />
      <Animated.Image
        source={curtainLeft}
        style={[styles.left, { transform: [{ translateX: curtainLeftAnimation }] }]}
      />
      <Animated.Image
        source={curtainRight}
        style={[styles.right, { transform: [{ translateX: curtainRightAnimation }] }]}
      />
      {/* <TouchableOpacity onPress={handleRefresh}> */}
      {/* <Button
      title="Refresh"
      onPress={handleRefresh}
    /> */}
      {/* </TouchableOpacity> */}
    </>
  );
};

export default App;
