import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Splash} from '../pages';
import {Homescreen} from '../pages';
import {Film} from '../pages';
import {Serial} from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Mainapp = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {backgroundColor: '#000000', height: 60},
            }   
        }>
          <Tab.Screen name="Beranda" component={Homescreen} options={{
              tabBarIcon:({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                      <Image source={
                          require('../Assets/Icon/beranda.png')}
                          resizeMode="contain"
                          style={{
                              width: 30,
                              height: 30,
                              tintColor: focused ? '#ffffff' : '#cccccc'
                          }}
                          />
                      <Text style={{color: focused ? '#ffffff' : '#cccccc', fontSize: 12 }}>Beranda</Text>
                  </View>
                )
          }}/>
          <Tab.Screen name="Serial" component={Serial} options={{
              tabBarIcon:({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                      <Image source={
                          require('../Assets/Icon/serial.png')}
                          resizeMode="contain"
                          style={{
                              width: 30,
                              height: 30,
                              tintColor: focused ? '#ffffff' : '#cccccc'
                          }}
                          />
                      <Text style={{color: focused ? '#ffffff' : '#cccccc', fontSize: 12 }}>Serial</Text>
                  </View>
                )
          }}/>
          <Tab.Screen name="Film" component={Film} options={{
              tabBarIcon:({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                      <Image source={
                          require('../Assets/Icon/film.png')}
                          resizeMode="contain"
                          style={{
                              width: 30,
                              height: 30,
                              tintColor: focused ? '#ffffff' : '#cccccc'
                          }}
                          />
                      <Text style={{color: focused ? '#ffffff' : '#cccccc', fontSize: 12 }}>Film</Text>
                  </View>
                )
          }}/>
        </Tab.Navigator>
    );
  };

const Route = () => {
  return (
    
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{
        headerShown: false}}/>
        <Stack.Screen name="Mainapp" component={Mainapp} options={{
        headerShown: false}}/>
    </Stack.Navigator>
  );
  
};


export default Route;

const styles = StyleSheet.create({});