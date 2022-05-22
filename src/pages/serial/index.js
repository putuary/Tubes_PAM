import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, {useEffect} from 'react';
import BagianSerial from './index1';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import getSerial from '../redux/api2';
import TampilSerial from './tampildata';


const Serial = () => {
    const {serial_tv} = useSelector(state=>state.FilmReducer);
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(getSerial())
	},[]);

	console.log(serial_tv.results)
	const data = serial_tv.results;
	return (
		<View style={{backgroundColor: 'black', flex: 1}}>
			<BagianSerial/>
			<View >
			   <ScrollView>
				   <Text style={styles.judul}>Serial TV</Text>
				   <View style={styles.container}>
				   <TampilSerial data={data} />
				   </View>
			   </ScrollView>
		   </View>
		</View>
	)
};

export default Serial;

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