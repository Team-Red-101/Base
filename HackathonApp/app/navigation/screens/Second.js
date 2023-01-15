import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Image, Button, SafeAreaView } from 'react-native';

    
    const handlePress = () => alert("Image Pressed");
    const Second = ({navigation}) => {
    return (
        
      <SafeAreaView style={styles.container}>
        <Text >Balls</Text>
        <TouchableHighlight onPress ={handlePress}>
                
          <Image  
            source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"}}>

          </Image>
                
        </TouchableHighlight>
      </SafeAreaView>  
    );
            }               


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })


export default Second;