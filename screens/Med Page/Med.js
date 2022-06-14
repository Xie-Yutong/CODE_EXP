import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Symptom from '../../components/Symptom';
import Home from '../Menu Page/Home';

function MedScreen() {
  const navigation = useNavigation()
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Would you like to go to the Medical Centre?</Text>
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
      <View style={styles.submissionTop}>
        <Image style={styles.subImage} source={require('../../assets/check.png')}></Image>
        <Text style={styles.subTYText}>Thank you for completing the checklist!</Text>
        <Text style={styles.subNoteText}>Note: You may view your QNo & E.W.T from your Home page.</Text>
      </View>

      <View style={styles.submissionBottom}>
        <TouchableOpacity style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Your queue number (QNo) :</Text>
        </TouchableOpacity>
        <Text style={styles.QNo}>102</Text>
        <TouchableOpacity style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Your estimated waiting time (E.W.T) :</Text>
        </TouchableOpacity>
        <Text style={styles.Ewtime}>20 minutes</Text>
      </View>
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
  },
  submissionTop: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  subImage: {
    width: 100,
    height: 100,
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: 'flex-start',
  },
  subTYText: {
    paddingTop: 20,
  },
  subNoteText: {
    paddingTop: 20,
    fontSize: 12,
    fontStyle: 'italic',
  },
  subHeader: {
    backgroundColor: '#558F6C',
    border: 1,
    borderRadius: 25,
    width: 370,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    top: 9,
    margin: 4,
  },
  subHeaderText: {
    padding: 10,
    color: "#fff",
  },
  submissionBottom: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  QNo: {
    fontSize: 80,
    fontWeight: '800',
  },
  Ewtime: {
    paddingTop: 15,
    paddingBottom: 20,
    fontSize: 40,
    fontWeight: '600',
  },


})