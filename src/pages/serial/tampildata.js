import { StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import React, { useState } from 'react';
const URL = 'https://image.tmdb.org/t/p/w500/';

const TampilSerial = ({data}) => {
  
    return (data.map((list, index)=> {
    return (
          <View style={styles.utama}>
            <TouchableOpacity style={styles.card} key={index}>
              <View style={styles.box}>
              <Image style={styles.gambar} source={{uri: `${URL}/${list.poster_path}`}}/>
            </View>
            </TouchableOpacity>
            </View>  
      );
    }));
};

export default TampilSerial;

const styles = StyleSheet.create({
	gambar: {
		width: 170, 
		height: 250, 
		borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
	},
});
