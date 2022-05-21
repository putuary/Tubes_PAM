import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { Badge, Surface, Title } from 'react-native-paper'
import Beranda from './index1';



const Homescreen = () => {
	
   return(
	   <View style={{backgroundColor: 'black', flex: 1}}>
		   <Beranda/>
		   <View >
		   		
		   </View>
		   <View>
		   		<Text style={styles.tulisan}>Ini beranda</Text>
		   </View>
		   		
	   </View>
   )

	
};

export default Homescreen;

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