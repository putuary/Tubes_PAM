import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Route from './rute';
import { Provider } from 'react-redux';
import  {Store} from './pages/redux/store';

const DaftarFilm = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
    <Route/>
    </NavigationContainer>
    </Provider>
  
  );
};

export default DaftarFilm;

const styles = StyleSheet.create({});