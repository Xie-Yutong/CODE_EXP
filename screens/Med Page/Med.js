import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import CheckBox from "expo-checkbox";

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
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);
  const [agree4, setAgree4] = useState(false);
  const [agree5, setAgree5] = useState(false);
  const [agree6, setAgree6] = useState(false);
  const [agree7, setAgree7] = useState(false);
  const [agree8, setAgree8] = useState(false);
  const [agree9, setAgree9] = useState(false);
  const [agree10, setAgree10] = useState(false);
  return (
    <View style={styles.container}>
  
      <Text style={styles.sectionTitle}>Please tick all the applicable symptoms that you have experienced</Text>
      <View style={styles.wrapper}>
        <CheckBox value={agree1}
          onValueChange={() => setAgree1(!agree1)}
          color={agree1 ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Sore Throat</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree2}
          onValueChange={() => setAgree2(!agree2)}
          color={agree2 ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Cough</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree3}
          onValueChange={() => setAgree3(!agree3)}
          color={agree3 ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Runny Nose</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree4}
          onValueChange={() => setAgree4(!agree4)}
          color={agree4 ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Fever (Above 38℃)</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree5}
          onValueChange={() => setAgree5(!agree5)}
          color={agree5 ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Fever (38℃ and below)</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree6}
          onValueChange={() => setAgree6(!agree6)}
          color={agree6 ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Muscle Pain</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree7}
          onValueChange={() => setAgree7(!agree7)}
          color={agree7 ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Vomiting</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree8}
          onValueChange={() => setAgree8(!agree8)}
          color={agree8 ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Diarrhoea</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree9}
          onValueChange={() => setAgree9(!agree9)}
          color={agree9 ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Nausea</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree10}
          onValueChange={() => setAgree10(!agree10)}
          color={agree10 ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Others</Text>
      </View>
      <Button color={"#558F6C"}
        title="Submit"
        paddingHorizontal="20"
      />
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
  }
})