import { StyleSheet, View, Image, TouchableOpacity,} from 'react-native';
import React from 'react';
const URL = 'https://image.tmdb.org/t/p/w500/';

const TampilFilm = ({data}) => {
    {data.map((item, index)=> {
    return (
          <View style={styles.utama}>
            <TouchableOpacity style={styles.card} key={index}>
              <View style={styles.box}>
                  <Image style={styles.gambar} source={{uri: `${URL}/${item.poster_path}`}}/>
            </View>
            </TouchableOpacity>
            </View>  
      );
    })};
};

export default TampilFilm;

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
