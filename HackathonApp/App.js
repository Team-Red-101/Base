import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableHighlight, Text, View, Image, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/navigation/screens/Home.js';
import Second from './app/navigation/screens/Second.js';
import * as React from 'react';
import MainContainer from './app/navigation/MainContainer';


function App() {
  return (
    <MainContainer/>
  );
}

export default App;

{/*
const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = 'Home' component = {Home}
        options={
          {
            title:"Save Earth",
            headerStyle: {
              backgroundColor:'black',
            },
            
            headerTintColor:'white',
            headerTitleStyle:{
               textAlign:'left',
               fontWeight:'bold',
               fontSize:35,
               fontFamily:'Barlow-Condensed-Black.ttf'
            }
           
          }
        }
        />
        <Stack.Screen name = 'Second' component = {Second}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  )
}
*/}


      

