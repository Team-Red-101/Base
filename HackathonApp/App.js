import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableHighlight, Text, View, Image, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/screens/Home.js';
import Second from './app/screens/Second.js';
import CarbonFootPrint from './app/src/CarbonFootPrint'

const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = 'Home' component = {Home}/>
        <Stack.Screen name = 'Second' component = {Second}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  )
}
      
