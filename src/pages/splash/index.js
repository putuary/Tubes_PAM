import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import React, {useEffect} from 'react';
import {Gambar} from '../../Assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Mainapp');
    }, 3000)
  }, [navigation]);

  return (
   <ImageBackground source={Gambar} style={styles.background}>
   </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 300,
    height: 200
  }
});
