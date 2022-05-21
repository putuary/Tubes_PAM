import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import Beranda from './index1';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilm } from '../redux/api';
const URL = 'https://image.tmdb.org/t/p/w500/';
import TampilFilm from './tampildata';


const Homescreen = () => {
	const {film} = useSelector(state=>state.FilmReducer);
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(getFilm())
	},[])
	
	console.log(film.results)
	const data = film.results
	
   return(
	   <View style={{backgroundColor: 'black', flex: 1}}>
		   <Beranda/>
		   
		   <View >
		  	<ScrollView>
			  <Text style={styles.judul}>Trending Film</Text>
				<TampilFilm data={data}/>
			</ScrollView>
		   </View>
		   
	   </View>
   )

	
};

export default Homescreen;

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