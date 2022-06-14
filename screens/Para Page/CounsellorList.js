import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import names from './names'

const namesAsObject = names.map((name) => {

    return {
      name: name
    }
  
  });
  
  export default function App() {
  
    const renderItem = ({ item }) => {
      return <View>
          {names.map(name => <Text>{name.name}</Text>)}
      </View>
    }
  
    return (
      <FlatList 
        data = {namesAsObject}
        renderItem = {renderItem}
        keyExtractor = {(item) => item.name}
        />
    );
  }