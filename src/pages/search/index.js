import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Cari = ({navigation, route}) => {
  const [cari, setCari] = useState();

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.back}
            source={require('../../Assets/Icon/back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.judul}>Pencarian {route.params.pilih}</Text>
      </View>
      <View style={styles.pencarian}>
        <TextInput
          style={styles.input}
          onChangeText={setCari}
          value={cari}
          placeholder="Masukkan Pencarian"
          placeholderTextColor={'white'}
        />
        <TouchableOpacity
          style={styles.icon}
          onPress={() =>
            navigation.navigate(`Search${route.params.pilih}`, {
              pilih: route.params.pilih,
              query: cari,
            })
          }>
          <Image
            source={require('../../Assets/Icon/cari.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
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
  input: {
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    color: 'white',
  },
  pencarian: {
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  judul: {
    fontSize: 20,
    alignSelf: 'center',
    left: 20,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'capitalize',
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
});

export default Cari;
