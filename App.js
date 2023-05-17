import React, { useEffect, useRef, useState } from 'react';
import { View, ImageBackground, Animated } from 'react-native';
import backgroundImage from './assest/award_bg.png';
import awardPlatform from './assest/awardPlatform.png';
import girlClap from './assest/girlClap.png';
import curtainLeft from './assest/curtain-left.png';
import curtainRight from './assest/curtain-right.png';
import styles from './Style';
import Screen1 from './component/Screen1/Screen1';
import Screen2 from './component/Screen2/Screen2';
import Screen3 from './component/Screen3/Screen3';

const App = () => {
  const [screenIndex, setScreenIndex] = useState(1);
  const [screen3Visible, setScreen3Visible] = useState(false);
  const curtainLeftAnimation = useRef(new Animated.Value(0)).current;
  const curtainRightAnimation = useRef(new Animated.Value(0)).current;

  const handleScreen3Click = () => {
    setScreen3Visible(false);
    setScreenIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  useEffect(() => {
    animateCurtains();

    const screenTimer = setTimeout(() => {
      if (screenIndex === 3) {
        setScreen3Visible(true);
      } else {
        setScreenIndex((prevIndex) => (prevIndex + 1) % 4);
      }
    }, getScreenDuration(screenIndex));

    return () => {
      clearTimeout(screenTimer);
    };
  }, [screenIndex]);

  const getScreenDuration = (index) => {
    switch (index) {
      case 1:
        return 4000;
      case 2:
        return 20000;
      case 3:
        return;
      default:
        return 0;
    }
  };

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

  const renderScreen = () => {
    switch (screenIndex) {
      case 1:
        return <Screen1 />;
      case 2:
        return <Screen2 />;
      case 3:
        return screen3Visible ? (
          <Screen3 handleScreen3Click={handleScreen3Click} animateCurtains={animateCurtains} />
        ) : null;
      default:
        return null;
    }
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.stageBackground}>
          <ImageBackground source={backgroundImage} style={styles.backgroundImage} />
          <View style={styles.screen}>{renderScreen()}</View>
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
    </>
  );
};

export default App;
