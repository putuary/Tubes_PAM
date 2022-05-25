/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import { StyleSheet, Text, View } from 'react-native';
 import React from 'react';
 import {NavigationContainer} from '@react-navigation/native';
 import Route from './rute';
 
 
 const DaftarFilm = () => {
   return (
     <NavigationContainer>
     <Route/>
     </NavigationContainer>
   );
 };
 
 export default DaftarFilm;
 
 const styles = StyleSheet.create({});