import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';

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

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>

      <FlatList
      numColumns={2} 
      keyExtractor={(item) => item.id}
      data={people}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={ () => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
        
      )}
      />

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
    marginHorizontal: 10,
    marginTop: 24

  }
});
