import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import BagianFilm from './index1';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import getMovie from '../redux/api3';
import TampilMovie from './tampildata';

const Film = () => {
    const {movie} = useSelector(state=>state.FilmReducer);
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(getMovie());
	},[])
	console.log(movie.results);
	const data = movie.results;
  	return(
	   <View style={{backgroundColor: 'black', flex: 1}}>
		   <BagianFilm/>
		   <View >
			   <ScrollView>
				   <Text style={styles.judul}>Film</Text>
				   <View style={styles.container}>
				   <TampilMovie data={data}/>
				   </View>
			   </ScrollView>
		   </View>
		   
	   </View>
   )
};

export default Film;

const styles = StyleSheet.create({
	judul: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 30,
		left: 125
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',	
	}
});