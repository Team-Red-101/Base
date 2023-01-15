import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Image, Button, SafeAreaView } from 'react-native';
import { useEffect, useState } from "react";

const handlePress = () => alert("Image Pressed");

const Home = ({navigation}) => {
      const [prompts, setPrompts] = useState([{
          prompt: '',
          question: ''
      }])

      useEffect(() => {
        fetch('/prompts').then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setPrompts(jsonRes));
      })

      return (
      <View style={styles.container}>
        {prompts.map(prompt => <Text>{prompt.question}</Text>)}
        <TouchableHighlight onPress ={handlePress}>
          <Image  
            source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"}}>
          </Image>
        </TouchableHighlight>
        <Button title="Switch Page" onPress ={() =>
          navigation.navigate("Second")}>
        </Button>
        {prompts.map(prompt => <Text>{prompt.prompt}</Text>)}
      </View>  
    );
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5DBB63',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })


export default Home;