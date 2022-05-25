import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Search from '../../redux/api_search';
const URL = 'https://image.tmdb.org/t/p/w500/';
import {Card} from 'react-native-paper';

const Searchmovie = ({navigation, route}) => {
  const {pencarian} = useSelector(state => state.FilmReducer);

  const dispatch = useDispatch();
  console.log(route);

  useEffect(() => {
    dispatch(Search(route.params.pilih, route.params.query));
  }, []);

  console.log(pencarian.result);

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <Text style={{color: 'white'}}>Tes</Text>
    </View>
  );
};

export default Searchmovie;

const styles = StyleSheet.create({
  judul: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    left: 0,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#0000',

    height: 300,
    borderRadius: 10,

    alignContent: 'center',
    justifyContent: 'center',
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
