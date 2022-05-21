import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Badge, Surface, Title } from 'react-native-paper'
import BagianFilm from './index1';


const Film = () => {
    
	  return (
		    <View style={{backgroundColor: 'black', flex: 1}}>
				<BagianFilm/>
				<View >
		   		
		   		</View>
		   		<View>
		   			<Text style={styles.tulisan}>Ini film</Text>
		   		</View>
			</View>
	)
};

export default Film;

const styles = StyleSheet.create({
	tulisan: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 25,
		top: 100,
		left: 100,
		alignItems: 'center',
		justifyContent: 'center'
	},
	tulisan2:{
		color: 'white',
		fontWeight: 'bold',
	}
});