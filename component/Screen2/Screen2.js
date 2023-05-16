import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import Avatar from '../../assest/avtar2.png';
import Arrow from '../../assest/arrow.png';
import Heart from '../../assest/main-heart.png';
import styles from './Screen2_Style';

const Screen2 = () => {
  const [sliderVisible, setSliderVisible] = useState(false);
  const slideAnimation = useState(new Animated.Value(300))[0];

  let timer;

  useEffect(() => {
    timer = setTimeout(() => {
      animateSlider();
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const animateSlider = () => {
    slideAnimation.setValue(900);
    setSliderVisible(true);
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
    });
  };

  const handleArrowClick = () => {
    clearTimeout(timer);
    if (sliderVisible) {
      Animated.timing(slideAnimation, {
        toValue: -700,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setSliderVisible(false);
        timer = setTimeout(animateSlider, 4000);
      });
    } else {
      animateSlider();
    }
  };

  return (
    <>
      <View style={styles.screen2Container}>
        <View style={styles.castingbox}>
          {sliderVisible && (
            <Animated.View
              style={[
                styles.SliderContainer,
                {
                  transform: [
                    {
                      translateX: slideAnimation,
                    },
                  ],
                },
              ]}
            >
              <View style={styles.avatarContainer}>
                <Image source={Avatar} style={styles.AvatarImg} />
              </View>
              <View style={styles.CastingInfo}>
                <Text style={styles.name}>D-Lister</Text>
                <Text style={styles.LastName}>Sally</Text>
              </View>
            </Animated.View>
          )}
        </View>
        <Text style={styles.castingtxt}>Gave U Some Love</Text>
        <View style={styles.heartBox}>
          <Image source={Heart} style={styles.heart} />
          <Text style={styles.hearthText}>3000</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleArrowClick}>
        <Image source={Arrow} style={styles.Arrow} />
      </TouchableOpacity>
    </>
  );
};

export default Screen2;
