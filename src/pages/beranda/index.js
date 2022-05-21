import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import Beranda from './index1';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilm } from '../redux/api';

const Homescreen = () => {
	const {film} = useSelector(state=>state.userReducer);
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(getFilm())
	},[])

   return(
	   <View style={{backgroundColor: 'black', flex: 1}}>
		   <Beranda/>
		   
		   <View >
		  	<FlatList
			  
			  data={film}
			  renderItem={({item, index})=>(
				<TouchableOpacity style={styles.card}>
				  <View>
					  <Image style={styles.gambar} source={{uri: item.image}}/>
					  <Text style={styles.tulisan}>{item.name}</Text>
					  
				  </View>
				  </TouchableOpacity>
			  )}
			  keyExtractor={(item, index) => index.toString()}
			  />
		   </View>
		   
	   </View>
   )

	
};

export default Homescreen;

const styles = StyleSheet.create({
    tulisan: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
		top: 10,
		left: 125,
		justifyContent: 'center'
		
	},
	card: {
		backgroundColor: '#fcba03',
		marginBottom: 10,
		marginTop: 10,
		marginLeft: '2%',
		width: '96%',
		height: 200,
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