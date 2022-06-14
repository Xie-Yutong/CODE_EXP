import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import SearchBar from './SearchBar';
import Screen from './Screen';
import { FontAwesome } from '@expo/vector-icons'; 

function ParaScreen () {
  const navigation = useNavigation()
  return (
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity 
            style={styles.button} 
            onPress= {() => navigation.navigate("ParaSecondScreen")} title="Second Screen">
              <Text style = {styles.chatHistory}>View Chat History</Text>
          </TouchableOpacity>
          <Screen>
            <SearchBar/>
          </Screen>
          <FontAwesome style={styles.SearchIcon}name="search" size={24} color="black" />
          <Text style={styles.Para}>List of Paracounsellors</Text>
      </View>
  );
}

function ParaSecondScreen() {
  return (
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Paracounsellor Second Page!</Text>
      </View>
  );
}

function ParaThirdScreen() {
  return (
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Paracounsellor Third Page!</Text>
      </View>
  );
}

const Stack = createStackNavigator()

export default function ParaStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name = "Paracounsellor Page" component = {ParaScreen} />
          <Stack.Screen name = "ParaSecondScreen" component = {ParaSecondScreen} />
          <Stack.Screen name = "ParaThirdScreen" component = {ParaThirdScreen} />
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#558F6C',
    border: 1,
    borderRadius: 15,
    position: 'absolute',
    width: 370,
    height: 46,
    left: 9,
    top: 9,
    margin: 4,
  },
  chatHistory: {
    fontFamily: 'sans-serif',
    fontSize: 22,
    fontStyle: 'normal',
    color: 'white',
    padding: 5,
    position: 'absolute',
    width: 188,
    height: 40,
    left: 90,
    top: 4,
  },
  Para: {
    position: 'absolute',
    width: 246,
    height: 27,
    left: 20,
    top: 135,
    fontFamily: 'sans-serif',
    fontStyle: 'normal',
    fontSize: 22,
    fontWeight: '700',
    color: '#3A503C',
  },
  SearchIcon: {
    position: 'absolute',
    left: 30,
    top: 85,
  }
});