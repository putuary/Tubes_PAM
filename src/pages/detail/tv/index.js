import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import getDetail from '../../redux/api_detail';

const URL = 'https://image.tmdb.org/t/p/w500/';

const DetailSerial = ({navigation, route}) => {
  const {detail} = useSelector(state => state.FilmReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail('tv', route.params.id));
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.back}
            source={require('../../../Assets/Icon/back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.judul}>{detail.original_name}</Text>
      </View>
      <View style={styles.konten}>
        <View style={styles.konten2}>
          <Image
            style={styles.poster}
            source={{uri: `${URL}/${detail.poster_path}`}}
          />
          <View style={styles.konten3}>
            <Text style={styles.judul2}>{detail.original_name}</Text>
            <Text style={styles.text}>
              Genre :
              {detail.genres &&
                detail.genres.map(item => {
                  return ` ${item.name} `;
                })}
            </Text>
            <Text style={styles.text}>
              Tahun :{' '}
              {detail.first_air_date && detail.first_air_date.slice(0, 4)}
            </Text>
            <Text style={styles.text}>
              Jumlah : {detail.number_of_seasons} Seasons
            </Text>
            <Text style={styles.text}>Rating : {detail.vote_average} </Text>
          </View>
        </View>
        <Text style={styles.text2}>Deskripsi</Text>
        <Text style={styles.deskripsi}>{detail.overview}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {backgroundColor: '#100F0F', flex: 1},
  nav: {
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'black',
  },
  back: {height: 40, width: 40},
  judul: {
    fontSize: 20,
    alignSelf: 'center',
    left: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  judul2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  konten: {
    margin: 10,
  },
  konten2: {
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  poster: {height: 224, width: 165, borderRadius: 10},
  konten3: {
    width: 200,
    left: 10,
  },
  text: {
    color: 'white',
  },
  text2: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  deskripsi: {textAlign: 'justify', color: 'white'},
});

export default DetailSerial;
