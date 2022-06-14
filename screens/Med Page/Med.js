import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Symptoms from '../../components/Symptoms';

function MedScreen() {
  const navigation = useNavigation()
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Confirm to go to Medical Centre?</Text>
        <TouchableOpacity 
          style={styles.medcenbutton} 
          onPress= {() => navigation.navigate("Symptoms")} title="Symptoms">
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

function Symptoms() {
  
  return (
    <View style={styles.container}>
  
      <Text style={styles.sectionTitle}>Please tick all the applicable symptoms that you have experienced</Text>
      <Symptoms></Symptoms>
      <Button title="Submit" style={styles.submitButton}></Button>
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
          <Stack.Screen name = "Symptoms" component = {Symptoms} />
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

  sectionTitle: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  wrapper: {
    flexDirection: "row",
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  text: {
    paddingHorizontal: 10,
  },

  submitButton: {
    color: "#558F6C",
    paddingHorizontal: 20,
    borderRadius: 15,
  }
})