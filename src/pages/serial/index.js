import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React, {useEffect, useState} from 'react';
import BagianSerial from './index1';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import getSerial from '../redux/api2';
const URL = 'https://image.tmdb.org/t/p/w500/';
import {Card} from 'react-native-paper'

const Serial = () => {
    const {serial_tv} = useSelector(state=>state.FilmReducer);
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(getSerial())
	},[]);

	console.log(serial_tv.results)
	
	
	return (
		<View style={{backgroundColor: 'black', flex: 1}}>
			<BagianSerial/>
			<View >
			<FlatList
		   		numColumns={2}
			  data={serial_tv.results}
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

export default Serial;

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