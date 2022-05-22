import { View, ScrollView, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import Beranda from './index1';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import getFilm  from '../redux/api';
import TampilFilm from './tampildata';
const URL = 'https://image.tmdb.org/t/p/w500/';
import {Card} from 'react-native-paper'

const Homescreen = () => {
	const {trending_film} = useSelector(state=>state.FilmReducer);

	const dispatch = useDispatch();

		useEffect(()=>{
			dispatch(getFilm())
		},[]);

		console.log(trending_film.results);

		
		
	
   	return(
	   <View style={{backgroundColor: 'black', flex: 1}}>
		   <Beranda/>
		   <View >
			   
		   <FlatList
		   		numColumns={2}
			  data={trending_film.results}
			  renderItem={({item})=>(
				<Card style={styles.container}>
				<View style={styles.container}> 
				<TouchableOpacity style={styles.card}>
				  <View style={styles.box}>
					  <Image style={styles.gambar} source={{uri: `${URL}/${item.poster_path}`}}/>
					  
				</View>
				</TouchableOpacity>
				</View>
				</Card>  
			  )}
			  keyExtractor={(item) => item.id}
		   />
	   </View>
	   </View>
   )

	
};

export default Homescreen;

const styles = StyleSheet.create({
	judul: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
		left: 0
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: '#0000',
		
		height: 300, 
		borderRadius: 10,
       
        alignContent: 'center',
		justifyContent: 'center'
	},
	gambar: {
		width: 170, 
		height: 250, 
		borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 0,
		
	},
   
});