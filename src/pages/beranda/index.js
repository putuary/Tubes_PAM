import { View, ScrollView, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import Beranda from './index1';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import getFilm  from '../redux/api';
import TampilFilm from './tampildata';


const Homescreen = () => {
	const {trending_film} = useSelector(state=>state.FilmReducer);

	const dispatch = useDispatch();

		useEffect(()=>{
			dispatch(getFilm())
		},[]);

		console.log(trending_film.results);

		const data = trending_film.results;
		
	
   	return(
	   <View style={{backgroundColor: 'black', flex: 1}}>
		   <Beranda/>
		   <View >
			   <ScrollView>
				   <Text style={styles.judul}>Trending Film</Text>
				   <View style={styles.container}>
				   <TampilFilm data={data}/>
				   </View>
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
		left: 100
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',	
	}
   
});