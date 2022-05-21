import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { Badge, Surface, Title } from 'react-native-paper'
import BagianFilm from './index1';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilm } from '../redux/api';

const Film = () => {
    const {film} = useSelector(state=>state.userReducer);
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(getFilm())
	},[])

   return(
	   <View style={{backgroundColor: 'black', flex: 1}}>
		   <BagianFilm/>
		   
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

export default Film;

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