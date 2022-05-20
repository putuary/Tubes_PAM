import React from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';

const Detail = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#100F0F', flex: 1}}>
      <View
        style={{
          padding: 6,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          backgroundColor: 'black',
        }}>
        <Image
          style={{height: 40, width: 40}}
          source={require('../../asset/back.png')}
        />
        <Text>Judul</Text>
      </View>
      <View>
        <View
          style={{
            padding: 6,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <Image
            style={{height: 224, width: 165, borderRadius: 10}}
            source={require('../../asset/tes.png')}
          />
          <View>
            <Text>Judul</Text>
            <Text>Genre</Text>
            <Text>Tahun</Text>
            <Text>Bahasa</Text>
          </View>
        </View>
        <Text>Deskripsi</Text>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
