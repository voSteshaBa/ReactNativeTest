import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
var RNFS = require('react-native-fs');


var path = RNFS.DocumentDirectoryPath + '/test.txt';

export default function App() {
  
    const clickWrite = () => {

      RNFS.writeFile(path, 'StevoProba', 'utf8')
          .then((success) => {
            alert('File created');
    })
          .catch((err) => {
          console.log('Error');
    });
  }

    const clickRead = () => {
      RNFS.readFile(path, 'utf8').then(res => {
    // console.log('File read');
      console.log(res);
    })
        .catch(err => {
    
        console.log('Error');
    
    });
  }

  const clickAddTxt = () => {

    RNFS.appendFile(path, 'Novi tekst', 'utf8')
            .then((success) => {
                console.log('Text added');
            })
            .catch((err) => {
                console.log('Error');               
});
}

const clickDelete = () => {

  RNFS.unlink(path)
  .then(() => {
      console.log('File deleted');
  })
  .catch((err) => {
      console.log('Error');
  });
}

  return (
    
    <View style={styles.container}>
       <View style={styles.buttonContainer}>
            <Button title='Create File' onPress={clickWrite} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title='Read File' onPress={clickRead} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title='Add new text' onPress={clickAddTxt} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title='Delete file' onPress={clickDelete} />
        </View> 
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',  
  },
  buttonContainer: {
    margin: 10,
  }
});

