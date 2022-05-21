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
		   		
		   </View>
		   <TouchableOpacity style={styles.card}>
		  	<FlatList
			  data={film}
			  renderItem={({item})=>(
				  <View>
					  
					  <Text style={styles.tulisan}>{item.name}</Text>
					 
					  
				  </View>
			  )}
			  keyExtractor={(item, index) => index.toString()}
			  />
		   	</TouchableOpacity>
	   </View>
   )

	
};

export default Homescreen;

const styles = StyleSheet.create({
    tulisan: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 25,
		top: 0,
		left: 120,
		alignItems: 'center',
		justifyContent: 'center'
	},
	card: {
		backgroundColor: '#fcba03',
		marginBottom: 10,
		marginTop: 10,
		marginLeft: '2%',
		width: '96%',
		shadowColor: '#fff',
		shadowOpacity: 1,
		shadowOffset: {
			width: 3,
			height: 3
		},
		borderRadius: 10
		
	}
});