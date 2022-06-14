import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

function MedScreen() {
  const navigation = useNavigation()
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Confirm to go to Medical Centre?</Text>
        <TouchableOpacity 
          style={styles.medcenbutton} 
          onPress= {() => navigation.navigate("MedSecondScreen")} title="Second Screen">
            <Text style = {styles.yesButton}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.medcenbutton} 
          onPress= {() => navigation.navigate("HomeScreen")} title="Home Screen">
            <Text style = {styles.noButton}>No</Text>
        </TouchableOpacity>
      </View>
    );
  }

function MedSecondScreen() {
  return (
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Medical Centre Second Page!</Text>
      </View>
  );
}

function HomeScreen() {
  return (
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Go to home page!</Text>
      </View>
  );
}

const Stack = createStackNavigator()

export default function MedStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name = "Medical Centre Page" component = {MedScreen} />
          <Stack.Screen name = "MedSecondScreen" component = {MedSecondScreen} />
          <Stack.Screen name = "HomeScreen" component = {HomeScreen} />
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  medcenbutton: {
    backgroundColor: '#558F6C',
    border: 1,
    borderRadius: 15,
    width: 370,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    top: 9,
    margin: 4,
  },
})