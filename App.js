import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { ImageBackground,StyleSheet, Text, View, Button, TextInput } from 'react-native';

const image = { uri: "https://preview.redd.it/ravmjkbpojg21.jpg?auto=webp&s=dfc6ce65b74aa28c9cd8799e75538312df0fc629" };


export default function App() {
  const [outputText,setoutputText] = useState('Open up App.js to start working on your app!')
  return (
    <View style={styles.container}>
      <ImageBackground source = {image} resizeMode='cover' style={styles.image}>
      <View style={styles.input}>
        <TextInput 
        placeholder = "Course Goal"
        placeholderTextColor = "white"
        style = {styles.TextForm}  
        />
        <Button title = 'ADD' />
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding:100,
    flex:1,
    alignItems: 'stretch',
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:80,
    color: 'white'
  },
  TextForm:{
    borderColor: 'white',
    borderWidth: 1,
    paddingTop: 5,
    width: '80%',
    fontSize: 20,
    color: 'white'
  },
  image: {
    flex:1,
    justifyContent: 'flex-start',
  },
  

});
