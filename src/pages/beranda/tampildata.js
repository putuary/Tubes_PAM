import { Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const URL = 'https://image.tmdb.org/t/p/w500/';

const TampilFilm = ({data}) => {
    return data.map((item, index )=> {
        
      return (
          <View>
            <TouchableOpacity style={styles.card} key={index} >
              <View>
                  <Image style={styles.gambar} source={{uri: `${URL}/${item.poster_path}` }}/>
                  <Text style={styles.tulisan}>{item.title}</Text>
                  

            </View>
            </TouchableOpacity>
            </View>
            
      );
      
    });
}

export default TampilFilm;

const styles = StyleSheet.create({
	judul: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 30,
		left: 10
	},
    tulisan: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
		top: 10,
		left: 50,
		justifyContent: 'center'
		
	},
	card: {
		backgroundColor: '#fcba03',
		marginBottom: 10,
		marginTop: 10,
		marginLeft: '2%',
		width: '96%',
		height: 250,
		shadowColor: '#fff',
		shadowOpacity: 1,
		shadowOffset: {
			width: 3,
			height: 3
		},
		borderRadius: 10,
		justifyContent: 'center'
		
		
	},
	gambar: {
		width: 100, 
		height: 150, 
		top: 10, 
		left: 125,
		bottom: 10,
		borderRadius: 10,
	}
});