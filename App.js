import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'SQL', key: '1'},
    {name: 'C#', key: '2'},
    {name: 'React', key: '3'},
    {name: 'ReactNative', key: '4'},
    {name: 'Java', key: '5'},
    {name: 'C++', key: '6'},
    {name: 'Oracle', key: '7'},
  ]);
 


  return (
    <View style={styles.container}>

     <ScrollView>
     {people.map(item => (
         <View key={item.key}>
           <Text style={styles.item}>{item.name}</Text>
         </View>
       ))}
     </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'yellow',
    fontSize: 24,

  }
});
