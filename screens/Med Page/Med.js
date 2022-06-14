import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Symptom from '../../components/Symptom';
import Home from '../Menu Page/Home';

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
          onPress= {() => navigation.navigate("Home")} title="Home Screen">
            <Text style = {styles.noButton}>No</Text>
        </TouchableOpacity>
      </View>
    );
  }

function Symptoms() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
  
      <Text style={styles.sectionTitle}>Please tick all the applicable symptoms that you have experienced</Text>
      <Symptom text={'Sore Throat'}></Symptom>
      <Symptom text={'Cough'}></Symptom>
      <Symptom text={'Runny Nose'}></Symptom>
      <Symptom text={'Fever (Above 38℃)'}></Symptom>
      <Symptom text={'Fever (38℃ and below)'}></Symptom>
      <Symptom text={'Muscle Pain'}></Symptom>
      <Symptom text={'Diarrhoea'}></Symptom>
      <Symptom text={'Nausea'}></Symptom>
      <Symptom text={'Vomiting'}></Symptom>
      <Symptom text={'Others'}></Symptom>
      <TouchableOpacity style={styles.submitButton}
      onPress= {() => navigation.navigate("SubmissionScreen")} title="SubmissionScreen">
        <Text>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen() {
  return (
      <Home></Home>
  );
}

function SubmissionScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={require('../../assets/tick-solid.png')}></Image>
    <Text>Submitted!</Text>
    </View>
  );
}


const Stack = createStackNavigator()

export default function MedStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name = "Medical Centre Page" component = {MedScreen} />
          <Stack.Screen name = "Symptoms" component = {Symptoms} />
          <Stack.Screen name = "Home" component = {HomeScreen} />
          <Stack.Screen name = "SubmissionScreen" component = {SubmissionScreen} />
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

  submitButton: {
    backgroundColor: '#558F6C',
    border: 1,
    borderRadius: 15,
    width: 370,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    top: 9,
    margin: 4,
  }
})