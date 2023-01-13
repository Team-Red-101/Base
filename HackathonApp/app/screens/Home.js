import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Image, Button, SafeAreaView } from 'react-native';

    
    const handlePress = () => alert("Image Pressed");
    const Home = ({navigation}) => {
    return (
        
      <View style={styles.container}>
        <Text >Dont have a bad carbon foot print or I'll tell on you</Text>
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