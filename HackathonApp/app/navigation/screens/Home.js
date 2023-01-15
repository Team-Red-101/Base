import { NavigationContainer, StackActions } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Image, Button, SafeAreaView, TouchableWithoutFeedback, Pressable } from 'react-native';
import App from '../../../App';




const handlePress = () => alert("Image Pressed");
const Home = ({ navigation }) => {
  return (

    <View style={styles.container}>
      <Text>Dont have a bad carbon foot print or I'll tell on yo</Text>
      <TouchableHighlight onPress={handlePress}>

        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }}>

        </Image>

      </TouchableHighlight>

      <Button title="Switch Page" onPress={() =>
        navigation.navigate("Second")}>
      </Button>
      <View>
      <Pressable style={styles.yesButton} onPress={() =>
        navigation.navigate("Second")}>
      <Text style={styles.yesText}>YES</Text>
    </Pressable>
    <Pressable style={styles.noButton} onPress={() =>
        navigation.navigate("Second")}>
      <Text style={styles.noText}>NO</Text>
    </Pressable>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  yesButton:{
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:40,
    backgroundColor:'#D9E3DA',
    borderRadius:10,
    padding:10,
    fontWeight:600,
    marginTop:15,
  },

  yesText: {
    fontSize:15,
    fontWeight:'bold',
   letterSpacing:2,
  },

  noButton:{
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:40,
    backgroundColor:'#D9E3DA',
    borderRadius:10,
    padding:10,
    fontWeight:600,
    marginTop:15,
  },

  noText: {
    fontSize:15,
    fontWeight:'bold',
   letterSpacing:2,
  }
  

  
})


export default Home;