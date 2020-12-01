import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'SQL', id: '1'},
    {name: 'C#', id: '2'},
    {name: 'React', id: '3'},
    {name: 'ReactNative', id: '4'},
    {name: 'Java', id: '5'},
    {name: 'C++', id: '6'},
    {name: 'Oracle', id: '7'},
  ]);
 


  return (
    <View style={styles.container}>

      <FlatList
      numColumns={2} 
      keyExtractor={(item) => item.id}
      data={people}
      renderItem={({ item }) => (
        <Text style={styles.item}>{item.name}</Text>
      )}
      />

    {/*  <ScrollView>
     {people.map(item => (
         <View id={item.id}>
           <Text style={styles.item}>{item.name}</Text>
         </View>
       ))}
     </ScrollView> */}

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
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10

  }
});
