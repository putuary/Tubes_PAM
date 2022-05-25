import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Badge, Surface, Title} from 'react-native-paper';

const BagianFilm = () => {
  
  const TitleView = () => (
    <View style={styles.titleView}>
      <Title style={{color: 'white', left: 30, fontWeight: 'bold'}}>Film</Title>
    </View>
  );
  return (
    <Surface style={[styles.header, {backgroundColor: 'black'}]}>
      <TitleView />
    </Surface>
  );
};

export default BagianFilm;

const styles = StyleSheet.create({
  header: {
    height: 60,
    elevation: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  view: {
    marginHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleView: {
    flex: 1,
    color: 'white',
  },
  rightView: {
    justifyContent: 'flex-end',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
});
